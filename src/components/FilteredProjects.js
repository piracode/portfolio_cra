// FilterProjects.js
// import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa'
import { BsPlusCircleFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const FilteredProjects = ({ selectedProjects = [], filterType }) => {
  const { t, ready } = useTranslation()
  // console.log('t name' + t.name)

  // Switch statement to filter the projects based on the filter type
  const filterProjects = (projects) => {
    switch (filterType) {
      case 'All':
        return projects
      case 'Featured':
        return projects.filter(
          (project) => project.featured && !project.workshop
        )

      case 'Workshop':
        return projects.filter((project) => project.workshop)
      default:
        return projects
    }
  }

  // Filter the selected projects based on the filter type
  const filteredProjects = filterProjects(selectedProjects)

  const renderProject = (project) => (
    <article
      key={project.id}
      className={`project project-article project-${project.id}`}
    >
      <h4 className='project-title'>{project.title}</h4>
      <p className='project-excerpt'>{project.excerpt}</p>
      <div className='project-footer'>
        <div className='project-skills-box'>
          {/* <span className='skill-label'>Skills: </span> */}
          {project.skills.map((skill, skillIndex) => (
            <span key={skillIndex} className='project-skill'>
              {skill}
            </span>
          ))}
        </div>
        <div className='project-cta-box'>
          {/* Render different icons based on design property */}
          {/* If Project-design false */}
          {!project.design ? (
            <div className='project-icon-box github'>
              <a
                className='project-icon-link'
                href={project.gitHubLink}
                target='_blank'
                rel='noopener noreferrer'
                role='button'
                aria-label='Link to GitHub'
              >
                <div className='project-icon-wrapper'>
                  <FaGithub title='Open GitHub' />
                  <span className='project-icon-title'>
                    {project.gitHubCTA}
                  </span>
                </div>
              </a>
            </div>
          ) : (
            // If project design true
            <div className='project-icon-box design'>
              <a
                className='project-icon-link'
                href={project.pdfLink}
                target='_blank'
                rel='noopener noreferrer'
                role='button'
                aria-label='Link to PDF'
              >
                <div className='project-icon-wrapper'>
                  <FaFilePdf title='Open PDF' />
                  <span className='project-icon-title'>{project.pdfCTA}</span>
                </div>
              </a>
            </div>
          )}

          <div className='project-icon-box liveSite'>
            <a
              className='project-icon-link'
              href={project.liveSiteLink}
              target='_blank'
              rel='noopener noreferrer'
              role='button'
              aria-label='Link to live site'
            >
              <div className='project-icon-wrapper'>
                <FaExternalLinkAlt title='Open Live Website' />
                <span className='project-icon-title'>
                  {project.liveSiteCTA}
                </span>
              </div>
            </a>
          </div>
          <div className='project-icon-box details'>
            <Link
              className='project-icon-link'
              to={`/projects/${project.slug}`}
              role='button'
              aria-label='Link to project details'
            >
              <div className='project-icon-wrapper'>
                <BsPlusCircleFill title='Project Details' />
                <span className='project-icon-title'>{project.detailsCTA}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )

  {
    /* Map over the filtered projects and render each project */
  }
  return (
    <>
      {ready &&
        filteredProjects &&
        filteredProjects.map((project, index) => renderProject(project))}
    </>
  )
}

export default FilteredProjects
