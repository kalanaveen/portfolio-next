import Link from 'next/link';
import { AiFillGithub,AiFillFacebook,AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

const Header = () => {
    return (
        <div className='flex flex-col pt-4 items-center justify-center sm:flex-row sm:justify-evenly sticky top-0 z-10 bg-[#10203f]'>
                <div className='flex items-center text-white'>
                    <DiCssdeck size="3rem" className='animate-spin' 
                    color='white'/>
                    <span className='font-bold text-gray-100'>NAVEEN KALA</span>
                </div>

            <div className='flex space-x-5'>
                <Link href="#projects">
                    <p className='navbar'>Projects</p>
                </Link>

                <Link href="#tech">
                    <p className='navbar'>Technologies</p>
                </Link>

                <Link href="#about">
                    <p className='navbar'>About</p>
                </Link>

            </div>

            <div className='hidden sm:inline-flex items-center space-x-8 '>
                <a className='socialIcons text-white cursor-pointer' href='https://github.com/kalanaveen' target='_blank'><AiFillGithub /></a>
                <a className='socialIcons text-white cursor-pointer' href='https://www.linkedin.com/in/naveen-kala20' target='_blank'><AiFillLinkedin /></a>
                <a className='socialIcons text-white cursor-pointer' href='https://www.facebook.com/naveen.kala.7' target='_blank'><AiFillFacebook /></a>
            </div>
        </div>
    )
}

export default Header;
