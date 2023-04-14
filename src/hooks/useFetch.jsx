import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (URL) => {
  const [data, setData] = useState()

  useEffect(() => {
    const fetch = async() => {
      const response = await axios.get(URL)
      if(response && response.data) setData(response.data)
    }
    fetch()
  }, [])
  return [data]
}

export default useFetch
