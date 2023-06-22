import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md'

export const Accordion = ({ accordions, projectID }) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0)
  const [activeTabs, setActiveTabs] = useState({})

  const { t } = useTranslation()

  // Handle tab click event
  const handleTabClick = (accordionIndex, tabIndex) => {
    setActiveTabs((prev) => ({ ...prev, [accordionIndex]: tabIndex }))
  }

  // Toggle accordion open/close state
  const toggleAccordion = (index) => {
    if (openAccordionIndex === index) {
      // Close the accordion if it's already open
      setOpenAccordionIndex(-1)
    } else {
      // Open the accordion and set the initial active tab to the first tab
      setActiveTabs((prev) => ({ ...prev, [index]: 0 }))
      setOpenAccordionIndex(index)
    }
  }

  // Render different elements based on the key
  const renderElement = (key, value, alt) => {
    switch (key) {
      case 'content':
      case 'content1':
      case 'content2':
        // Render paragraph inside the tabs in the accordions
        return (
          <p key={key} className={`accordion-paragraph ${key}`}>
            {t(value)}
          </p>
        )
      case 'heading':
      case 'heading1':
      case 'heading2':
      case 'heading3':
        return (
          <h5 key={key} className={`extra-heading ${key}`}>
            {t(value)}
          </h5>
        )
      case 'image':
      case 'image1':
        return <img key={key} src={value.src} alt={value.alt || alt} />
      case 'CTALink1':
        return (
          <div key={key} className='img-box'>
            <a
              className='img-link'
              href={value.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {t(value.text)}
            </a>
          </div>
        )
      case 'CTALink2':
        return (
          <div key={key} className='img-box'>
            <a
              className='img-link'
              href={value.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {t(value.text)}
            </a>
          </div>
        )
      case 'CTALink3':
        return (
          <div key={key} className='img-box'>
            <a
              className='img-link'
              href={value.href}
              target='_blank'
              rel='noopener noreferrer'
            >
              {t(value.text)}
            </a>
          </div>
        )
      default:
        if (
          key.startsWith('content') &&
          value.title === 'Project Requirements'
        ) {
          return (
            <p key={key} className={`accordion-paragraph ${key}`}>
              {t(value)}
            </p>
          )
        }
        return null
    }
  }

  // Render individual sections within a tab
  const renderSection = (section) => {
    return (
      <div key={section.tabTitle}>
        <h3 className={`accordion-tabTitle`}>{t(section.tabTitle)}</h3>
        {Object.entries(section).map(([key, value]) =>
          renderElement(key, value)
        )}
      </div>
    )
  }

  // Render the content of a tab based on its open/close state
  const renderTabContent = (tab, index, tabIndex) => {
    if (activeTabs[index] === tabIndex) {
      return (
        <div key={tabIndex} className='tab-content'>
          {tab.tabSections
            ? tab.tabSections.map((section, sectionIndex) =>
                renderSection(section, sectionIndex)
              )
            : Object.entries(tab).map(([key, value]) =>
                renderElement(key, value, tab.alt)
              )}
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div className={`accordion-container project-id-${projectID}`}>
      {accordions.map((accordion, index) => (
        <section key={index}>
          <div
            className='accordion-tab'
            onClick={() => toggleAccordion(index)}
            aria-expanded={openAccordionIndex === index ? 'true' : 'false'}
            aria-controls={`accordion-content-${index}`}
          >
            <h2
              className={`accordion-title`}
              onClick={() => setOpenAccordionIndex(index)}
            >
              {t(accordion.title)}
            </h2>
            {/* Render the arrow component based on the open/close state */}
            {openAccordionIndex === index ? (
              <MdKeyboardDoubleArrowRight className='accordion-icon' />
            ) : (
              <MdKeyboardDoubleArrowDown className='accordion-icon' />
            )}
          </div>

          {/* Render the accordion content if it is open */}
          {openAccordionIndex === index && (
            <div>
              {/* Render the intro content if it exists */}
              {accordion.intro && (
                <p className={`accordion-intro`}>{t(accordion.intro)}</p>
              )}
              {/* Render the content keys */}
              {Object.keys(accordion).map((key) => {
                if (key.startsWith('content')) {
                  return (
                    <p className={`accordion-paragraph ${key}`} key={key}>
                      {t(accordion[key])}
                    </p>
                  )
                }
                return null
              })}
              {/* Render tabs */}

              {accordion.tabs && accordion.tabs.length > 0 && (
                <div className='sub-category-container'>
                  {accordion.tabs.map((tab, tabIndex) => (
                    <button
                      key={tabIndex}
                      onClick={() => handleTabClick(index, tabIndex)}
                      className={`sub-category-button ${
                        activeTabs[index] === tabIndex ? 'active' : ''
                      }`}
                    >
                      {t(tab.subtitle)}
                    </button>
                  ))}
                </div>
              )}
              {/* Render tab content */}
              {accordion.tabs?.map((tab, tabIndex) =>
                renderTabContent(tab, index, tabIndex)
              )}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}

export default Accordion
