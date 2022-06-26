import React, { useContext } from 'react'
import { FirebaseContext } from '../firebase/Firebase_provider';

function Rest_of_app() {
const fbContext=useContext(FirebaseContext);
const app=fbContext.app;

  return (
    <div>
        <br/>
        <br/>
        Fire Base Info :
        <br/>
        <br/>
        {JSON.stringify(app)}

    </div>
  )
}

export default Rest_of_app