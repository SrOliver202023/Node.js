import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Home(){
  const [values, setValues] = useState({});
  const api = axios.create({baseURL:"http://localhost:4000/"})

  api.post('/', {msg:"nada"})
  .then(resp1 => console.log(resp1))
  .catch(err=> console.log(err))
  api.get('/messages')
  .then(resp1 => {
    setValues(`${resp1}-->`)
    console.log(values)
  })
  .catch(err=> console.log(err))

  return(
    <div>
      <h1>Hello Home!</h1>
      <div></div>
    </div>
  )
}

export default Home;