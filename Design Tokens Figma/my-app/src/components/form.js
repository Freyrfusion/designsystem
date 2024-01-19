import React, { useEffect } from 'react';

const Form = () => {
    return (
        <div className='content-area'>
          <section>
           
          <div className="row">
          <div className="col-6">
                    <form>
                        <div className="form-section_main">
                            <h2 className="m-l-26"> Horizontal Forms    </h2>
                            <p className="sub-text"> Used for shipping orders </p>
                           
                             
                                <div className="row form-group">
                                    <div className="col-6">
                                        <label className="form-label"> Label </label>
                                        <input type="text" className="form-control"/>
                                         <span className="valid-feedback"> Helper Text</span> 
                                    </div> </div>
                                    <div className="row form-group">
                                    <div className="col-12">
                                         <label className="form-label"> Label </label>
                                         <input type="text" className="form-control" disabled="disabled"/>
                                          <span className="valid-feedback"> Helper Text</span> 
                                     </div> </div>
                                     <div className='row form-group'>
                                     <div className="col-12 input-error">
                                        <label className="form-label"> Label </label>
                                        <input type="text" className="form-control"/>
                                         <span> Helper Text</span> 
                                         <div> <em className='icon-notification2'></em> Validation Message</div> 

                                    </div> </div>
                                    <div className='row  form-group'>
                                    <div className="col-12 input-success">
                                        <label className="form-label"> Label </label>
                                        <input type="text" className="form-control"/>
                                         <span> Helper Text</span> 
                                         <div> <em className='icon-notification2'></em> Validation Message</div> 
                                    </div>
                                </div> </div>

                           
                    </form>
                </div>
                
            </div>
           
           
           
             </section>
             <section>
           
           <div className="row">
           <div className="col-6 display-inline_block">
                     <form>
                         <div className="form-section_main">
                           
                             
                             <div className="col-6 display-inline_block m-t-20">
                                 <div className="row">
                                     <div className="col-12 display-inline_block form-group">
                                         <label className="form-label"> Email address </label>
                                         <textarea  className="form-control">

                                            </textarea>

                                        </div>

                                        <div className="col-12 display-inline_block form-group">
                                            <label className="form-label"> Label <span>*</span> <em className='icon-notification2'></em> </label>
                                            <input type="text" className="form-control" />
                                            <span className="valid-feedback"> Helper Text</span>
                                        </div>


                                        <div className="col-12 display-inline_block form-group search-main">
                                            <label className="form-label"> Label </label>
                                            <input type="text" className="form-control" />
                                            <span className="valid-feedback"> Helper Text</span>
                                            <div>
                                                <em className="icon-search2"></em>
                                                <em className="icon-close-round"> </em>
                                            </div>

                                        </div>

                                        
                                    </div>

                                </div>

                            </div>
                        </form>
                    </div>

                </div>
            </section>




        </div>





    );
};

export default Form;