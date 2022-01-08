import React from 'react'
import useFetch from './useFetch'

function Nasabox() {
  const {data, loading, error, refetch} = useFetch(`https://eonet.gsfc.nasa.gov/api/v3/events`); 

  if(loading) return   <div className='nasa-box '><h2>Nasa</h2><div>Loading...</div><button onClick={refetch}>More Events</button></div>
  if(error) return   <div className='nasa-box '><h2>Nasa</h2><div>Error. Could not grab data</div><button onClick={refetch}>More Events</button></div>

  return (
    <div className='nasa-box '>
      <h2>Nasa</h2>
      <ul>
        {data?.events.map((e) => {
          return (
            <li key={e.id}>{e.title}</li>
          )
        })}
      </ul>
      <button onClick={refetch}>More Events</button>
    </div>
  )  


  // return (
  //   <div className='nasa-box '>
  //     <h2>Nasa</h2>
  //     <ul>
  //       {data.events.map((e) => {
  //         return (
  //           <li key={e.id}>{e.title}</li>
  //         )
  //       })}
  //     </ul>
  //     {/* <h1>{data?.events[0].title}</h1> */}
  //     <button onClick={refetch}>More Nasa</button>
  //   </div>
  // )
}
export default Nasabox
