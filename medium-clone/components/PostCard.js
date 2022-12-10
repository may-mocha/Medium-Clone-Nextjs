import Image from 'next/image'
import Logo from '../static/logo.png'
import { FiBookmark } from 'react-icons/fi'

const styles = {
  authorContainer: 'flex items-center gap-2',
  authorImage: 'w-4 h-4 rounded-full',
  authorName: 'font-bold',
  title: '',
  brief: 'flex justify-between items-center',
  briefInfo: '',
  category: ''
}

const PostCard = () => {
  return(
    <div className={styles.wrapper}>
      <div className={styles.postDetail}>
        <div className={styles.authorContainer}>
          <Image
            className={styles.authorImage}
            src={Logo}
          />
          <p className={styles.authorName}>John Cris</p>
        </div>
        <p className={styles.title}></p>
        <p className=''>This is briefing about the post.</p>
        <div className={styles.brief}>
          <span className={styles.briefInfo}>Jun 15 . 15min . <span className={styles.category}>Productivity</span></span>
          <FiBookmark width={40} height={40}/>
        </div>
      </div>
      <div className={styles.postImage}>
        <Image
          className=''
          src={Logo}
        />
      </div>
    </div>
  )
}

export default PostCard