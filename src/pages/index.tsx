import SearchCard from 'src/components/search-card'
import styles from './index.module.css'

export default function Home() {
  return (
    <main className={styles.home}>
      <h1 className={styles.home__title}>Countries Search</h1>
      <SearchCard onSelect={console.log} />
    </main>
  )
}
