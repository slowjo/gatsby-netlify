import React from "react"
import "./FeaturedArticles.css"
import { Link } from "gatsby"
import innertext from "innertext"

const FeaturedArticles = props => {
  // const linkOne = "/" + props.readmore
  // const linkTwo = "/" + props.readmore
  // const linkThree = "/" + props.readmore
  const urlOne =
    "url('" +
    props.posts[0].node.featured_media.source_url +
    "') no-repeat center center/cover"
  const urlTwo =
    "url('" +
    props.posts[1].node.featured_media.source_url +
    "') no-repeat center center/cover"
  const urlThree =
    "url('" +
    props.posts[2].node.featured_media.source_url +
    "') no-repeat center center/cover"
  const linkOne = "/" + props.posts[0].node.slug
  const linkTwo = "/" + props.posts[1].node.slug
  const linkThree = "/" + props.posts[2].node.slug

  const textOne = innertext(props.posts[0].node.excerpt)
  const textTwo = innertext(props.posts[1].node.excerpt)
  const textThree = innertext(props.posts[2].node.excerpt)

  return (
    <div className="main-container-two">
      <div className="three main-container-two-content">
        <div className="upper upper-one" style={{ background: urlOne }}></div>
        <div className="middle">
          <div className="middle-content">
            <h3
              dangerouslySetInnerHTML={{ __html: props.posts[0].node.title }}
            />
            <p dangerouslySetInnerHTML={{ __html: textOne }} />
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
            <h3
              dangerouslySetInnerHTML={{ __html: props.posts[1].node.title }}
            />
            <p dangerouslySetInnerHTML={{ __html: textTwo }} />
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
            <h3
              dangerouslySetInnerHTML={{ __html: props.posts[2].node.title }}
            />
            <p dangerouslySetInnerHTML={{ __html: textThree }} />
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
