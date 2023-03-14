import Image from "next/image"

const About = () => {
  return (
    <div className="lg:w-[65vw] lg:h-[30vh] m-auto grid content-center sm:grid-cols-2 gap-10 text-gray-900 dark:text-gray-300">
      {/* <div className="ml-20">
        <Image src={"/images/profilePic.jpg"} alt="profile pic" width={200} height={200}/>
      </div> */}
      <div className="text-4xl font-bold">
        <p>Hi, I am Akshat, nice to meet you! Please take a look around.</p>
      </div>

      <button className='sm:hidden bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-4 py-2 rounded-md'>
        <a href={"/Resume_2.pdf"} target="_blank" rel="noreferrer">Resume</a>
      </button>

      <div className="">
        <p>
          I am a Software Developer located in Chicago. I am
          currently pursuing my Master&apos;s in Computer Science at The University
          of Illinois, Chicago. With a passion to develop excellent softwares and web apps and
          to grow my skill set, I&apos;m looking for full time jobs as a
          Full-Stack/Software developer.
        </p>

        <br />
        <div >
          <h2 className="font-bold text-lg">Contact Details: </h2>
          <span className="font-bold">Akshat Wagadre </span>
          <br />
          <span>Email: akshat.w97@gmail.com</span>
          <br />
          <span>Mobile: +1 312-900-6615 (US)</span>
        </div>
      </div>

    </div>
  )
}

export default About
