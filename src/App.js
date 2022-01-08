
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


function App() {    

  return (
    <div className="App">
      <div className='main-container'>
        <Kanyebox />
        <Chuckbox />
      </div>
    </div>
  )
}

export default App;
