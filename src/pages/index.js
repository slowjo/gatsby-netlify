import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import PostCard from "../components/PostCard"
// import MainPost from "../components/MainPost"
import NewMainPost from "../components/NewMainPost"
import FeaturedArticles from "../components/FeaturedArticles"
import LargeArticle from "../components/LargeArticle"
import innertext from "innertext"
import "./index.css"

export default ({ data }) => {
  const maintainance = true

  // data.allWordpressPost.nodes.sort((a, b) => (a.date < b.date ? 1 : -1))
  data.allWordpressPost.edges.sort((a, b) =>
    a.node.date < b.node.date ? 1 : -1
  )

  // const frontArticles = data.allWordpressPost.nodes.filter(
  //   node => node.categories[0].name === "frontpage"
  // )
  const frontArticles = data.allWordpressPost.edges.filter(
    edge => edge.node.categories[0].name === "frontpage"
  )

  // const nonFront = data.allWordpressPost.nodes.filter(
  //   node => node.categories[0].name !== "frontpage"
  // )
  const nonFront = data.allWordpressPost.edges.filter(
    edge => edge.node.categories[0].name !== "frontpage"
  )

  // const featured = data.allWordpressPost.nodes.filter(
  //   node => node.categories[0].name === "frontfeature"
  // )
  const featured = data.allWordpressPost.edges.filter(
    edge => edge.node.categories[0].name === "frontfeature"
  )

  // const listed = data.allWordpressPost.nodes.filter(
  //   node => node.categories[0].name === "listed"
  // )
  const listed = data.allWordpressPost.edges.filter(
    edge => edge.node.categories[0].name === "listed"
  )

  // const listedTwo = data.allWordpressPost.nodes.filter(
  //   node => node.categories[0].name === "listedtwo"
  // )
  const listedTwo = data.allWordpressPost.edges.filter(
    edge => edge.node.categories[0].name === "listedtwo"
  )

  //   const featured = data.allWordpressPost.nodes.slice(0, 3)
  //   const dataLength = data.allWordpressPost.nodes.slice(0).length - 1
  const dataLength = listed.length - 1
  console.log(dataLength)
  // const largeArticles = data.allWordpressPost.nodes.filter(
  //   node => node.categories[0].name === "large"
  // )
  const largeArticles = data.allWordpressPost.edges.filter(
    edge => edge.node.categories[0].name === "large"
  )

  // console.log(innertext(frontArticles[0].excerpt))
  console.log(innertext(frontArticles[0].node.excerpt))
  // console.log(frontArticles[0].excerpt)
  console.log(frontArticles[0].node.excerpt)

  if (maintainance) {
    return <h1>Sorry, nothing here right now</h1>
  }

  return (
    <PrimaryLayout>
      <NewMainPost post={frontArticles[0].node} />
      <FeaturedArticles posts={featured} />
      <div className="front-page-container">
        <div className="left-thing">
          {listed.map((node, index) => {
            let extraClass = ""
            if (index === 0) {
              extraClass = "first"
            }

            if (index === dataLength) {
              extraClass = "last"
            }

            return (
              <PostCard
                extraClass={extraClass}
                key={node.node.id}
                title={node.node.title}
                image={node.node.featured_media.source_url}
                excerpt={innertext(node.node.excerpt)}
                readmore={node.node.slug}
              />
            )
          })}
        </div>
        <div className="right-thing">
          <h3>Interesting</h3>
          <p>
            This is the place to add some more stuff on the side. Perspiciatis
            aut laudantium neque repellendus dolorem maiores voluptatibus sequi,
            atque ea unde illo est debitis, ipsum nihil, laborum asperiores
            quisquam eos magni. Quo rem sed exercitationem nesciunt nostrum sint
            voluptates doloremque repellat! Consequuntur quis, minima odio ea
            optio vero corporis excepturi ullam.
          </p>
        </div>
      </div>
      <LargeArticle post={largeArticles[1].node} />
      <div className="front-page-container">
        <div className="left-thing">
          {listedTwo.map((node, index) => {
            let extraClass = ""
            if (index === 0) {
              extraClass = "first"
            }

            if (index === dataLength) {
              extraClass = "last"
            }

            return (
              <PostCard
                extraClass={extraClass}
                key={node.node.id}
                title={node.node.title}
                image={node.node.featured_media.source_url}
                excerpt={innertext(node.node.excerpt)}
                readmore={node.node.slug}
              />
            )
          })}
        </div>
        <div className="right-thing">
          <h3>Interesting</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis aut laudantium neque repellendus dolorem maiores
            voluptatibus sequi, atque ea unde illo est debitis, ipsum nihil,
            laborum asperiores quisquam eos magni. Quo rem sed exercitationem
            nesciunt nostrum sint voluptates doloremque repellat! Consequuntur
            quis, minima odio ea optio vero corporis excepturi ullam.
          </p>
        </div>
      </div>
      <LargeArticle post={largeArticles[0].node} />
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      edges {
        node {
          title
          slug
          featured_media {
            source_url
            localFile {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          id
          date
          categories {
            name
          }
        }
      }
    }
  }
`
