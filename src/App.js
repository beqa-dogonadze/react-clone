import NavBar from './components/navbar/NavBar'
import ReactWelcome from './components/sections/createUI/ReactWelcome'
import UserInterfaces from './components/sections/createUI/UserInterfaces'

const App = () => {
  return (
    <div className='bg-white dark:bg-[#23262E]'>
      <NavBar />
      <ReactWelcome />
      <UserInterfaces />
    </div>
  )
}
export default App
