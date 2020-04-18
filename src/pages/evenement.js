import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Evenement = () => (
  <Layout>
    <SEO title="Evénement" />
    <h1>Hi from the événement</h1>
    <p>Welcome to événement</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Evenement
