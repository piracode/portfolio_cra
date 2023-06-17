import { useState, useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  RiArrowUpSLine,
  RiArrowUpSFill,
  RiArrowDownSLine,
  RiArrowDownSFill,
} from 'react-icons/ri'

import { SlArrowUp, SlArrowDown } from 'react-icons/sl'
import { RxDoubleArrowDown, RxDoubleArrowUp } from 'react-icons/rx'
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md'

export const Accordion = ({ accordions }) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0)
  const [codeSnippets, setCodeSnippets] = useState({})

  const loadCodeSnippet = (snippetFilePath, index, key) => {
    // Fetch the code snippet file
    fetch(snippetFilePath)
      .then((response) => response.text())
      .then((snippet) => {
        // Update the state with the loaded code snippet
        setCodeSnippets((prev) => {
          // Create a new object by spreading the previous state
          //and adding the new code snippet with a unique key
          return { ...prev, [`${index}-${key}`]: snippet }
        })
      })
      .catch((error) => {
        console.error('Error loading code snippet:', error)
      })
  }

  // useEffect(() => {
  //   // Call the function to load the code snippet
  //   loadCodeSnippet('/codeSnippets/codeSnippet1.js')
  // }, [])

  useEffect(() => {
    accordions.forEach((accordion, index) => {
      Object.keys(accordion).forEach((key) => {
        // Check if the key starts with 'code'
        if (key.startsWith('code')) {
          // Call the loadCodeSnippet function with the code snippet file path,
          //accordion index, and key
          loadCodeSnippet(accordion[key], index, key)
        }
      })
    })
  }, [accordions])

  const toggleAccordion = (index) => {
    // If the current 'openAccordionIndex' is equal to the passed 'index',
    //set the state to -1 (no accordion open), otherwise set it to the new 'index'
    setOpenAccordionIndex(openAccordionIndex === index ? -1 : index)
  }

  return (
    <div>
      {/* Iterate through the 'accordions' array and create a new accordion item for each element */}
      {accordions.map((accordion, index) => (
        <section key={index}>
          <div
            className='accordion-tab'
            onClick={() => toggleAccordion(index)}
            aria-expanded={openAccordionIndex === index ? 'true' : 'false'}
            aria-controls={`accordion-content-${index}`}
          >
            <h2 className='accordion-title'>{accordion.title}</h2>
            {/* Render the arrow component based on the open/close state */}
            {openAccordionIndex === index ? (
              <MdKeyboardDoubleArrowRight className='accordion-icon' />
            ) : (
              <MdKeyboardDoubleArrowDown className='accordion-icon' />
            )}
          </div>
          {/* If 'openAccordionIndex' is equal to the current index, render the accordion content */}
          {openAccordionIndex === index && (
            <div>
              {Object.keys(accordion).map((key) => {
                if (key.startsWith('content')) {
                  return <p key={key}>{accordion[key]}</p>
                } else if (key.startsWith('subtitle')) {
                  return <h3 key={key}>{accordion[key]}</h3>
                } else if (key === 'image') {
                  return (
                    <img key={key} src={accordion[key]} alt='Accordion Image' />
                  )
                } else if (key.startsWith('code')) {
                  return (
                    <div className='container' key={key}>
                      <SyntaxHighlighter
                        language='javascript'
                        style={darcula}
                        className='code-snippet-container'
                      >
                        {codeSnippets[`${index}-${key}`]}
                      </SyntaxHighlighter>
                    </div>
                  )
                } else {
                  return null
                }
              })}
            </div>
          )}
        </section>
      ))}
    </div>
  )
}

export default Accordion
