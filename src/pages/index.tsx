import SearchCard from 'src/components/search-card'
import styles from './index.module.css'

function HomePage() {
  return (
    <main className={styles.home}>
      <h1 className={styles.home__title}>Countries Search</h1>
      <SearchCard />
    </main>
  )
}

export default HomePage
