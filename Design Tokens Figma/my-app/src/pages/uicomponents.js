import React, { useState } from 'react';

// Components
import Badges from '../components/badges.js';
import Breadcrumbs from '../components/breadcrumbs.js';
import Buttons from '../components/buttons.js';
import Checkbox from '../components/checkbox.js';
import Form from '../components/form.js';
import Popover from '../components/popover.js';
import Toaster from '../components/toaster.js';
import Tabs from '../components/tabs.js';
import Muibuttons from '../components/muibuttons.js';
import Grid from '../components/grid.js';



import '../assets/scss/sitemain.scss';
import Tooltip from '../components/tooltip.js';
import Accordion from '../components/accordion.js';
 

const UiComponents = () => {
  const [currentPage, setCurrentPage] = useState('badges');

  const renderPage = () => {
    switch (currentPage) {
      case 'badges':
        return <Badges />;
      case 'breadcrumbs':
        return <Breadcrumbs />;
      case 'buttons':
        return <Buttons />;
        case 'checkbox':
          return <Checkbox />;
          case 'form':
            return <Form />;
            case 'popover':
              return <Popover />;
              case 'toaster':
                return <Toaster />;     
                case 'tabs':
                  return <Tabs />; 
                  case 'muibuttons':
                    return <Muibuttons />;
                    case 'tooltip':
                      return <Tooltip />;  
                      case 'accordion':
                      return <Accordion />;  
                      case 'grid':
                      return <Grid />
      default:
        return <Badges />;
    }
  };

  return (
    <div>

<div className="sidebar" >

  
<h6 className='m-t-10 m-b-0 m-l-10'>Components</h6>
<ul id="dynamic-tabs">
    <li className={currentPage==="badges" && 'activetab'} onClick={() => setCurrentPage('badges')}>Badges</li>
    <li className={currentPage==="breadcrumbs" && 'activetab'} onClick={() => setCurrentPage('breadcrumbs')}>Breadcrumbs</li>
    <li className={currentPage==="buttons" && 'activetab'} onClick={() => setCurrentPage('buttons')}>Buttons</li>
    <li className={currentPage==="checkbox" && 'activetab'} onClick={() => setCurrentPage('checkbox')}>Checkbox</li>

    <li className={currentPage==="form" && 'activetab'} onClick={() => setCurrentPage('form')}>Form</li>
    <li className={currentPage==="popover" && 'activetab'} onClick={() => setCurrentPage('popover')}>Popover</li>
    <li className={currentPage==="tooltip" && 'activetab'} onClick={() => setCurrentPage('tooltip')}>Tooltip</li>
    <li className={currentPage==="toaster" && 'activetab'} onClick={() => setCurrentPage('toaster')}>Toaster</li>
    <li className={currentPage==="tabs" && 'activetab'} onClick={() => setCurrentPage('tabs')}>Tabs </li>
    <li className={currentPage==="muibuttons" && 'activetab'} onClick={() => setCurrentPage('muibuttons')}>MUI Buttons </li>

</ul>


</div>


{renderPage()}
    </div>
  );
};

export default UiComponents;