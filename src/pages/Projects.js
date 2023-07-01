import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import FilteredProjects from '../components/FilteredProjects'
import { useInView } from 'react-intersection-observer'
import Loading from '../components/Loading'

const Projects = () => {
  const { t, i18n, ready } = useTranslation()
  const projects = t('projects', { returnObjects: true })

  const [data, setData] = useState(null)
  const [filterType, setFilterType] = useState('Featured') //to display the featured projcts on page load
  const [ref, inView] = useInView()

  const handleFilterButtonClick = (type) => {
    setFilterType(type)
  }
  return (
    <section
      ref={ref}
      id='projects'
      className={`project-section ${inView ? 'fade-up fade-up-active' : ''}`}
    >
      {ready ? (
        <>
          <h3 className='section-title'>
            <span className='parallax-link-number'> 03. </span>
            <span className='title-text'>{projects.titleSectionProjects}</span>
          </h3>
          <p className='project-intro-text'>{projects.introSelectedProjects}</p>
          <div className='project-filter-buttons'>
            <button
              onClick={() => handleFilterButtonClick('All')}
              className={`primary-button project-button ${
                filterType === 'All' ? 'active' : ''
              }`}
            >
              <span>{projects.buttonProjectTitleAll}</span>
            </button>
            <button
              onClick={() => handleFilterButtonClick('Featured')}
              className={`primary-button project-button ${
                filterType === 'Featured' ? 'active' : ''
              }`}
            >
              <span>{projects.buttonProjectTitleFeatured}</span>
            </button>
            <button
              onClick={() => handleFilterButtonClick('Workshop')}
              className={`primary-button project-button ${
                filterType === 'Workshop' ? 'active' : ''
              }`}
            >
              <span>{projects.buttonProjectTitleWorkshop}</span>
            </button>
          </div>

          <div className='project-cards-box'>
            <FilteredProjects
              selectedProjects={projects.projects}
              filterType={filterType}
            />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </section>
  )
}

export default Projects
