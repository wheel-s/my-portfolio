import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import hitsugaya from '../../assets/toshiro.jpg'
import link from '../../assets/link.png'



const Content = () => {


  useEffect(()=>{
    const fadeElement = document.querySelectorAll('.fadein')
    const observer = new IntersectionObserver(entries =>{
      entries.forEach(entry =>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },{
      threshold:0.2
    })
    fadeElement.forEach(element =>{
      observer.observe(element)
    })
    return()=>observer.disconnect()
  },[])

  return (
    <div className=' grid justify-center max-md:mt-22 md:mt-30'>

        <div className=' justify-center m-8 p-2  md:w-[43rem] md:ml-[5rem] ' >
            <img src={hitsugaya} alt={'toshiro'}width={120} className='rounded-full  fadein'/>
            <p className='font-bold text-gray-700 text-[1.6rem] mt-6 '>Hi, I'm George.</p>
            <p className='font-bold text-gray-700 text-[1.6rem] '>FullStack Engineer.</p>
            <p className=' mt-5 text-[1.2rem] md:w-[30rem] font'>
              Turning ideas into something useful, one project at a time. 
            </p>
            <button className='bg-gray-700 text-gray-50 mt-5 rounded-lg p-[11px] hover:bg-gray-700 w-[18rem] font-bold text-[1.1rem] cursor-pointer  fadein'> Hire Me</button>            
             
             <div >
              <h1 className='font-bold text-gray-700 text-[1.6rem] mt-20'>About</h1>
              <div>
                <p className='mt-4 text-[1.17rem] fadein font'>I'm George, a FullStack Developer, with a strong background in designing and developing.</p>
                <h2 className='font-bold text-gray-500 text-[1.13rem] mt-4 mb-3 fadein'>What I do:</h2>
                <p className=' text-[1.14rem] font fadein'>
                 <span className='font-semibold font-[system-ui] text-[1rem] text-gray-600 '>Front-end development:</span> Build responsive, modern user interfaces,
                    with React and TypeScript.  
                </p>

                <p className=' text-[1.14rem] font mt-3 fadein'>
                 <span className='font-semibold font-[system-ui] text-[1rem] text-gray-600'>Back-end development:</span> Design and  implement REST Apis and data driven applications using
                  python(Django, Flask and Fast-Api), Node.js, Express.js, Java(SpringBoot).
                </p>
                <p className=' text-[1.14rem] font mt-3 fadein'>
                  <span className='text-[1.05rem] font-[system-ui] text-[1rem] font-semibold text-gray-600'>Databae Management:</span> Create and maintain data schemas with SQL(PostgreSQL) and NoSQL(MongoDb) databases.
                </p>
              </div>
              <p className='text-[1.14rem] font mt-3 fadein'>
               <span className='font-semibold font-[system-ui] text-[1rem] text-gray-600'>Devops & Deployment:</span> Manage application deployment, server configuration, and cloud services(Git, Docker, AWS, Hostinger). 
              </p>
             </div> 

             <div>
               <h1 className='font-bold text-gray-700 text-[1.5rem] mt-18 mb-4'>My Selected projects</h1>
               <section className='fadein'>
                <p className='font text-[1.13rem]'>
                  <span className='font-semibold font-[system-ui] text-[1rem] text-yellow-900'>E-Commerce: </span>A responsive e-commerce platform with user authentication
                  and role-based access.
                  </p>
                   <span className='font-semibold text-gray-600 '> ( Java, springboot, SQL).</span> 
                  <NavLink to='https://github.com/wheel-s/shopify' target='blank'><p className='font-semibold text-center bg-[#d9d98ccc] text-yellow-800 ring-[.3px] rounded-sm p-1 mt-2 w-30 flex'> <img src={link} alt={link} width={20}/> view github</p></NavLink>
                
               </section>

                <section className='mt-5 fadein'>
                <p className='font text-[1.3rem]'>
                  <span className='font-semibold font-[system-ui] text-[1rem] text-pink-900'>Task-manager: </span>
                   An AI-Powered task-manager that helps users achieve some-what long term goals.
                  </p>
                   <span className='font-semibold text-gray-600 '> ( React, TypeScript, TailwindCSS, Node.js, SQL).</span> 
                  <NavLink to='https://github.com/wheel-s/task-manager' target='blank'><p className='font-semibold text-center bg-pink-200 text-pink-900 ring-[.3px] rounded-sm p-1 mt-2 w-30 flex'><img src={link} alt={link} width={20}/> view github</p></NavLink>
                
               </section>

               
                <section className='mt-5 mb-10 fadein'>
                <p className='font text-[1.13rem]'>
                  <span className='font-semibold font-[system-ui] text-[1rem] text-gray-800'>Auto-Spec(car-arena): </span>
                    A data driven application which uses python to get useful information about cars like fuel-consumption,
                    brand, model, analytics from the web
                    and display them using React and TypeScript in a more friendly interface.
                  </p>
                   <span className='font-semibold text-gray-600 '> ( python, Fast-Api, TailwindCSS, TypeScript, React , SQL).</span> 
                  <NavLink to='https://github.com/wheel-s/task-manager' target='blank'><p className='font-semibold text-center bg-blue-200 text-blue-900 ring-[.5px] rounded-sm p-1 mt-2 w-30 flex'> <img src={link} alt={link} width={20}/> view github</p></NavLink>
                
               </section>
              
             </div>
             <div className=''>
                 <h1 className='font-bold text-center text-gray-800 text-[1.6rem] mt-20 fadein'>Get In Touch</h1>

                 <p className='text-gray-600 font mt-5 text-[1.22rem] '>
                  I am seeking  oppurtunities where I can apply my  skill set
                  to tackle challenging project. I am available to work on projects that solve real world problems.
                 </p>
                   <a href='mailto:toshiro2002@gmial.com' className='grid justify-center mt-8 '><button className=' bg-gray-700 text-gray-50  font-semiboldmt-5 rounded-lg p-[11px] hover:bg-gray-700 w-[18rem]  text-[1.1rem] cursor-pointer'>Send  Message</button></a>
            </div>     
           
        </div>

    </div>
  )
}

export default Content
