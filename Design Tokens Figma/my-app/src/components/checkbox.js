import React, { useEffect } from 'react';

const checkbox = () => {
      return (
        <div className='content-area'>
          <section>
           
            <h2 className='main-heading'>Checkbox's & Radio</h2>

             <p> The checkbox is a component used to allow a user to make multiple choices that are broadly used in forms and surveys. Checkboxes are used to select one or several options in a list, while radio (option) buttons are for selecting one option from many.</p>
              <div className='row'>
             <div className="col-4 display-inline_block">
    <h6>Checkboxes</h6>
    <label className="control control--checkbox">First checkbox
      <input type="checkbox" checked="checked" className='input'/>
      <div className="control__indicator"></div>
    </label>
    <label className="control control--checkbox">Second checkbox
      <input type="checkbox" className='input'/>
      <div className="control__indicator"></div>
    </label>
    <label className="control control--checkbox">Disabled
      <input type="checkbox" className='input' disabled="disabled"/>
      <div className="control__indicator"></div>
    </label>
    <label className="control control--checkbox">Disabled & checked
      <input type="checkbox" className='input' disabled="disabled" checked="checked"/>
      <div className="control__indicator"></div>
    </label>
  </div>
  <div className="col-4 display-inline_block">
    <h6>Radio buttons</h6>
    <label className="control control--radio">First radio
      <input type="radio" className='input' name="radio" checked="checked"/>
      <div className="control__indicator"></div>
    </label>
    <label className="control control--radio">Second radio
      <input type="radio" className='input' name="radio"/>
      <div className="control__indicator"></div>
    </label>
    <label className="control control--radio">Disabled
      <input type="radio" className='input' name="radio2" disabled="disabled"/>
      <div className="control__indicator"></div>
    </label>
    <label className="control control--radio">Disabled & checked
      <input type="radio" className='input' name="radio2" disabled="disabled" checked="checked"/>
      <div className="control__indicator"></div>
    </label>
  </div>
  <div className="col-4 display-inline_block">
    <h6>Select boxes</h6>
    <div className="select">
      <select>
        <option>First select</option>
        <option>Option</option>
        <option>Option</option>
      </select>
      <div className="select__arrow"></div>
    </div>
    <div className="select">
      <select>
        <option>Second select</option>
        <option>Option</option>
        <option>Option</option>
      </select>
      <div className="select__arrow"></div>
    </div>
    <div className="select">
      <select disabled="disabled">
        <option>Disabled</option>
        <option>Option</option>
        <option>Option</option>
      </select>
      <div className="select__arrow"></div>
    </div>
  </div> </div>
               
  </section>
         </div>

        



      );
};

export default checkbox;