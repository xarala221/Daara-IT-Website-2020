import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Forum = () => (
  <Layout>
    <SEO title="Forum" />
    <h1>Hi from the forum</h1>
    <p>Welcome to forum</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Forum
