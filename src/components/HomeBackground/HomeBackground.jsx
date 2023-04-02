import { useEffect, useRef, useState } from "react"
import "./HomeBackground.css"

const HomeBackground = () => {
  const initialOpacities = [1, 0, 0, 0, 0]
  const [opacities, setOpacities] = useState(initialOpacities)
  const index = useRef(0)

  useEffect(() => {
    const transition = () => {
      setTimeout(() => {
        if(index.current < opacities.length - 1){
          index.current += 1
          const list = [...opacities]
          list[index.current] = 1
          setOpacities([...list])
          transition()
        }else{
          setOpacities([...initialOpacities])
          index.current = 0
          transition()
        }
      }, 5000)
    }
    transition()
  }, [])

  return (
    <div className="background" draggable={"false"}>
      <img src='/images/backgrounds/homescreen/forest.png' style={{opacity: opacities[0]}}/>
      <img src='/images/backgrounds/homescreen/desert.png' style={{opacity: opacities[1]}}/>
      <img src='/images/backgrounds/homescreen/lake.png' style={{opacity: opacities[2]}}/>
      <img src='/images/backgrounds/homescreen/mountains.png' style={{opacity: opacities[3]}}/>
      <img src='/images/backgrounds/homescreen/plains.png' style={{opacity: opacities[4]}}/>
    </div>
  )
}

export default HomeBackground
