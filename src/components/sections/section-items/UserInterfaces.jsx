import { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaPlayCircle } from 'react-icons/fa'
import './heart.css'

const UserInterfaces = () => {
  const [heart, setHeart] = useState(false)
  const handleClick = () => {
    setHeart(!heart)
  }

  return (
    <section className='flex flex-col items-center w-full bg-[#181a20]'>
      <div className='flex flex-col justify-center text-center mt-20 text-white max-w-4xl'>
        <h1 className='text-6xl m-auto w-[600px]'>
          Create user interfaces from components
        </h1>
        <p className='text-xl py-10'>
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like
          <span className='bg-gray-500 rounded-md ml-1 pl-1 pr-1'>
            Thumbnail
          </span>
          ,
          <span className='bg-gray-500 rounded-md ml-1 pl-1 pr-1'>
            LikeButton
          </span>
          , and
          <span className='bg-gray-500 rounded-md ml-1 pl-1 pr-1'>Video</span>.
          Then combine them into entire screens, pages, and apps.
        </p>
      </div>
      <div className='flex items-center justify-center  max-w-7xl mt-10'>
        <div className='flex flex-col  rounded-3xl  bg-[#23272f]  border border-gray-800 h-[350px]'>
          <h1 className='p-2 pl-5 text-gray-400'>Video.js</h1>
          <div className='bg-[#16181d] h-full rounded-b-3xl text-white p-5'>
            {`
              function Video({ video }) {
                return ( 
                  <div>
                    <Thumbnail video={video} />
                    <a href={video.url}>
                      <h3>{video.title}</h3>
                      <p>{video.description}</p>
                    </a>
                    <LikeButton video={video} />
                  </div>
                );
              }`}
          </div>
        </div>

        <div className='flex justify-center items-center bg-gradient-to-br from-[#31304a] via-[#18354d] to-[#1c403f] w-[650px] h-[300px] rounded-r-2xl p-5'>
          <div className='bg-white rounded-4xl w-[600px] h-[100px] rounded-2xl flex justify-between items-center p-3'>
            <div className='flex items-center gap-2 '>
              <div className='flex items-center justify-center bg-gradient-to-br from-gray-800 to-cyan-500 w-[150px] h-[80px] rounded-2xl'>
                <FaPlayCircle className='text-4xl text-blue-300' />
              </div>
              <div>
                <h1>My video</h1>
                <h1>Video description</h1>
              </div>
            </div>
            <button className='active:text-red-500' onClick={handleClick}>
              <CiHeart
                style={{
                  color: heart ? 'black' : 'red',
                  fontSize: heart ? '30px' : '30px'
                }}
              />
            </button>
          </div>
        </div>
      </div>
      <p className='text-xl text-center text-white py-10 max-w-4xl w-[700px]'>
        Whether you work on your own or with thousands of other developers,
        using React feels the same. It is designed to let you seamlessly combine
        components written by independent people, teams, and organizations.
      </p>
    </section>
  )
}
export default UserInterfaces
