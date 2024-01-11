import React from 'react'

const HomeMap = () => {
  return (
    <div style={{margin:'2rem  auto', width: '100%', display:'flex', alignItems:'center', flexDirection:'column'}}>

      <h1 style={{margin:'1rem'}}>99 Wonderland</h1>
      
      <iframe width="360" height="400" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3983.4547271226043!2d101.6644931!3d3.2364583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4703c95df45b%3A0x6a2970e61fa37cad!2s99%20Wonderland%20Park!5e0!3m2!1sen!2sin!4v1704955058892!5m2!1sen!2sin"></iframe>
    </div>
  )
}

export default HomeMap