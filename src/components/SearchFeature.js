import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App'
import search from '../assets/magnifier.svg'
import { useTranslation } from 'react-i18next'

const SearchFeature = ({ className, getClassNames }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const { t } = useTranslation()

  const [showTooltip, setShowTooltip] = useState(false)

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip)
  }

  return (
    <>
      <div className={getClassNames('secondary-button')}>
        <img src={search} alt='Search Icon' className='search-icon' />
        <div className='input-container'>
          <input
            className={getClassNames('input')}
            type='text'
            placeholder={t('search')}
            onClick={toggleTooltip}
          />
        </div>
      </div>
      {showTooltip && <span className='tooltip'>{t('searchTooltip')}</span>}
    </>
  )
}

export default SearchFeature
