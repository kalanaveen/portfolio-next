import Fade from 'react-reveal/Fade';
const Projects = ({ image, title,href1,href2,desc,tech,number }) => {
    return (
        <Fade bottom key={number}>
        <div className='bg-[#191f2c] rounded-lg m-4 transition ease-out transform hover:scale-105 hover:opacity-80 relative'>
        <div className='flex flex-col items-center justify-center p-4'>
            <div>
                <h3 className='text-lg font-bold text-[#a6b0c5] text-center underline mb-2'>{title}</h3>
                <img src={image} alt={title} className='w-full'/>
            </div>
            <div>
                <p className='text-gray-100 font-lg text-sm text-center mt-2'>
                   {desc}
                </p>
                <p className='text-gray-200 font-bold text-lg text-center mt-2 underline'>Stack</p>
                <div className='pt-1 flex flex-row justify-around flex-wrap pb-10'>
                  {tech?.map((techs)=>(
                    <p className='btn1'>{techs}</p>
                  ))}  
            </div>
            </div>
            <div className='space-x-12  bottom-0 absolute'>
                <button className='btn'><a href={href1} target='_blank'>Visit</a></button>
                <button className='btn'><a href={href2} target='_blank'>Code</a></button>
            </div>
            </div>
        </div>
        </Fade>
    )
}

export default Projects
