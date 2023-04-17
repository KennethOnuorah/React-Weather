import "./Background.css"

const Background = () => {
  return (
    <div 
      className="background" 
      draggable={"false"}
    >
      <img className="slide1" src='/images/backgrounds/homescreen/forest.png'/>
      <img className="slide2" src='/images/backgrounds/homescreen/desert.png'/>
      <img className="slide3" src='/images/backgrounds/homescreen/lake.png'/>
      <img className="slide4" src='/images/backgrounds/homescreen/mountains.png'/>
      <img className="slide5" src='/images/backgrounds/homescreen/plains.png'/>
      <img className="slide6" src='/images/backgrounds/homescreen/jungle.png' style={{
        filter: "brightness(0.6)"
      }}/>
    </div>
  )
}

export default Background
