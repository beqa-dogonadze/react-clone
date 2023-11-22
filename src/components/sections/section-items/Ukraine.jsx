import ukraine from '../logos/ukraine.png'
const Ukraine = () => {
  return (
    <div className='items-center flex justify-center h-[40px] bg-gray-700 text-white'>
      <h1 className='flex items-center gap-1 text-xl'>
        Support Ukraine <img src={ukraine} width={20} alt='' />
        <span className='text-md text-[#0074a6] hover:underline'>
          Help Provide Humanitarian Aid to Ukraine.
        </span>
      </h1>
    </div>
  )
}
export default Ukraine
