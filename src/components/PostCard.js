import React from "react"
import "./PostCard.css"
import { Link } from "gatsby"

const PostCard = props => {
  const link = "/" + props.readmore
  const url = "url('" + props.image + "') no-repeat center center/cover"
  const cardClass = "card " + props.extraClass

  return (
    <div className={cardClass}>
      <Link style={{ background: url }} className="card-left" to={link}>
        <img src={props.image} alt={props.image} />
      </Link>
      <div className="card-right">
        <div className="card-right-content">
          <h3 dangerouslySetInnerHTML={{ __html: props.title }} />
          <p
            className="excerpt"
            dangerouslySetInnerHTML={{ __html: props.excerpt }}
          />
          <Link className="read-more-button" to={link}>
            Read More...
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard
