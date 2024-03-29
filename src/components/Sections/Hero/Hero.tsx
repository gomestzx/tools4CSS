import React from 'react'
import styles from './styles.module.scss'




const Hero = () => {
    return (
        <div className='w-full lg:w-4/6 mx-auto flex justify-center items-center flex-wrap' id='hero'>
            <div className='w-full flex flex-col justify-center items-center leading-10 font-GilroyBold'>
                <h1 className={`text-6xl xl:text-9xl lg:text-8xl flex mt-0 lg:mt-6 gap-5 font-GilroyBold`}>Lets build</h1>
                <h1 className={` text-6xl xl:text-9xl lg:text-8xl ${styles.textGradient}`}>awesome</h1>
                <h1 className=' text-6xl xl:text-9xl lg:text-8xl'>interfaces</h1>
                <h3 className=' text-slate-900 text-center text-xl md:text-2xl mt-4 font-GilroyMedium lg:pr-4 '>Take advantage of our tools to speed <br /> up the styling of your components</h3>
            </div>
        </div>
    )
}

export default Hero