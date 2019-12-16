import React from "react"
import "./NewMainPost.css"
import { Link } from "gatsby"

const NewMainPost = props => {
  const background =
    "url('" +
    props.post.featured_media.source_url +
    "') no-repeat center center/cover"
  const link = "/" + props.post.slug

  return (
    <div className="main-container-one">
      <div className="mobile-main">
        <h1
          className="main-title"
          dangerouslySetInnerHTML={{ __html: props.post.title }}
        />
        <div
          className="lead"
          dangerouslySetInnerHTML={{ __html: props.post.excerpt }}
        />
        <Link className="main-article-link" to={link}>
          Read More...
        </Link>
        <div
          className="mobile-main-image"
          style={{ background: background }}
        ></div>
      </div>
      <div className="one" style={{ background: background }}></div>
      <div className="two">
        <div className="two-content">
          <h1
            className="main-title"
            dangerouslySetInnerHTML={{ __html: props.post.title }}
          />
          <p
            className="lead"
            dangerouslySetInnerHTML={{ __html: props.post.excerpt }}
          />
          <Link className="main-article-link" to={link}>
            Read More...
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewMainPost
