import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import SmallLogo from '../static/smallLogo.png'
import Qazi from '../static/qazi.jpg'

const styles = {
  wrapper: 'w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem] border-r-[1px]',
  logoWrap: 'cursor-pointer',
  iconWrap: 'flex flex-col gap-[1.4rem] text-xl text-[#787878]',
  divider: 'border-b',
  profileWrap: 'rounded-full w-[35px] h-[35px] overflow-hidden'
}

const ReaderNav = () => {
  return(
    <div className={styles.wrapper}>
      <Link href='/'>
        <div clssName={styles.logoWrap}>
          <Image src={SmallLogo}/>
        </div>
      </Link>
      <div className={styles.iconWrap}>
        <HiOutlineHome/>
        <FiBell/>
        <BiBookmarks/>
        <RiArticleLine/>
        <div className={styles.divider}></div>
        <BsPencilSquare/>
      </div>
      <div className={styles.profileWrap}>
        <Image src={Qazi}/>
      </div>
    </div>
  )
}

export default ReaderNav