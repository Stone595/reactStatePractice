
import './App.css';
import useFetch from './useFetch';
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

function Nasabox() {
  const {data, loading, error, refetch} = useFetch(`https://eonet.gsfc.nasa.gov/api/v3/events`); 

  if(loading) return   <div className='nasa-box '><h2>Nasa</h2><div>Loading...</div><button onClick={refetch}>More Events</button></div>
  if(error) return   <div className='nasa-box '><h2>Nasa</h2><div>Error. Could not grab data</div><button onClick={refetch}>More Events</button></div>

  
  return (
    <div className='nasa-box '>
      <h2>Nasa</h2>
      <ul>
        {data.events.map((e) => {
          return (
            <li key={e.id}>{e.title}</li>
          )
        })}
      </ul>
      {/* <h1>{data?.events[0].title}</h1> */}
      <button onClick={refetch}>More Nasa</button>
    </div>
  )
}

function App() {    

  return (
    <div className="App">
      <div className='main-container'>
        <Kanyebox />
        <Chuckbox />
        <Nasabox />
      </div>
    </div>
  )
}

export default App;
