import React from 'react'
import Button from 'src/components/button'
import useAppSettings from 'src/stores/settings'
import CommonMetaTags from './components/common-meta-tags'
import styles from './shell.module.css'

type ShellProps = {
  children: React.ReactNode
}

function Shell({ children }: ShellProps) {
  const { isDarkMode, toggleDarkMode } = useAppSettings()

  React.useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <>
      <CommonMetaTags />
      <main className={styles.main}>
        <Button onClick={toggleDarkMode}>Toggle Theme</Button>
        {children}
      </main>
    </>
  )
}

export default Shell
