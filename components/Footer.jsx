import { BsTelephone } from 'react-icons/Bs';
import { AiOutlineMail } from 'react-icons/Ai';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <h2 className='grad'>Contact</h2>
            <div className='text-white flex flex-col p-4 sm:flex-row sm:items-center sm:justify-evenly sm:m-4'>
                <div className='flex items-center space-x-2'>
                    <p><AiOutlineMail /></p>
                    <p className='text-gray-100 text-center text-lg font-medium'>kalanaveen55@gmail.com</p>
                </div>
                <div className='mt-3 flex items-center space-x-2'>
                    <p><BsTelephone /></p>
                    <p className='text-gray-100 text-center text-lg font-medium'>+91 8368846888</p>
                </div>
            </div>
            <div className='text-white flex justify-center space-x-4 items-center'>
                <a className='socialIcons text-white cursor-pointer' href='https://github.com/kalanaveen' target='_blank'><AiFillGithub /></a>
                <a className='socialIcons text-white cursor-pointer' href='https://www.linkedin.com/in/naveen-kala20' target='_blank'><AiFillLinkedin /></a>
                <a className='socialIcons text-white cursor-pointer' href='https://www.facebook.com/naveen.kala.7' target='_blank'><AiFillFacebook /></a>
            </div>
        </>
    )
}

export default Footer
