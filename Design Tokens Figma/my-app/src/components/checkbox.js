import React, { useEffect } from 'react';

const checkbox = () => {
      return (
        <div className='content-area'>
          <section>
           
            <h2 className='main-heading'>Checkbox's & Radio</h2>

             <p> The checkbox is a component used to allow a user to make multiple choices that are broadly used in forms and surveys. Checkboxes are used to select one or several options in a list, while radio (option) buttons are for selecting one option from many.</p>
             </section>
             

                          
<section className="m-b-10">
 
    <div className="row">
        <div className="col-6 display-inline_block">
            <h2 className="text-dark weight-500 ">Checkbox</h2>
           <div className="checkbox-div">
                    <input  id="c1" type="checkbox"/>
                    <label for="c1">Checkbox</label>
                </div>
                <div className="checkbox-div">
                    <input id="c2"  type="checkbox" checked/>
                    <label  for="c2">Checkbox</label>
                    </div>
                
        </div>
        <div className="col-6 display-inline_block">
            <h2 className="text-dark weight-500 ">Disabled Checkbox</h2>
            <div className="checkbox-div">
                    <input id="c3"  type="checkbox" disabled/>
                    <label for="c3" >Checkbox</label> </div>
                    <div className="checkbox-div">
                    <input id="c4" type="checkbox" checked disabled/>
                    <label for="c4">Checkbox</label>
            </div>
        </div> </div>
   
  
</section>
<section className="m-b-10">
    
    <div className="row">
    <div className="col-6 display-inline_block">
            <h2 className="text-dark weight-500 ">Radio</h2>
            <div className="checkbox-div">
                    <input id="r1"   type="radio" name="radio" value="1"/>
                     <label for="r1">Radio</label>
                 </div>
                 <div className="checkbox-div"> 
                    <input id="r2"  type="radio" name="radio" value="2" checked/>
                    <label  for="r2">Radio</label>
        </div>
        </div>
        <div className="col-6 display-inline_block">
            <h2 className="text-dark weight-500 ">Disabled Radio</h2>
            <div className="checkbox-div">
                    <input id="r3"   type="radio" name="radiod" value="1" disabled/>
                    <label for="r3" >Radio</label>
            </div>
            <div className="checkbox-div"> 
                    <input  id="r4" type="radio" name="radiod" value="2" checked disabled/>
                    <label  for="r4" >Radio</label>
                 </div>
        </div>
    </div>
  
</section>
<section className="m-b-10">

   
    <div className="row">
      
    <div className="col-6 display-inline_block">
        <h2 className="text-dark weight-500  ">Switch</h2> 
            <div className="checkbox-div">
                    <input id="s1" type="checkbox" className="switch"/>
                    <label for="s1">Switch</label>
                 </div>
                 <div className="checkbox-div"> 
                    <input id="s2" type="checkbox" className="switch" checked/>
                    <label for="s2">Switch</label>
        </div>
        </div>
        <div className="col-6 display-inline_block">
            <h2 className="text-dark weight-500  ">Disabled Switch</h2>
            <div className="checkbox-div">
                    <input id="s1d" type="checkbox" className="switch" disabled/>
                    <label for="s1d">Switch</label>
                 </div>
                 <div className="checkbox-div"> 
                    <input id="s2d" type="checkbox" className="switch" checked disabled/>
                    <label for="s2d">Switch</label>
                 </div>
        </div>
    </div>
  
</section>
 
         </div>

        



      );
};

export default checkbox;