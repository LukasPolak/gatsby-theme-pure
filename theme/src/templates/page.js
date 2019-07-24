import React from "react"
import { Styled } from "theme-ui"
import Layout from "../components/layout"

const PageTemplate = ({ pageContext }) => (
  <Layout>
    {pageContext.articles.map(article => (
      <React.Fragment key={article.heading}>
        <Styled.h1>{article.heading}</Styled.h1>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        <a href="https://gatsby-theme-pure.netlify.com/">Read more</a>
        <hr />
      </React.Fragment>
    ))}
  </Layout>
)

export default PageTemplate
