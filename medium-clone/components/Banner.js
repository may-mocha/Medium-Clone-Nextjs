import Image from 'next/image'
import Logo from '../static/banner.png'

const styles={
  wrapper: 'h-max-[10rem] flex items-center justify-center py-[2rem] shadow-sm shadow-indigo-500/30',
  content: 'flex justify-between max-w-7xl flex-1 items-center',
  accentedButton: 'bg-black text-white rounded-full py-2 px-4'
}
const Banner = () =>{
  return(
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-5">
          <h1 className="text-[6rem] font-mediumSerif">
            Stay Curious
          </h1>
            <h3 className="text-2xl">Discover stories, thinking, and expertise from writers on any topic.</h3>
          <button className={styles.accentedButton}>Start Reading</button>
        </div>
        <Image 
          className="hidden md:inline-flex object-contain flex-1"
          src={Logo}
          width={500}/>
      </div>
    </div>
  )
}
export default Banner