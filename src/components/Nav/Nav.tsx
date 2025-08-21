import { NavLink } from 'react-router-dom'
import nav from '../../assets/nav.png' 
import home from '../../assets/home-button.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/social.png'
import redit from '../../assets/reddit.png'

const Nav = () => {


   const showMenu = ():void=>{
     const id=document.querySelector('#nav') 
     id?.classList.toggle('show')
   }
  return (
    <div className=''>
        <div className='fixed flex justify-between color shadow-lg w-[100%] mt-1 p-4 md:hidden'>
      
          <img src={home} alt={'nav...'} width={35} className='h-8 ' onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} /> 
          <img src={nav} alt={'nav...'}  width={37} className='h-9 ' onClick={showMenu} /> 

         </div>
       
        <hr className='bg-gray-900 h-[1.2px] w-full'/>
        
        <section className= 'mt-18 p-4 hidden cursor-pointer bg-white-100  rounded-lg' id='nav'>
            <NavLink to='https://github.com/wheel-s' target='blank' className=' flex hover '>
              <img src={github} alt={'nav...'} width={32} className='h-7 mr-2' /> 
              <p className='mt-2 text-gray-700 text-[1.1rem] mb-7'>Github</p>
            </NavLink>
            <NavLink to='https://reddit.com/u/toshiro_01' target='blank' className=' flex hover'>
              <img src={redit} alt={'nav...'} width={32} className='h-8 mr-2' />   
              <p className='mt-2 text-gray-700 text-[1.1rem] mb-7'>Reddit</p>
            </NavLink>
            <NavLink to='https://linkedin.com/in/ezra-george-0b5b062b3' target='blank' className=' flex hover'>
              <img src={linkedin} alt={'nav...'} width={32} className='h-[2rem] mr-2' />   
              <p className='mt-1 text-gray-700 text-[1.1rem] mb-7'>LinkedIn</p>
            </NavLink>
           
             <a href='mailto:toshiro2002@gmial.com'><button className='bg-gray-800 text-gray-50 cursor-pointer rounded-md font-semibold p-[14px] hover:bg-gray-800 w-full '>Send Message</button></a>
        </section>




        <div className=' hidden md:flex justify-center mt-5 '>
           <div className=' fixed bg-[#ffffffe6] flex justify-around m-5 border-1 border-gray-400 p-[8px] w-[36rem] rounded-xl '>
             <img src={home} alt={'nav...'} width={35} className='h-8 mr-2 mt-2 '  onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}/>
            <NavLink to='https://github.com/wheel-s' target='blank'><hr className='w-2'/> <img src={github} alt={'nav...'} width={34} className='h-8 mr-2 mt-2' /> </NavLink>
             <NavLink to='https://linkedin.com/in/ezra-george-0b5b062b3' target='blank'><img src={linkedin} alt={'nav...'} width={40} className='h-9 mr-2 mt-2' /></NavLink>
             <NavLink to='https://reddit.com/u/toshiro_01' target='blank'><img src={redit} alt={'nav...'} width={35} className='mt-[p] h-11 mr-3'  /></NavLink>
              <a href='mailto:toshiro2002@gmial.com'><button className='bg-gray-800 cursor-pointer rounded-lg px-3 py-[13px] w-40  text-[1.1rem] font-bold ring-1 ring-gray-900 text-gray-50'>Send  message</button></a>
           </div> 
        </div>
    </div>
  )
}

export default Nav
