import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md'

export const Accordion = ({ accordions }) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0)
  const [activeTabs, setActiveTabs] = useState({})

  const { t } = useTranslation()

  const handleTabClick = (accordionIndex, tabIndex) => {
    setActiveTabs((prev) => ({ ...prev, [accordionIndex]: tabIndex }))
  }

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? -1 : index)
  }

  const renderElement = (key, value) => {
    switch (key) {
      case 'content':
      case 'content1':
      case 'content2':
        return <p>{t(value)}</p>
      case 'image':
        return <img src={value} alt='Accordion Image' />
      case 'CTALink1':
      case 'CTALink2':
        return (
          <a href={value} target='_blank' rel='noopener noreferrer'>
            {t(value)}
          </a>
        )
      default:
        return null
    }
  }

  const renderSection = (section) => {
    return (
      <div key={section.tabTitle}>
        <h3>{t(section.tabTitle)}</h3>
        {Object.entries(section).map(([key, value]) =>
          renderElement(key, value)
        )}
      </div>
    )
  }

  const renderTabContent = (tab, index, tabIndex) => {
    if (activeTabs[index] === tabIndex) {
      return (
        <div key={tabIndex} className='tab-content'>
          {tab.tabSections
            ? tab.tabSections.map((section) => renderSection(section))
            : Object.entries(tab).map(([key, value]) =>
                renderElement(key, value)
              )}
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div>
      {accordions.map((accordion, index) => (
        <section key={index}>
          <div
            className='accordion-tab'
            onClick={() => toggleAccordion(index)}
            aria-expanded={openAccordionIndex === index ? 'true' : 'false'}
            aria-controls={`accordion-content-${index}`}
          >
            <h2 onClick={() => setOpenAccordionIndex(index)}>
              {t(accordion.title)}
            </h2>
            {openAccordionIndex === index ? (
              <MdKeyboardDoubleArrowRight className='accordion-icon' />
            ) : (
              <MdKeyboardDoubleArrowDown className='accordion-icon' />
            )}
          </div>
          {openAccordionIndex === index && (
            <div>
              {accordion.content && <p>{t(accordion.content)}</p>}
              {accordion.intro && <p>{t(accordion.intro)}</p>}
              <div className='tabs'>
                {accordion.tabs?.map((tab, tabIndex) => (
                  <button
                    key={tabIndex}
                    onClick={() => handleTabClick(index, tabIndex)}
                    className={`tab ${
                      activeTabs[index] === tabIndex ? 'active' : ''
                    }`}
                  >
                    {t(tab.subtitle)}
                  </button>
                ))}
              </div>
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
