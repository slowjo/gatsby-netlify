import React from "react"
import "./MainPost.css"
import { Link } from "gatsby"

const MainPost = props => {
  console.log(props.post)
  const url = "url('" + props.post.featured_media.source_url + "')"
  const link = "/" + props.post.slug
  //   console.log(url)
  return (
    <div
      style={{ backgroundImage: url, backgroundRepeat: "no-repeat" }}
      className="main-post"
    >
      <Link to={link} className="main-post-content">
        <h1 dangerouslySetInnerHTML={{ __html: props.post.title }} />
        <p dangerouslySetInnerHTML={{ __html: props.post.excerpt }} />
        <p className="look-like-link">Read More...</p>
      </Link>
    </div>
  )
}

export default MainPost
