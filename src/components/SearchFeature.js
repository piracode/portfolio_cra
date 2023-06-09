import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App'
import { ReactComponent as SearchIcon } from '../assets/magnifier.svg'
import { useTranslation } from 'react-i18next'
import { BsFillSearchHeartFill } from 'react-icons/bs'
import { ImSearch } from 'react-icons/im'

const SearchFeature = ({ className, isMobile }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <>
      {/* <BsFillSearchHeartFill /> */}
      <span className='navigation-link-icon'>
        <ImSearch />
      </span>
      <span className='navigation-link-text'>{t('search')}</span>
    </>
  )
}

export default SearchFeature
