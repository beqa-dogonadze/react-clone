import Rlogo from './../logos/logo512.png'

const ReactWelcome = () => {
  return (
    <section className='flex flex-col justify-center items-center mt-32 gap-2 h-[425px] '>
      <img src={Rlogo} alt='reactlogo' width={110} />
      <h1 className='text-white text-6xl font-bold'>React</h1>
      <h1 className='text-white text-4xl'>
        The library for web and native user interfaces
      </h1>
      <div className='mt-5 '>
        <button className='text-white rounded-full bg-[#0074a6] p-3 w-[160px] font-bold text-[18px] mr-2'>
          Learn React
        </button>
        <button className='text-white border rounded-full border-gray-600 p-3 w-[160px] font-bold text-[18px]'>
          API Reference
        </button>
      </div>
    </section>
  )
}
export default ReactWelcome
