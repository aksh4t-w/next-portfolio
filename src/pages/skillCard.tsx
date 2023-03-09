import Image from "next/image"
import { Skill } from 'public/myData'

export default function SkillCard({skill}: {skill: Skill}) {

  return (
      <div className='relative text-center shadow-lg p-3 pb-3 rounded-xl m-auto my-10 max-w-xs max-h-50 dark:bg-slate-900 hover:scale-110 transition-all'>
          <Image className='mx-auto' src={skill?.img_path} alt="skill" width={100} height={100} />
          <h3 className='text-lg font-medium pt-5 pb-2 dark:text-cyan-50'>{skill?.name}</h3>
      </div>
  )
}