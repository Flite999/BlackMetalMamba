import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, withArtDirection } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (


  <Layout>
    <Seo title="Home" />
    <h2>Journals / CS / Music / Fitness</h2>

    {/* Map function for blog posts here... */}

    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </Layout >
)






export default IndexPage

