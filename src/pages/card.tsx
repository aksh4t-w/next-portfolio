import { useState } from 'react'
import Image from "next/image"
import { Project } from 'public/myData'


export default function Card({project}: {project: Project}) {
    // const [darkMode, setDarkMode] = useState(false)
  
    return (
        <div className='relative text-center shadow-lg p-6 pb-16 rounded-xl m-auto my-10 max-w-xs max-h-50 dark:bg-slate-800 hover:scale-110 transition-all'>
            <Image className='mx-auto' src={project?.img_path} alt="Project image" width={350} height={350} />
            <h3 className='text-lg font-medium pt-5 pb-2 dark:text-cyan-50'>{project?.title}</h3>
            <p className='dark:text-cyan-50'>{project?.description}</p>
            <a href={project?.url} target="_blank" rel="noreferrer">
                <button className='absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-600 text-white py-2 px-5 w-40 rounded-md'>Code/Demo</button>
            </a>
        </div>
    )
}