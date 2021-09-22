import { CardProps1 } from "../../shared/interfaces"

import "./Card1.css"


const Card1 = ({icon, content}: CardProps1) => {
  
  return (
    <div className="card-1">
      <div className="card-icon-1">{icon}</div>
      <div className="card-content-1">{content}</div>
    </div>
  )
}

export default Card1
