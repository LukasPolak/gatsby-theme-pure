import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Header, Main, Container } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          navigationLinks {
            text
            href
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Helmet
        meta={[
          { name: "description", content: "Pure theme for GatsbyJS" },
          { name: "keywords", content: "gatsby, gatsby-theme, gatsby-plugin, pure"},
        ]}
      >
        <meta charSet="utf-8" />
        <title>Pure | Gatsby theme</title>
        <html lang="en" />
      </Helmet>
      <StyledLayout>
        <Global
          styles={css`
            body {
              margin: 0;
            }
          `}
        />
        <Header>
          <span>{data.site.siteMetadata.title}</span>
        </Header>
        <Main>
          <nav>
            <ul>
              {data.site.siteMetadata.navigationLinks.map(link => (
                <li key={link.text}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </nav>
          <Container>{children}</Container>
        </Main>
      </StyledLayout>
    </React.Fragment>
  )
}

export default Layout
