import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App'
// import search from '../assets/magnifier.svg'
import { ReactComponent as SearchIcon } from '../assets/magnifier.svg'
import { useTranslation } from 'react-i18next'

const SearchFeature = ({ className, getClassNames, isMobile }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const { t } = useTranslation()

  const [showTooltip, setShowTooltip] = useState(false)

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip)
  }

  const getPlaceholder = () => {
    if (isMobile) {
      return t('search')
    }
    return ''
  }

  return (
    <>
      <div className={getClassNames('secondary-button')}>
        {/* <img src={search} alt='Search Icon' className='search-icon' /> */}
        <SearchIcon
          className={`search-icon ${isDarkMode ? 'dark-icon' : 'light-icon'}`}
        />
        <div className='input-container'>
          <input
            className={getClassNames('input')}
            type='text'
            // placeholder={t('search')}
            placeholder={getPlaceholder()}
            onClick={toggleTooltip}
          />
        </div>
      </div>
      {showTooltip && <span className='tooltip'>{t('searchTooltip')}</span>}
    </>
  )
}

export default SearchFeature
