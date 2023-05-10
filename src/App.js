
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const fetchUserData = () => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
      })
  }
  

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="app container">
      {
        data.map((d) => {
          return <div className="card"  key={d.show.id}>
            <img src={d.show.image===null ? "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg" : d.show.image.medium} class="card-img-top" alt="..." />
            <div class="card-body">
              <h1 class="card-title">{d.show.name}</h1>
              <div className='info'>
              <p>Language: {d.show.language}</p>
              <p style={{marginLeft:"10px"}}>Rating: {d.show.rating.average}</p>
              </div>
              <a href={d.show.url} target='blank' class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        })
      }
    </div>
  );
}

export default App;
