import { useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { BsPlusCircleFill } from 'react-icons/bs'
import NavigationLinks from '../components/NavigationLinks'

const ProjectDetails = () => {
  const { slug } = useParams() // Retrieve the project slug from the URL
  const { i18n } = useTranslation() // Access the i18n translation object

  const [projectDetails, setProjectDetails] = useState(null)
  const [project, setProject] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/json/projects.json')
      const jsonData = await response.json()
      setData(jsonData)
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (data) {
      const currentLanguage = i18n.language // Retrieve the currently selected language
      const selectedLanguageData = data.projects.selected[currentLanguage] // Retrieve the language-specific data
      const selectedProject = selectedLanguageData.projects.find(
        (project) => project.slug === slug
      ) // Find the project with a matching slug

      setProjectDetails(selectedProject)
      setProject(selectedProject)
    }
  }, [data, i18n.language, slug])

  if (!projectDetails) {
    return <p>Loading...</p>
  }

  // Extract titleOverview and overview from projectDetails.post
  const { titleOverview, overview1, overview2, accordions } =
    projectDetails.post
  // console.log(titleOverview)
  // console.log(overview)
  // console.log(accordions)
  // console.log(project.id)

  return (
    <div className='parallax-container'>
      <section className={`project-details-box project-id-${project.id}`}>
        <h1 className='project-details-title'>{project.title}</h1>
        <div className='image-container'>
          <picture>
            <source
              media='(max-width: 767px)'
              srcSet={project.thumbnailMobile}
            />
            <source media='(min-width: 768px)' srcSet={project.thumbnail} />
            <img
              className='project-details-img'
              src={project.thumbnail}
              alt={project.alt}
            />
          </picture>
        </div>

        <div className='project-details-cta-box'>
          {/* IF design is false , display the icons below the IMG in project details page for web dev porjects */}
          {!project.design ? (
            <div className='project-icon-box-details-page'>
              <a
                className='project-icon-link'
                href={project.gitHubLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='project-icon-wrapper'>
                  <FaGithub className='project-icon-svg' />
                  <span className='project-icon-title'>
                    {project.gitHubCTA}
                  </span>
                </div>
              </a>
            </div>
          ) : (
            // If design is true, display the icons below the IMG in project details page for design proejcts
            <div className='project-icon-box-details design'>
              <a
                className='project-icon-link'
                href={project.gitHubLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='project-icon-wrapper'>
                  {/* Render a different icon for design=true */}
                  <BsPlusCircleFill />
                  <span className='project-icon-title'>
                    {/* {project.gitHubCTA} */}
                    {project.pdfCTA}
                  </span>
                </div>
              </a>
            </div>
          )}
          <div className='liveSite'>
            <a
              className='project-icon-link'
              href={project.liveSiteLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='project-icon-wrapper'>
                <FaExternalLinkAlt />
                <span className='project-icon-title'>
                  {project.liveSiteCTA}
                </span>
              </div>
            </a>
          </div>
        </div>
        <h3 className='project-details-overview-title'>{titleOverview}</h3>
        <p className='project-details-overview-paragraph'>{overview1}</p>
        <p className='project-details-overview-paragraph'>{overview2}</p>
        {/* If data exists, render the Accordion component with accordions, titleOverview, and overview data */}
        {projectDetails.post && accordions && (
          <Accordion accordions={accordions} projectID={project.id} />
        )}

        <Footer />
      </section>
      <NavigationLinks />
    </div>
  )
}

export default ProjectDetails
