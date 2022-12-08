import Image from "next/image"
import Logo from '../static/logo.png'

const styles = {
  wrapper:'flex justify-center gap-10 p-5 bg-[#FCC017]',
  content:'flex justify-between items-center flex-1 gap-10 max-w-7xl',
  logoContainer: 'flex items-center flex-start',
  bannerNav: 'flex space-x-5 cursor-pointer items-center',
  accentedButton: 'bg-black text-white rounded-full py-2 px-4'
}
const Header = () => {
  return(
    <div className={styles.wrapper}>
      <div className={styles.content}>
         <div className={styles.logoContainer}>
           <Image
             className={styles.logo}
             src={Logo}
             width={200}
             height={40}
            />
         </div>
        <div className={styles.bannerNav}>
          <div>Our story</div>
          <div>Membership</div>
          <div>Sign in</div>
          <div className={styles.accentedButton}>Get started</div>
        </div>
      </div>
    </div>
  )
}

export default Header