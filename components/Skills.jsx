import { SiReact,SiNextdotjs,SiNodedotjs,SiTailwindcss,SiMaterialui,SiAntdesign,SiChakraui,SiFirebase } from 'react-icons/Si';
import SkillIcons from './SkillIcons';

const Skills = ()=>{
    return(
      <div className='mt-8' id="tech">
          <h2 className='grad'>Technologies</h2>
          <p className='text-gray-100 text-center text-lg font-medium'>I have worked with range of technologies from back-end to design.</p>
          <div className='flex items-center justify-center flex-wrap mt-2'>
            <SkillIcons icons={<SiReact/>} title="React JS"/>
            <SkillIcons icons={<SiNextdotjs/>} title="Next JS"/>
            <SkillIcons icons={<SiNodedotjs/>} title="Node JS"/> 
            <SkillIcons icons={<SiFirebase/>} title="Firebase"/> 
            <SkillIcons icons={<SiTailwindcss/>} title="Tailwind CSS"/> 
            <SkillIcons icons={<SiMaterialui/>} title="Material UI"/> 
            <SkillIcons icons={<SiAntdesign/>} title="AntDesign"/> 
            <SkillIcons icons={<SiChakraui/>} title="Chakra UI"/> 
          </div>
      </div>
    )
};

export default Skills;