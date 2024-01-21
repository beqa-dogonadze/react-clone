import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { IoMoonOutline } from 'react-icons/io5'
import { LuSunMoon } from 'react-icons/lu'

const NavItems = () => {
  // Retrieve the stored theme preference from localStorage
  const storedTheme = localStorage.getItem('theme')
  // Initialize the theme state with the stored theme or an empty string
  const [theme, setTheme] = useState(storedTheme || '')
  // Function to toggle between light and dark themes

  const handleDark = () => {
    const newTheme = theme === '' ? 'dark' : ''
    // Update the theme state and store the new theme preference in localStorage
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.body.className = newTheme
  }

  // useEffect hook to update the body class when the theme changes
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className='flex justify-center ml-10'>
      <ul className='flex text-black w-full dark:text-white gap-5 text-[15px]'>
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
        <div>
          <button
            onClick={handleDark}
            className='hover:bg-[rgba(120,131,155,.2)] rounded-full p-2'
          >
            {theme === '' ? (
              <IoMoonOutline className='text-2xl' />
            ) : (
              <LuSunMoon className='text-2xl' />
            )}
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
