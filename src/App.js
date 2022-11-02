import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import { Container } from './components/Container/Container'
import { Input } from './components/Input/Input'

function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  const fetchData = async () => {
    const response = await fetch(
      'https://6357f067c27556d289325a88.mockapi.io/api/v1/films'
    )
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div>
        <Input
          placeholder='Enter Post Title'
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className='App'>
        {data
          .filter((el) => {
            if (query === '') {
              return el
            } else {
              const items = JSON.parse(localStorage.getItem(el.released))
              if (!items || items.length === 0) {
                return null
              } else if (
                items.join().toLowerCase().includes(query.toLowerCase())
              ) {
                return el
              }
            }
            return null
          })
          .map(function (el) {
            return <Container key={uuidv4()} el={el} />
          })}
      </div>
    </>
  )
}

export default App
