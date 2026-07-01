'use client'
import { createContext, useState } from 'react'
import List from './components/ListV0'

export const ThemeContext = createContext()

const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={theme}>
      <h1>Home</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
      </button>

      <List />
    </ThemeContext.Provider>
  )
}

export default App
