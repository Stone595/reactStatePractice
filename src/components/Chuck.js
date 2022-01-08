import React from 'react'
import useFetch from './useFetch'

function Chuckbox() {
  const {data, loading, error, refetch} = useFetch(`https://api.chucknorris.io/jokes/random`); 

  if(loading) return   <div className='chuck-box box'><h2>Chuck</h2><div>Loading...</div><button onClick={refetch}>More Chuck</button></div>
  if(error) return   <div className='chuck-box box'><h2>Chuck</h2><div>Error. Could not grab data</div><button onClick={refetch}>More Chuck</button></div>

  
  return (
    <div className='chuck-box box'>
      <h2>Chuck</h2>
      <h1>{data?.value}</h1>
      <button onClick={refetch}>More Chuck</button>
    </div>
  )
}

export default Chuckbox
