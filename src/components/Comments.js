import React from "react"
// import ApolloClient from "apollo-boost"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import "./Comments.css"

const Comments = props => {
  const postId = props.postId

  const commentQuery = gql`
    query($postId: Int) {
      posts(where: { id: $postId }) {
        edges {
          node {
            title
            id
            postId
            comments {
              edges {
                node {
                  id
                  content
                  date
                }
              }
            }
          }
        }
      }
    }
  `

  return (
    <Query query={commentQuery} variables={{ postId }}>
      {({ loading, error, data }) => {
        if (loading) return <h3>Loading comments...</h3>
        if (error) return <h3>Error loading comments...</h3>

        if (data.posts.edges[0].node.comments.edges.length < 1)
          return <h3>No comments yet.</h3>

        console.log(data)
        return (
          <div className="comment-list">
            {data.posts.edges[0].node.comments.edges.map(commentNode => {
              console.log(commentNode)
              return (
                <div className="comments" key={commentNode.node.id}>
                  <div
                    className="comments-date"
                    dangerouslySetInnerHTML={{
                      __html: commentNode.node.date,
                    }}
                  />
                  <div
                    className="comments-content"
                    dangerouslySetInnerHTML={{
                      __html: commentNode.node.content,
                    }}
                  />
                </div>
              )
            })}
          </div>
        )
      }}
    </Query>
  )
}

export default Comments
