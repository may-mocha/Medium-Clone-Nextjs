import Header from '../components/Header'
import Banner from '../components/Banner'
import PostCard from '../components/PostCard'

const styles = {
  wrapper:'mx-auto',
  main: 'flex justify-center',
  container:'max-w-7xl flex-1',
  postList: ''
}

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <Banner />
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.postList}>
              <PostCard />
              <PostCard />
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
