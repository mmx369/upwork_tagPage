import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './App.module.css'
import { Container } from './components/Container/Container'
import { Input } from './components/Input/Input'

function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  const fetchData = async () => {
    const response = await fetch(
      'https://6357f067c27556d289325a88.mockapi.io/api/v1/films?page=1&limit=10'
    )
    const data = await response.json()

    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={styles.container}>
      <Input
        placeholder='Enter Tag...'
        className={styles.search_input}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className={styles.tag_list}>
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
    </div>
  )
}

export default App
