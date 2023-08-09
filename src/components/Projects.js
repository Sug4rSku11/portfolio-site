import { useState } from 'react';
import items from './ProjectData';
import Menu from './ProjectMenu';
import Button from './ProjectButtons';

const allCategories = ['All', ...new Set(items.map(item => item.category))];

console.log(allCategories);

function Projects() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }
    const filterData = items.filter(item => item.category === button);
    setMenuItem(filterData)
  }

  return (
    <div>
      <div className='projects-title'>
        <h1>Projects</h1>
      </div>
      <Button button={buttons} filter={filter}/>
    <Menu menuItem={menuItem}/>
    </div>
  );  
}
export default Projects;