
import React from 'react'
import PermanentDrawerLeft from '../component/Drawer';
import { useLocation,useParams } from 'react-router-dom';



const Dashboard =()=> {
  const params = useParams();
  console.log(params)

  const Location = useLocation();

  return (
    <div
    className='text'
    >
    <div>
      <PermanentDrawerLeft/>
    </div>
    <h1>HELLO {Location.state.name} </h1>
    </div>
  )
}


export default Dashboard