import Image from 'next/image'
import Logo from '../static/logo.png'
import { FiBookmark } from 'react-icons/fi'
import Link from 'next/link'

const styles = {
  wrapper: 'flex gap-3 items-center py-3',
  postDetail: '',
  authorContainer: 'flex items-center gap-2',
  authorImage: 'w-4 h-4 rounded-full',
  authorName: 'font-bold text-sm',
  title: 'font-bold text-lg',
  desc: 'text-md text-gray-600 text-sm',
  brief: 'flex justify-between items-center',
  briefInfo: 'text-[#787878] text-xs',
  category: 'bg-gray-100 rounded-full px-2',
  postImage: ''
}

const PostCard = () => {
  return(
    <Link href='/post/123'>
      <div className={styles.wrapper}>
      <div className={styles.postDetail}>
        <div className={styles.authorContainer}>
          <Image
            className={styles.authorImage}
            src={Logo}
          />
          <p className={styles.authorName}>John Cris</p>
        </div>
        <p className={styles.title}>7 free tools that will make you productive in 2022</p>
        <p className={styles.desc}>Productivity is a skill that can be learned.</p>
        <div className={styles.brief}>
          <span className={styles.briefInfo}>Jun 15 . 15min . <span className={styles.category}>Productivity</span></span>
          <FiBookmark width={40} height={40}/>
        </div>
      </div>
      <div className={styles.postImage}>
        <Image
          className='w-[150px]'
          src={Logo}
        />
      </div>
    </div>
    </Link>
  ) 
}

export default PostCard