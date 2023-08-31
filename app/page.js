import Image from 'next/image'

export default function Home() {
  return (
      <body>
        <header>
          <nav className="fixed justify-between border-b z-50 h-[50px] flex items-center w-full p-5 bg-slate-300 bg-gradient-to-b">
            <div className=''>
              LOGO
            </div>
            <>
              <ul className="list-none flex justify-center items-center gap-4">
                <li className='font-mono font-semibold'>
                  Home
                </li>
                <li className='font-mono font-semibold'>
                  Project
                </li>
                <li className='font-mono font-semibold'>
                  About
                </li>
              </ul>
                
            </>
          </nav>
        </header>
        <main>
          <div className="flex items-center justify-center pt-[35%] w-full h-full md:pt-[30%] lg:pt-[22.5%] xl:pt-[15%] ">
              <h1 className="font-sans font-bold text-4xl mr-[15px] grid-cols-1">
                Front-end Developer
                <h2 className="font-sans text-lg font-normal mt-[15px]">
                  Hi, My Name is Yunus Dhanzky Handitra i am a front-end web developer<br/>
                  i can code a website from scratch and make a responsive web design.
                </h2>
              </h1>
            <Image
                  src="/yun.jpg"
                  alt="My photo"
                  width={180}
                  height={70}
                  className='h-auto max-w-full rounded-full m-[70px]'
            />
          </div>
          <div className="flex flex-col items-center justify-center m-12">
            <>
              <h2 className='font-sans text-2xl font-bold mb-6'>
                Tech Stack
              </h2>
            </>
            <div className='grid grid-flow-col gap-4'>
              <Image
                src="/html.svg"
                alt='Html icon'
                width={70}
                height={35}
              />
              <Image
                src="/css.svg"
                alt='css icon'
                width={70}
                height={35}
              />
              <Image
                src="/js.svg"
                alt='Javascript icon'
                width={70}
                height={35}
              />
              <Image
                src="/react.svg"
                alt='React icon'
                width={70}
                height={35}
              />
              <Image
                src="/tailwind.svg"
                alt='tailwind css icon'
                width={70}
                height={35}
              />
            </div>
            
          </div>
        </main>
      </body>

  )
}
