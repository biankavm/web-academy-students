import { useContext } from 'react'
import { ThemeContext } from '../pagev0'

export default function List() {
  const theme = useContext(ThemeContext)
  const textColor = theme === 'light' ? 'black' : 'white'
  const backgroundColor = theme === 'light' ? 'white' : 'black'

  return (
    <div
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
        border: '5px orange solid',
        padding: '10px',
        marginTop: '20px'
      }}
    >
      <h1>Lista</h1>

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  )
}
