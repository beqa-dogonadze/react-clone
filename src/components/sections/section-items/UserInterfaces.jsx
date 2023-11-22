import { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaPlayCircle } from 'react-icons/fa'
import './heart.css'

const UserInterfaces = () => {
  const [heart, setHeart] = useState('turnedoff')

  const handleHeat = () => {
    if (heart === 'light') {
      setHeart((document.getElementById('heart').className = 'turnedon'))
    } else {
      setHeart((document.getElementById('heart').className = 'turnedoff'))
    }
  }

  return (
    <section className='flex flex-col items-center justify-center bg-gray-950'>
      <h1>Create user interfaces from components</h1>
      <p>
        React lets you build user interfaces out of individual pieces called
        components. Create your own React components like <span>Thumbnail</span>
        , <span>LikeButton</span>, and <span>Video</span>. Then combine them
        into entire screens, pages, and apps.
      </p>
      <div>
        <div>
          <h1>Video.js</h1>
          <div></div>
        </div>

        <div className='flex justify-center items-center bg-gradient-to-br from-gray-800 via-cyan-600 to-blue-600 w-[650px] h-[300px] rounded-r-2xl'>
          <div className='bg-white rounded-4xl w-[600px] h-[100px] rounded-2xl flex justify-between items-center p-3 '>
            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center bg-gradient-to-br from-gray-800 via-cyan-600 to-blue-600 w-[150px] h-[80px] rounded-2xl'>
                <FaPlayCircle className='text-4xl text-blue-300' />
              </div>
              <div>
                <h1>My video</h1>
                <h1>Video description</h1>
              </div>
            </div>
            <button onClick={handleHeat}>
              <CiHeart id='heart' className={heart} />
            </button>
          </div>
        </div>
      </div>
      <p>
        My video Video description Whether you work on your own or with
        thousands of other developers, using React feels the same. It is
        designed to let you seamlessly combine components written by independent
        people, teams, and organizations.
      </p>
    </section>
  )
}
export default UserInterfaces
