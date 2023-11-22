import { CiSearch } from 'react-icons/ci'
import Rlogo from '../sections/logos/logo512.png'
import Ukraine from '../sections/section-items/Ukraine'
import NavItems from './NavItems'

const NavBar = () => {
  return (
    <div>
      <Ukraine />
      <header className='mt-3 items-center'>
        <nav className='flex items-center justify-between mr-5 ml-5'>
          <div className='flex items-center gap-2 w-[1000px] '>
            <img src={Rlogo} width={43} alt='react' />
            <h1 className='text-white text-xl'>React</h1>
          </div>
          <div className='flex justify-center w-full font'>
            <button className='rounded-full flex justify-between items-center w-full p-3 text-gray-400 bg-[rgba(120,131,155,.2)] h-[40px] active:border-2 active:border-blue-500'>
              <span className='flex items-center gap-3'>
                <CiSearch />
                Search
              </span>
              <div className='items-center gap-2 flex'>
                <span className='bg-gray-800 rounded text-sm p-1'>Ctrl</span>
                <span className='bg-gray-800 rounded text-sm p-1'>K</span>
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
