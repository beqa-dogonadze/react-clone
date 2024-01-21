import { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaPlayCircle } from 'react-icons/fa'
const MyVideo = () => {
  const [heart, setHeart] = useState(false)
  const handleClick = () => {
    setHeart(!heart)
  }
  return (
    <div className='flex justify-center items-center bg-gradient-to-br from-[#31304a] via-[#18354d] to-[#1c403f] w-[650px] h-[300px] rounded-r-2xl p-5'>
      <div className='bg-white rounded-4xl w-[600px] h-[100px] rounded-2xl flex justify-between items-center p-3'>
        <div className='flex items-center gap-2 '>
          <div className='flex items-center justify-center bg-gradient-to-br from-[#185B9A] to-[#087DA2] w-[150px] h-[80px] rounded-2xl'>
            <FaPlayCircle className='text-4xl text-blue-300' />
          </div>
          <div>
            <h1>My video</h1>
            <h1 className='text-sm text-[#798193]'>Video description</h1>
          </div>
        </div>
        <button className='active:text-red-500' onClick={handleClick}>
          <CiHeart
            style={{
              fill: heart ? 'black' : 'red',
              fontSize: heart ? '30px' : '30px'
            }}
          />
        </button>
      </div>
    </div>
  )
}
export default MyVideo
