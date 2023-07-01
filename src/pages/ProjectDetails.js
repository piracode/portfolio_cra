import { useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Accordion from '../components/Accordion'
import Footer from '../components/Footer'
import { FaGithub, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa'
import { BsPlusCircleFill } from 'react-icons/bs'
import NavigationLinks from '../components/NavigationLinks'
import Loading from '../components/Loading'

const ProjectDetails = () => {
  const { slug } = useParams() // Retrieve the project slug from the URL
  // console.log('Slug:', slug)

  const { i18n, ready, t } = useTranslation() // Access the i18n translation object

  const projects = t('projects', { returnObjects: true })
  // console.log(projects)

  const [sortedProject, setSortedProject] = useState(null)

  useEffect(() => {
    const matchedProject = projects.projects.find(
      (project) => project.slug === slug
    )

    if (
      matchedProject &&
      (!sortedProject || matchedProject.slug !== sortedProject.slug)
    ) {
      setSortedProject(matchedProject)
    }
  }, [projects, slug, sortedProject])

  if (!sortedProject) {
    return <Loading /> // Render a loading state while waiting for the data
  }
  const { post } = sortedProject
  return (
    <>
      {ready ? (
        <div className='parallax-container'>
          <section
            className={`project-details-box project-id-${
              sortedProject ? sortedProject.id : ''
            }`}
          >
            <h1 className='project-details-title'>
              {sortedProject ? sortedProject.title : 'Loading...'}
            </h1>

            <div className='image-container'>
              <picture>
                <source
                  media='(max-width: 767px)'
                  srcSet={sortedProject.thumbnailMobile}
                />
                <source
                  media='(min-width: 768px)'
                  srcSet={sortedProject.thumbnail}
                />
                <img
                  className='project-details-img'
                  src={sortedProject.thumbnail}
                  alt={sortedProject.alt}
                />
              </picture>
            </div>

            <div className='project-details-cta-box'>
              {/* IF design is false  */}
              {!sortedProject.design ? (
                <div className='project-icon-box-details-page'>
                  <a
                    className='project-icon-link'
                    href={sortedProject.gitHubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    role='button'
                    aria-label={t('project.gitHubCTAAriaLabel')}
                  >
                    <div className='project-icon-wrapper'>
                      <FaGithub
                        className='project-icon-svg'
                        title='Open GitHub'
                      />
                      <span className='project-icon-title'>
                        {sortedProject.gitHubCTA}
                      </span>
                    </div>
                  </a>
                </div>
              ) : (
                // If design is true
                <div className='project-icon-box-details design'>
                  <a
                    className='project-icon-link'
                    href={sortedProject.pdfLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    role='button'
                    aria-label={t('project.pdfCTAAriaLabel')}
                  >
                    <div className='project-icon-wrapper'>
                      {/* Render a different icon for design=true */}
                      <FaFilePdf title='Open PDF' />
                      <span className='project-icon-title'>
                        {/* {project.gitHubCTA} */}
                        {sortedProject.pdfCTA}
                      </span>
                    </div>
                  </a>
                </div>
              )}
              <div className='liveSite'>
                <a
                  className='project-icon-link'
                  href={sortedProject.liveSiteLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  role='button'
                  aria-label={t('project.liveSiteCTAAriaLabel')}
                >
                  <div className='project-icon-wrapper'>
                    <FaExternalLinkAlt title='Open Live Site' />
                    <span className='project-icon-title'>
                      {sortedProject.liveSiteCTA}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            {post && (
              <div className='project-details-box'>
                <h3 className='project-details-overview-title'>
                  {post.titleOverview}
                </h3>
                <p className='project-details-overview-paragraph'>
                  {post.overview1}
                </p>
                <p className='project-details-overview-paragraph'>
                  {post.overview2}
                </p>
                {post.accordions && (
                  <Accordion
                    accordions={post.accordions}
                    projectID={sortedProject.id}
                  />
                )}
              </div>
            )}

            <Footer />
          </section>
          <NavigationLinks />
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default ProjectDetails
