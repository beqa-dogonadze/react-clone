import { CiSearch } from 'react-icons/ci'
import { FaReact } from 'react-icons/fa'
import NavItems from './NavItems'
import Ukraine from './Ukraine'
const NavBar = () => {
  return (
    <div>
      <Ukraine />
      <header className='mt-3 items-center'>
        <nav className='flex items-center justify-between mr-5 ml-5'>
          <div className='flex items-center gap-2 w-[1000px] '>
            <FaReact className='text-[#159BC4] text-4xl' />
            <h1 className='text-white text-xl'>React</h1>
          </div>
          <div className='flex justify-center w-full font'>
            <button className='rounded-full flex justify-between items-center w-full p-3 text-gray-400 dark:bg-[rgba(120,131,155,.2)] bg-white h-[40px] active:border-2 active:border-blue-500'>
              <span className='flex items-center gap-3'>
                <CiSearch />
                Search
              </span>
              <div className='items-center gap-2 flex text-[12px]'>
                <span className='bg-[#23262E] rounded pl-1 pr-1'>Ctrl</span>
                <span className='bg-[#23262E] rounded pl-1 pr-1'>K</span>
              </div>
            </button>
          </div>
          <NavItems className='w-full' />
        </nav>
      </header>
    </div>
  )
}
export default NavBar
