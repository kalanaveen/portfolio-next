const SkillIcons = ({icons,title}) => {
    return (
        <div className='flex items-center justify-center space-x-2 bg-[#192131] rounded-md w-28 m-2 text-gray-300 socialIcons cursor-default'>
            <p>{icons}</p>
            <p>{title}</p>
        </div>
    )
}

export default SkillIcons
