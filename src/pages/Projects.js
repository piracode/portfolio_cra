import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { BsPlusCircleFill } from 'react-icons/bs'
// import {
//   TbArrowBigRightLinesFilled,
//   TbArrowBigRightLineFilled,
// } from 'react-icons/tb'

const Projects = () => {
  const { i18n } = useTranslation()
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/json/projects.json')
      const jsonData = await response.json()
      setData(jsonData)
    }

    fetchData()
  }, [])

  const currentLanguage = i18n.language // Retrieve the currently selected language
  const selectedLanguageData = data?.projects.selected[currentLanguage] // Retrieve the language-specific data from the 'data' object based on the current language
  const titleSectionProjects = selectedLanguageData?.titleSectionProjects // Extract the value of the 'titleSectionProjects' property from the language-specific data
  const selectedProjects = selectedLanguageData?.projects // Extract the value of the 'projects' property from the language-specific data

  return (
    <>
      {data ? (
        <section id='projects' className='project-section'>
          <h3 className='section-title'>
            <span className='parallax-link-number'> 02. </span>
            <span className='title-text'>{titleSectionProjects}</span>
            <span className='title-line'>&nbsp;</span>
          </h3>
          <div className='project-cards-box'>
            {selectedProjects.map((project, index) => (
              <article key={project.id} className='project project-article'>
                <h4 className='project-title'>{project.title}</h4>
                {/* <img
                className='project-img'
                src={project.thumbnail}
                alt={project.title}
              /> */}
                <p className='project-excerpt'>{project.excerpt}</p>
                <div className='project-skills-box'>
                  {/* <span className='skill-label'>Skills: </span> */}
                  {project.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className='project-skill'>
                      {skill}
                    </span>
                  ))}
                </div>
                {/* <button className='primary-button project-button'>
                {project.liveSiteCTA}
                </button>
                <button className='primary-button project-button'>
                {project.gitHubCTA}
                </button>
                <button className='primary-button project-button'>
                {project.detailsCTA}
              </button> */}
                <div className='project-cta-box'>
                  <div className='project-icon-box github'>
                    <a
                      className='project-icon-link'
                      href='https://github.com/piracode/flixr_react'
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
                  <div className='project-icon-box liveSite'>
                    <a
                      className='project-icon-link'
                      href='https://martha.codes/flixr/'
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
                  <div className='project-icon-box details  '>
                    <a
                      className='project-icon-link'
                      href={`/projects/${project.slug}`}
                    >
                      <div className='project-icon-wrapper'>
                        <BsPlusCircleFill />
                        <span className='project-icon-title'>
                          {project.detailsCTA}
                        </span>
                      </div>
                    </a>
                  </div>
                  {/* <button className='project-icon-box liveSite primary-button project-button'>
                  <a
                  className='project-icon-link'
                  href={project.liveSiteLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  >
                  <BsPlusCircleFill />
                  <span className='project-icon-title'>
                  {project.detailsCTA}
                  </span>
                  </a>
                </button> */}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Projects
