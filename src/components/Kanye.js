import React from 'react'
import useFetch from './useFetch'

function Kanyebox() {
  const {data, loading, error, refetch} = useFetch(`https://api.kanye.rest`)
  
  if(loading) return <div className='kanye-box box'><h2>Kanye</h2><div>Loading...</div><button onClick={refetch}>More Kanye</button></div>
  if(error) return <div className='kanye-box box'><h2>Kanye</h2><div>Error. Could not grab data. </div><button onClick={refetch}>More Kanye</button></div>

  return (
    <div>
      <div className='kanyewest-box box'>
        <h2>Kanye</h2>
        <h1>{data?.quote}</h1>
        <button onClick={refetch}>More Kanye</button>
      </div>
    </div>
  )
}

export default Kanyebox
