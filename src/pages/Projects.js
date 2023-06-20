import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { BsPlusCircleFill } from 'react-icons/bs'
import FilteredProjects from '../components/FilteredProjects'
import { InView, useInView } from 'react-intersection-observer'

// import {
//   TbArrowBigRightLinesFilled,
//   TbArrowBigRightLineFilled,
// } from 'react-icons/tb'

const Projects = () => {
  const { i18n } = useTranslation()
  const [data, setData] = useState(null)
  const [filterType, setFilterType] = useState('Featured') //to display the featured projcts on page load

  const [ref, inView] = useInView()

  const handleFilterButtonClick = (type) => {
    setFilterType(type)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/json/projects.json')
      const jsonData = await response.json()
      setData(jsonData)
    }

    fetchData()
  }, [])

  // Retrieve the currently selected language
  const currentLanguage = i18n.language

  // Retrieve the language-specific data from the 'data' object based on the current language
  const selectedLanguageData = data?.projects.selected[currentLanguage]

  // Extract relevant properties from the language-specific data
  const titleSectionProjects = selectedLanguageData?.titleSectionProjects
  const selectedProjects = selectedLanguageData?.projects
  const introSelectedProjects = selectedLanguageData?.introSelectedProjects
  const btnSelected = selectedLanguageData?.buttonProjectTitleFeatured
  const btnAll = selectedLanguageData?.buttonProjectTitleAll
  const btnWorkshop = selectedLanguageData?.buttonProjectTitleWorkshop

  console.log('projects inView:', inView)

  return (
    <>
      {data ? (
        <section
          ref={ref}
          id='projects'
          className={`project-section ${
            inView ? 'fade-up fade-up-active' : ''
          }`}
        >
          <h3 className='section-title'>
            <span className='parallax-link-number'> 03. </span>
            <span className='title-text'>{titleSectionProjects}</span>
            <span className='title-line'>&nbsp;</span>
          </h3>
          <p className='project-intro-text'>{introSelectedProjects}</p>
          <div className='project-filter-buttons'>
            <button
              onClick={() => handleFilterButtonClick('All')}
              className={`primary-button project-button ${
                filterType === 'All' ? 'active' : ''
              }`}
            >
              <span>{btnAll}</span>
            </button>
            <button
              onClick={() => handleFilterButtonClick('Featured')}
              className={`primary-button project-button ${
                filterType === 'Featured' ? 'active' : ''
              }`}
            >
              {/* > */}
              <span>{btnSelected}</span>
            </button>
            <button
              onClick={() => handleFilterButtonClick('Workshop')}
              className={`primary-button project-button ${
                filterType === 'Workshop' ? 'active' : ''
              }`}
            >
              <span>{btnWorkshop}</span>
            </button>
          </div>

          <div className='project-cards-box'>
            <FilteredProjects
              selectedProjects={selectedProjects}
              filterType={filterType}
            />
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Projects
