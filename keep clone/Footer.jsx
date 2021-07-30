import React from 'react';
const year=new Date().getFullYear();
const Footer=()=>{
   return(
<>
    <div className="footer">
    <p>copyright @ {year}</p>
    </div>
</>
   );
}
export default Footer;