import Image from 'next/image'

export default function Home() {
  return (
      <body>
        <header>
          <nav className="fixed justify-between border-b z-10 h-[50px] flex items-center w-full p-5 ">
            <div className=''>
              LOGO
            </div>
            <div>
              Another Introduce
            </div>
          </nav>
        </header>
        <main>
          <div className="flex items-center justify-center pt-[35%] w-full h-full md:pt-[30%] lg:pt-[22.5%] xl:pt-[15%]">
            <h1 className="font-sans font-bold text-4xl">
              Front-end Developer
            </h1>
          </div>
        </main>
      </body>

  )
}
