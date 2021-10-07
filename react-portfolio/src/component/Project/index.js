import React,{useState} from 'react';
import Hover from '../Hover';

function Project(){
    const projects = [
        {
          name: 'quizam',
          url:'https://quizam.herokuapp.com/',
          description: 'The application can help you to build your own quiz.',
          github:'https://github.com/cffhr99/quizam',
        },
        {
            name: 'Budget Tracker',
            url:'https://fierce-fortress-54779.herokuapp.com/',
            description: 'The application can help you to organize your budget',
            github:'https://github.com/cffhr99/BQ_Week_19_C',
        },
        {
            name: 'GoodFinds',
            url:'',
            description: 'The website is that you can find a good book or movie.',
            github:'https://github.com/cffhr99/Project1', 
        },
        {
            name: 'NYC Citi Bike Analysis',
            url:'https://public.tableau.com/app/profile/cffhr99/viz/NYC_Citi_Bike_Update/NYCCitiBike?publish=yes',
            description: 'An analysis on NYC Citi Bike.',
            github:'https://github.com/cffhr99/Module14-Challenge',
        }
      ];
    const [currentProject,setCurrentProject]=useState();
    const toggleHover = (project,i) =>{
      setCurrentProject({...project,index:i});
      setIsHover(true);
    }
    const [isHover,setIsHover] = useState(false);
    return (
         <div className='flex-row'>
           {isHover && <Hover currentProject={currentProject}></Hover>}
             {projects.map((project,i)=>(
                 <img 
                 src={require(`../../assets/project/${i}.png`).default}
                 alt={project.name}
                 className='img-thumbnail1 mx-1'
                 key={project.name}
                 onMouseEnter ={()=>toggleHover(project,i)}
                 onMouseLeave ={()=>setIsHover(false)}
                 />      
             ))}
         </div>
    )
}



export default Project;