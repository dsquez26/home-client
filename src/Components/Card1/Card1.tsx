import "./Card1.css"

interface CardProps {
  icon?: string,                
  content: string
}

const Card1 = ({icon, content}: CardProps) => {
  
  return (
    <div className="card-1">
      <div className="card-icon-1">{icon}</div>
      <div className="card-content-1">{content}</div>
    </div>
  )
}

export default Card1
