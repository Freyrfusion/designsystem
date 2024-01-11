import React, { useEffect } from 'react';
 
const Grid = () => {
      return (
        <div className='content-area'>
        <center>
          <div className='container'>

       
            <br></br> <br></br>
        <div className="row"> 
        <div className="col col-3 box">col 3</div>
        <div className="col col-3 box">col 3</div>
        <div className="col col-3 box">col 3</div>
        <div className="col col-3 box">col 3</div>
      </div>
      <div className="row"> 
        <div className="col col-4 box">col 4</div>
        <div className="col col-4 box">col 4</div>
        <div className="col col-4 box">col 4</div>
       </div>
       <div className="row"> 
        <div className="col col-6 box">col 6</div>
        <div className="col col-6 box">col 6</div>
        </div>
        <div className="row"> 
        <div className="col col-12 box">col 12</div>
        </div>

        <br></br> 
        <div className="row"> 
        <div className="col col-12 box flex-start">
        col-12
          </div>
        </div>

        <br></br> 
        
        
        <div className="row"> 
        <div className="col-12 box flex-center">
           col 12
            </div>
         </div>
         <br></br> 
        <div className="row"> 
        <div className="col-12 box flex-end">
           col 12
            </div>
         </div>
        <br></br> 
        
        <div className="row"> 
        <div className="col-12 box flex-stretch">
           col 12
            </div>
          </div>

        </div>
        
   </center>
    </div>
      );
};
 
export default Grid;