import React from 'react'
import "../styles/videos.css" 
const Videos = () => {
  return (
    <div className='disp'>
        
        <div className='videos' style={{backgroundImage:'url(https://i02.appmifile.com/769_operator_in/26/04/2021/2fab525c022f0d6c0dba8a6edcf12060.png?width=398&height=320)'}} >
      <a href="https://youtu.be/TKpW-qdfpYk">
      <p>Redmi Note 10 Pro Max</p>
      </a>
       </div>

       <div className='videos' style={{backgroundImage:'url(https://i01.appmifile.com/webfile/globalimg/in/cms/2461CE83-F535-6B92-CBEE-5971984298E4.jpg?width=398&height=320)'}}>
        <a href="https://youtu.be/fL4XkAIa-48">
        <p>Mi 10</p>
        </a>
        </div>

        <div className='videos' style={{backgroundImage:'url(https://i01.appmifile.com/webfile/globalimg/in/cms/FD2BD776-5489-44CA-F05A-C20C232A4848.jpg?width=398&height=320)'}}>
        <a href="https://youtu.be/QUnvwB7upsw">
        <p>Mi MIX Alpha</p>
        </a>
        </div>
       
    </div>
    
  ) 
}

export default Videos