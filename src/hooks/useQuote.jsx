import axios from 'axios'
import { useState, useEffect } from 'react'

const useQuote = () => {
  const [quote, setQuote] = useState({
    text: "",
    author: ""
  })

  useEffect(() => {
    const fetchQuote = async() => {
      const response = await axios.get("https://type.fit/api/quotes")
      const randomQuote = response.data[Math.floor(Math.random() * Math.random() * 1653)]
      setQuote({...randomQuote})
    }
    fetchQuote()
  }, [])

  return {...quote}
}

export default useQuote
