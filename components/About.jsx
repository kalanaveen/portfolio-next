const About = () => {
    return (
        <div className='text-white flex flex-col items-center justify-center mt-4' id="about">
            <h2 className='grad'>About Me</h2>
            <p className='text-gray-100 text-center text-lg font-medium mt-2 '>I have done Bachelor of Technology in Information Technology.I love to work with modern technologies and like to take development skills to next level and build awesome apps.</p>
            <span className='grad'>Personal Certificates</span>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-4'>
                <img src='/images/mern.png' className='cert'/>
                <img src='/images/react.png' className='cert'/>
                <img src='/images/node.png' className='cert'/>
                <img src='/images/api.png' className='cert'/>
                <img src='/images/mongo.png' className='cert'/>
            </div>
        </div>
    )
}

export default About
