import { useContext } from 'react'
import { ThemeContext } from '../App'

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)
  return (
    <button style={{}} onClick={toggleTheme}>
      Toggle Theme
    </button>
  )
}

export default Navigation
