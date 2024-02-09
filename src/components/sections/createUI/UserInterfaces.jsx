import MyVideo from '../createUI/MyVideo'
import VideoJs from '../createUI/VideoJs'

const UserInterfaces = () => {
  return (
    <section className='flex flex-col items-center w-full bg-[#F6F6F9] border border-[#E8E8EA] dark:border-[#373A45] dark:bg-[#181a20]'>
      <div className='flex flex-col justify-center text-center mt-20 dark:text-white max-w-4xl'>
        <h1 className='text-6xl m-auto w-[600px]'>
          Create user interfaces from components
        </h1>
        <p className='text-xl py-10 w-[770px]'>
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like
          <span className='bg-[#E7E8EC] dark:bg-[#404756] rounded-md ml-1 pl-1 pr-1'>
            Thumbnail
          </span>
          ,
          <span className='bg-[#E7E8EC] dark:bg-[#404756] rounded-md ml-1 pl-1 pr-1'>
            LikeButton
          </span>
          , and
          <span className='bg-[#E7E8EC] dark:bg-[#404756] rounded-md ml-1 pl-1 pr-1'>
            Video
          </span>
          . Then combine them into entire screens, pages, and apps.
        </p>
      </div>
      <div className='flex items-center justify-center  max-w-7xl mt-10'>
        <VideoJs />
        <MyVideo />
      </div>
      <p className='text-xl text-center dark:text-white py-10 max-w-4xl w-[700px]'>
        Whether you work on your own or with thousands of other developers,
        using React feels the same. It is designed to let you seamlessly combine
        components written by independent people, teams, and organizations.
      </p>
    </section>
  )
}
export default UserInterfaces
