import { FaGithub } from 'react-icons/fa'
import { LuSunMoon } from 'react-icons/lu'

const NavItems = () => {
  return (
    <div className='flex justify-center ml-10'>
      <ul className='flex text-white w-full gap-5 text-md'>
        <li className='hover:bg-[rgba(120,131,155,.2)] rounded-full p-2'>
          <a href='/'>Learn</a>
        </li>
        <li className='hover:bg-[rgba(120,131,155,.2)] rounded-full p-2'>
          <a href='/'>Reference</a>
        </li>
        <li className='hover:bg-[rgba(120,131,155,.2)] rounded-full p-2'>
          <a href='/'>Community</a>
        </li>
        <li className='hover:bg-[rgba(120,131,155,.2)] rounded-full p-2'>
          <a href='/'>Blog</a>
        </li>
        <li className='hover:bg-[rgba(120,131,155,.2)] rounded-full p-2'>
          <a href='/'>Community</a>
        </li>
        <div>
          <button className='hover:bg-[rgba(120,131,155,.2)] rounded-full p-2'>
            <LuSunMoon className='text-2xl' />
            {/* <FaMoon /> */}
          </button>
        </div>
        <div>
          <button className='hover:bg-[rgba(120,131,155,.2)] rounded-full p-2'>
            <FaGithub className='text-2xl' />
          </button>
        </div>
      </ul>
    </div>
  )
}
export default NavItems
