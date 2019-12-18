import React, { useState } from "react"
import fetch from "isomorphic-fetch"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./BlogpostLayout.css"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import Comments from "../components/Comments"
import CommentForm from "../components/CommentForm"
import { graphql } from "gatsby"
import innertext from "innertext"

const BlogpostLayout = ({ data }) => {
  const post = data.wordpressPost
  console.log(data.wordpressPost.slug)
  console.log(data.wordpressPost.wordpress_id)
  const currPostId = data.wordpressPost.wordpress_id

  const client = new ApolloClient({
    fetch,
    uri: "https://thebloggiblog.com/graphql",
  })

  const [displayState, setDisplayState] = useState("none")

  const caption = innertext(post.featured_media.caption)

  return (
    <ApolloProvider client={client}>
      <div style={{ background: "#f4f4f4" }}>
        <Navbar />
        <div className="large-container">
          <div className="container">
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <img
              className="post-image"
              src={post.featured_media.source_url}
              alt={post.featured_media.source_url}
            />
            <div
              className="caption"
              dangerouslySetInnerHTML={{ __html: caption }}
            />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <br />
            <hr />
            <h3 style={{ marginTop: "1rem" }}>Comments</h3>
            <Comments postId={currPostId} />
            <div style={{ display: displayState }} className="success-message">
              <p>Your comment has been successfully submitted.</p>
            </div>
            <br />
            <hr />
            <br />
            <h3>Let us know what you think about the article!</h3>
            <CommentForm
              postId={currPostId}
              setDisplayState={setDisplayState}
            />
          </div>
          <Footer />
        </div>
      </div>
    </ApolloProvider>
  )
}

export default BlogpostLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      slug
      content
      title
      categories {
        name
      }
      featured_media {
        source_url
        caption
      }
      excerpt
      wordpress_id
    }
  }
`
