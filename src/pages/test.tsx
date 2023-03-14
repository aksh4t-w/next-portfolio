 const Test = () =>{
  
  return (
    <div className="h-full bg-gray-300 flex justify-center items-center p-16">
      <div className="relative w-full h-[50vh]">
        <div className="absolute top-0 h-40 w-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-sm opacity-90 animate-blob"></div>
        <div className="absolute left-20 h-40 w-40 bg-blue-400 rounded-full mix-blend-multiply blur-sm animate-blob transition animation-delay-2"></div>
        <div className="absolute top-20 left-10 h-40 w-40 bg-yellow-400 rounded-full mix-blend-multiply hover:animate-fade-in-down"></div> 
      </div>
    </div>
  )
}

export default Test