import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/ui/Header'
import Character from './components/characters/CharacterGrid'
import axios from 'axios'
import Search from './components/ui/Search';
const App =()=>{
  const [items,setItems]=useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(()=>{
    const fetchItems=async ()=>{
      const response = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(response.data)
      setItems(response.data)
      setIsLoading(false)
    }
    fetchItems()
  },[query])
  return <div className="container">
    <Header/>
    <Search getQuery={(query)=>setQuery(query)}/>
    <Character isLoading={isLoading} items={items} />
  </div>
}

export default App;
