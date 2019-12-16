import React from "react"
import "./FeaturedArticles.css"
import { Link } from "gatsby"

const FeaturedArticles = props => {
  // const linkOne = "/" + props.readmore
  // const linkTwo = "/" + props.readmore
  // const linkThree = "/" + props.readmore
  const urlOne =
    "url('" +
    props.posts[0].featured_media.source_url +
    "') no-repeat center center/cover"
  const urlTwo =
    "url('" +
    props.posts[1].featured_media.source_url +
    "') no-repeat center center/cover"
  const urlThree =
    "url('" +
    props.posts[2].featured_media.source_url +
    "') no-repeat center center/cover"
  const linkOne = "/" + props.posts[0].slug
  const linkTwo = "/" + props.posts[1].slug
  const linkThree = "/" + props.posts[2].slug

  return (
    <div className="main-container-two">
      <div className="three main-container-two-content">
        <div className="upper upper-one" style={{ background: urlOne }}></div>
        <div className="middle">
          <div className="middle-content">
            <h3 dangerouslySetInnerHTML={{ __html: props.posts[0].title }} />
            <p dangerouslySetInnerHTML={{ __html: props.posts[0].excerpt }} />
            <Link className="read-more-button" to={linkOne}>
              Read More...
            </Link>
          </div>
        </div>
        <div className="lower"></div>
      </div>
      <div className="four main-container-two-content">
        <div className="upper upper-two" style={{ background: urlTwo }}></div>
        <div className="middle">
          <div className="middle-content">
            <h3 dangerouslySetInnerHTML={{ __html: props.posts[1].title }} />
            <p dangerouslySetInnerHTML={{ __html: props.posts[1].excerpt }} />
            <Link className="read-more-button" to={linkTwo}>
              Read More...
            </Link>
          </div>
        </div>
        <div className="lower"></div>
      </div>
      <div className="five main-container-two-content">
        <div
          className="upper upper-three"
          style={{ background: urlThree }}
        ></div>
        <div className="middle">
          <div className="middle-content">
            <h3 dangerouslySetInnerHTML={{ __html: props.posts[2].title }} />
            <p dangerouslySetInnerHTML={{ __html: props.posts[2].excerpt }} />
            <Link className="read-more-button" to={linkThree}>
              Read More...
            </Link>
          </div>
        </div>
        <div className="lower"></div>
      </div>
    </div>
  )
}

export default FeaturedArticles
