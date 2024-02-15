import Image from 'next/image'
import Header from './components/Header'
import homePage from '../../public/images/image-1.png'
import spinelle1 from '../../public/images/spinelle-1.jpg'
import spinelle2 from '../../public/images/spinelle-2.jpg'
import spinelle3 from '../../public/images/spinelle-3.jpg'
import spinelle4 from '../../public/images/spinelle-4.jpg'
import spinelle5 from '../../public/images/spinelle-5.jpg'
import spinelle6 from '../../public/images/spinelle-6.jpg'
import Category1 from '../../public/images/category-1.png'
import Category2 from '../../public/images/category-2.png'
import Category3 from '../../public/images/category-3.png'
import Category4 from '../../public/images/category-4.png'
import Collection1 from '../../public/images/collection-1.jpg'
import Collection3 from '../../public/images/collection-3.jpg'
import Couples from '../../public/images/couple.jpg'
import Bangles from '../../public/images/bangles.png'


export default function Home() {
  return (
    <main className="">
      <div className='relative align-middle'>
        <Image
          src={homePage}
          className='w-full h-fit'
        />


        <div className='absolute bottom-[100px] left-1/4 text-wrap'>
          <h1 className='text-3xl'>Good Things Come <br /> In Small Packages</h1>

        </div>
      </div>

      <div className="bg-footer w-full, flex justify-between items-center h-full bg-green-900 py-30 px-20 border text-white" style={{ padding: '40px 80px 40px 80px' }}>

        <Image
          src={Bangles}
          className='w-[40%]'
          />
        <Image
          src={Couples}
          className='w-[40%]'
        />
      </div>

      <h1 className='hr text-3xl my-10'>Shop by collections</h1>
      <div className='flex justify-between items-center my-10 mx-20 flex-wrap gap-1'>
        <div className='w-[24%] border'>

          <Image
            src={Collection1}
            className='h-1/4 w-full object-cover'
          />

        </div>
        <div className='w-[24%] border'>
          <Image
            src={Collection3}
            className=' w-full'
          />

        </div>
        <div className='w-[24%]  border'>
          <Image
            src={Collection3}
            className=' w-full'
          />
        </div>
      </div>

      <h1 className='hr text-3xl'>Shop by Category</h1>
      <div className='flex justify-between items-center my-10 mx-20 gap-1'>
        <div className='w-[24%] min-h-56 border'>
          <Image
            src={Category1}
          />
          <div className='flex flex-row justify-center'>
            <p className='text-center mr-4'> ₹ 1930</p>
            <p className='text-center line-through'> ₹ 1930</p>
          </div>
          <p className='text-center'>Round solitaure Ring</p>
        </div>
        <div className='w-[24%] min-h-96 border'>
          <Image
            src={Category2}

          />
          <div className='flex flex-row justify-center'>
            <p className='text-center mr-4'>₹ 1930</p>
            <p className='text-center line-through'>₹ 1930</p>
          </div>
          <p className='text-center'>Round solitaure Ring</p>

        </div>
        <div className='w-[24%] min-h-96 border'>
          <Image
            src={Category3}
          />
          <div className='flex flex-row justify-center'>
            <p className='text-center mr-4'>₹ 1930</p>
            <p className='text-center line-through'>₹ 1930</p>
          </div>
          <p className='text-center'>Round solitaure Ring</p>
        </div>
        <div className='w-[24%] min-h-96 border'>
          <Image
            src={Category4}
          />
          <div className='flex flex-row justify-center'>
            <p className='text-center mr-4'>₹ 1930</p>
            <p className='text-center line-through'>₹ 1930</p>
          </div>
          <p className='text-center'>Round solitaure Ring</p>
        </div>
      </div>

      <h1 className='hr text-3xl'>Shop by Gender</h1>
      <div className='flex justify-between my-10 mx-20 flex-wrap gap-1'>
        <div className='w-[24%] h-1/4 border'>
          <p className='text-center'>Men</p>
        </div>
        <div className='w-[24%] h-1/4 border'>
          <p className='text-center'>Kids</p>

        </div>
        <div className='w-[24%] h-1/4 border'>
          <p className='text-center'>Women</p>
        </div>
      </div>

      <h1 className='hr text-3xl'>Shop by Spinelle</h1>

      <div className='flex justify-between my-10 mx-20 flex-wrap gap-1'>
        <Image
          src={spinelle1}
          className='w-[24%] h-1/4'

        />
        <Image
          src={spinelle2}
          className='w-[24%] h-1/4'

        />
        <Image
          src={spinelle3}
          className='w-[24%]  h-1/4'

        />
        <Image
          src={spinelle4}
          className='w-[24%]  h-1/4'

        />

      </div>
      <div className='flex justify-between my-10 mx-20 flex-wrap gap-1'>
        <Image
          src={spinelle5}
          className='w-[47%]  h-[300px]'

        />
        <Image
          src={spinelle6}
          className='w-2/4  h-[300px]'

        />
      </div>




      <div className='flex flex-row before:flex 1 1 before:'></div>
      {/* <Header /> */}
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0  flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>
        

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
