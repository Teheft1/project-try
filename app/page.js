import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <div className="z-10 max-w-sm w-full items-center justify-center font-mono text-sm lg:flex ">
        <h1 className="text-2xl">
          Welcome To My Webpage
        </h1>
      </div>

      <div className="flex max-">
        <div>
          <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mr-4 "
              src="/yun.jpg"
              alt="my photo"
              width={180}
              height={37}
              priority
            />
        </div>
        
        <div className="">
          <h1 className='font-sans text-lg'>
            Hi My Name is Yunus Dhanzky Handitra<br></br>
            I am student at State University of Surabaya
          </h1>
        </div>
      </div>

      
    </main>
  )
}
