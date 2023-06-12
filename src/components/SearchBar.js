import React, { useState, useEffect, useRef } from 'react'

const SearchBar = ({ onSearchTermChange }) => {
  const [value, setValue] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const inputRef = useRef()
  const [allSkills, setAllSkills] = useState([])

  const handleSearch = (query) => {
    fetch(`/json/projects.json`)
      .then((response) => response.json())
      .then((data) => {
        const uniqueSkills = getAllSkills(data)
        setAllSkills(uniqueSkills)
        console.log(getMatchingProjects(data, query))
      })
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(value)
    }
  }

  function getAllSkills(data) {
    const projects = data.projects.selected
    let skillsSet = new Set()

    for (const lang in projects) {
      projects[lang].projects.forEach((project) =>
        project.skills.forEach((skill) => {
          skillsSet.add(skill)
        })
      )
    }

    return Array.from(skillsSet)
  }

  function getMatchingProjects(data, query) {
    const projects = data.projects.selected
    let matchingProjects = []

    for (const lang in projects) {
      const langProjects = projects[lang].projects
      const filteredProjects = langProjects.filter((project) =>
        project.skills.includes(query)
      )
      matchingProjects = matchingProjects.concat(filteredProjects)
    }

    return matchingProjects
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [inputRef])

  return (
    <div ref={inputRef}>
      <input
        type='search'
        list='skills'
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          setShowSuggestions(true)
        }}
        onKeyDown={handleKeyPress}
        placeholder='Search by skill'
      />
      <datalist id='skills'>
        {allSkills.map((skill, index) => (
          <option key={index} value={skill} />
        ))}
      </datalist>
    </div>
  )
}

export default SearchBar
