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
  data.allWordpressPost.nodes.sort((a, b) => (a.date < b.date ? 1 : -1))

  const frontArticles = data.allWordpressPost.nodes.filter(
    node => node.categories[0].name === "frontpage"
  )
  const nonFront = data.allWordpressPost.nodes.filter(
    node => node.categories[0].name !== "frontpage"
  )
  const featured = data.allWordpressPost.nodes.filter(
    node => node.categories[0].name === "frontfeature"
  )
  const listed = data.allWordpressPost.nodes.filter(
    node => node.categories[0].name === "listed"
  )
  const listedTwo = data.allWordpressPost.nodes.filter(
    node => node.categories[0].name === "listedtwo"
  )
  //   const featured = data.allWordpressPost.nodes.slice(0, 3)
  //   const dataLength = data.allWordpressPost.nodes.slice(0).length - 1
  const dataLength = listed.length - 1
  console.log(dataLength)
  const largeArticles = data.allWordpressPost.nodes.filter(
    node => node.categories[0].name === "large"
  )

  console.log(innertext(frontArticles[0].excerpt))
  console.log(frontArticles[0].excerpt)

  return (
    <PrimaryLayout>
      <NewMainPost post={frontArticles[0]} />
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
                key={node.id}
                title={node.title}
                image={node.featured_media.source_url}
                excerpt={innertext(node.excerpt)}
                readmore={node.slug}
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
      <LargeArticle post={largeArticles[1]} />
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
                key={node.id}
                title={node.title}
                image={node.featured_media.source_url}
                excerpt={innertext(node.excerpt)}
                readmore={node.slug}
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
      <LargeArticle post={largeArticles[0]} />
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        title
        slug
        featured_media {
          source_url
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
`
