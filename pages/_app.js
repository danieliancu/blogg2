import 'import/styles/globals.css'
import React, { useState, createContext } from 'react'

export const ThemeContext = createContext()

export default function App({ Component, pageProps }) {

  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={theme==='dark'?'dark':'light'}>
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  )
}
