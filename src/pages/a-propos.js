import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Apropos = () => (
  <Layout>
    <SEO title="A Propos" />
    <h1>Hi from the a propos</h1>
    <p>Welcome to a propos</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Apropos
