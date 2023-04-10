import { useSelector } from "react-redux"

import "./HomeBackground.css"

const HomeBackground = () => {
  const isViewingResults = useSelector((state) => state.results.isViewingResults) 

  return (
    <div 
      className="background" 
      draggable={"false"}
      style={{
        opacity: isViewingResults ? "0.3" : "1"
      }}
    >
      <img className="slide1" src='/images/backgrounds/homescreen/forest.png'/>
      <img className="slide2" src='/images/backgrounds/homescreen/desert.png'/>
      <img className="slide3" src='/images/backgrounds/homescreen/lake.png'/>
      <img className="slide4" src='/images/backgrounds/homescreen/mountains.png'/>
      <img className="slide5" src='/images/backgrounds/homescreen/plains.png'/>
      <img className="slide6" src='/images/backgrounds/homescreen/jungle.png'/>
    </div>
  )
}

export default HomeBackground
