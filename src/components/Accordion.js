import { useState } from 'react'
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
} from 'react-icons/md'

export const Accordion = ({ accordions }) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0)

  const toggleAccordion = (index) => {
    // If the current 'openAccordionIndex' is equal to the passed 'index', set the state to -1 (no accordion open), otherwise set it to the new 'index'
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
              // <RiArrowDownSLine/>
              //   <RiArrowDownSFill />
              //   <SlArrowDown />
              //   <RxDoubleArrowUp />
              <MdKeyboardDoubleArrowUp className='accordion-icon' />
            ) : (
              //   <RiArrowUpSLine />
              //   <RiArrowUpSFill />
              //   <SlArrowUp />
              //   <RxDoubleArrowDown />
              <MdKeyboardDoubleArrowDown className='accordion-icon' />
            )}
          </div>
          {/* If 'openAccordionIndex' is equal to the current index, render the accordion content */}
          {openAccordionIndex === index && (
            <div>
              <p>{accordion.content}</p>
            </div>
          )}
        </section>
      ))}
    </div>
  )
}

export default Accordion
