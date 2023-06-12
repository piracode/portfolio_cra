import { useTranslation } from 'react-i18next'
import { ImSearch } from 'react-icons/im'
import SearchBar from './SearchBar'
import { useState } from 'react'

const SearchFeature = () => {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')
  const projects = []
  return (
    <>
      <span className='navigation-link-icon'>
        <ImSearch />
      </span>
      <span className='navigation-link-text'>{t('search')}</span>
      <SearchBar projects={projects} onSearchTermChange={setSearchTerm} />
    </>
  )
}

export default SearchFeature
