// FilterProjects.js
// import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { BsPlusCircleFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const FilteredProjects = ({ selectedProjects, filterType }) => {
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
  console.log('selected Projects:', selectedProjects)
  console.log('Workshop Projects:', filteredProjects)

  const renderProject = (project) => (
    <article key={project.id} className='project project-article'>
      <h4 className='project-title'>{project.title}</h4>
      {/* <img
    className='project-img'
    src={project.thumbnail}
    alt={project.title}
  /> */}

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
          <div className='project-icon-box liveSite'>
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
          <div className='project-icon-box details'>
            <Link
              className='project-icon-link'
              to={`/projects/${project.slug}`}
            >
              <div className='project-icon-wrapper'>
                <BsPlusCircleFill />
                <span className='project-icon-title'>{project.detailsCTA}</span>
              </div>
            </Link>
          </div>
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
  )

  {
    /* Map over the filtered projects and render each project */
  }
  return <>{filteredProjects.map((project, index) => renderProject(project))}</>
}

export default FilteredProjects
