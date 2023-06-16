import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Accordion from '../components/Accordion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { BsPlusCircleFill } from 'react-icons/bs'
import NavigationLinks from '../components/NavigationLinks'

const ProjectDetails = () => {
  const { slug } = useParams() // Retrieve the project slug from the URL
  const { i18n } = useTranslation() // Access the i18n translation object
  const navigate = useNavigate()

  const [projectDetails, setProjectDetails] = useState(null)
  const [project, setProject] = useState(null)
  const [data, setData] = useState(null)

  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

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

  return (
    <div className='parallax-container'>
      <section className='project-details-box'>
        <h1 className='project-details-title'>{project.title}</h1>
        <img
          className='project-details-img'
          src={project.thumbnail}
          alt={slug}
        />
        {/* <button>{project.liveSiteCTA}</button>
        <button>{project.gitHubCTA}</button> */}
        <div className='project-details-cta-box'>
          {!project.design && (
            <div className='project-icon-box github'>
              <a
                className='project-icon-link'
                href={project.gitHubLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='project-icon-wrapper'>
                  <FaGithub />
                  <span className='project-icon-title'>
                    {project.gitHubCTA}
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
        {/* If data exist , render compoent with accordions data */}
        {projectDetails.post && projectDetails.post.accordions && (
          <Accordion accordions={projectDetails.post.accordions} />
        )}
      </section>
      {/* <Navigation
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        slug={slug}
      /> */}
      <NavigationLinks
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        slug={slug}
      />
      <Footer />
    </div>
  )
}

export default ProjectDetails
