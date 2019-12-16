import React from "react"
import "./LargeArticle.css"
import { Link } from "gatsby"
import innertext from "innertext"

const LargeArticle = props => {
  const background =
    "url('" +
    props.post.featured_media.source_url +
    "') no-repeat center center/cover"
  const link = "/" + props.post.slug
  const text = innertext(props.post.excerpt)

  return (
    <div className="main-container-one">
      <div className="mobile-main">
        <h2
          className="main-title"
          dangerouslySetInnerHTML={{ __html: props.post.title }}
        />
        <p className="lead" dangerouslySetInnerHTML={{ __html: text }} />
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
          <h2
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

export default LargeArticle
