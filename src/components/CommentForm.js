import React, { useState } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import "./CommentForm.css"

const commentSubmitQuery = gql`
  mutation(
    $author: String
    $commentOn: Int
    $content: String
    $authorEmail: String
  ) {
    createComment(
      input: {
        clientMutationId: "CreateComment"
        author: $author
        commentOn: $commentOn
        content: $content
        authorEmail: $authorEmail
      }
    ) {
      success
    }
  }
`

const CommentForm = props => {
  const [state, setState] = useState({
    commentStatus: false,
    post: props.postId,
    comment: "",
    author: "",
    email: "",
    url: "",
  })

  const handleInputChange = event => {
    const target = event.target
    const value = event.type === "checkbox" ? target.checked : target.value
    const name = target.name

    setState({
      ...state,
      [name]: value,
    })
  }

  const renderCommentForm = () => {
    return (
      <Mutation
        mutation={commentSubmitQuery}
        onCompleted={() => {
          setState({
            ...state,
            commentStatus: "success",
          })
        }}
        onError={() => {
          setState({
            ...state,
            commentStatus: "error",
          })
        }}
      >
        {addComment => (
          <form
            className="comment-form"
            onSubmit={event => {
              event.preventDefault()
              setState({
                ...state,
                commentStatus: "loading",
              })
              addComment({
                variables: {
                  author: state.author,
                  commentOn: state.post,
                  content: state.comment,
                  authorEmail: state.email,
                },
              })
            }}
          >
            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea
                name="comment"
                value={state.comment}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Name*</label>
              <input
                name="author"
                value={state.author}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                name="email"
                value={state.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Your Website (optional)</label>
              <input
                name="url"
                value={state.url}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className="btn"
                name="submit"
                type="submit"
                value="Post Comment"
              />
            </div>
          </form>
        )}
      </Mutation>
    )
  }

  // On submission
  const submitted = () => {
    setState({
      commentStatus: false,
      post: props.postId,
      comment: "",
      author: "",
      email: "",
      url: "",
    })
    props.setDisplayState("block")
    setTimeout(() => {
      props.setDisplayState("none")
    }, 3000)
  }

  switch (state.commentStatus) {
    case "success":
      //   return "Your comment has been successfully submitted."
      return submitted()
    case "loading":
      return "Please wait. Your comment is being submitted"
    case "error":
      return "There was an error in your submission. Please try again later."
    default:
      return renderCommentForm()
  }
}

export default CommentForm
