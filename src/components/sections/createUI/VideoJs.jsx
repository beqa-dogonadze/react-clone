import Prism from 'prismjs'
import 'prismjs/components/prism-javascript'
import React, { useEffect } from 'react'

const VideoJs = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <div className='flex flex-col rounded-3xl bg-[#23272f] border border-gray-800 h-max'>
      <h1 className='p-2 pl-5 text-gray-400'>Video.js</h1>
      <div className='h-full w-max rounded-b-3xl '>
        <pre style={{ background: '#17181C' }}>
          <code className='language-javascript'>
            {` function Video({ video }) {
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
          </code>
        </pre>
      </div>
    </div>
  )
}

export default VideoJs
