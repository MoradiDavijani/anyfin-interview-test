import CommonMetaTags from './components/common-meta-tags'
import styles from './shell.module.css'

type ShellProps = {
  children: React.ReactNode
}

function Shell({ children }: ShellProps) {
  return (
    <>
      <CommonMetaTags />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Shell
