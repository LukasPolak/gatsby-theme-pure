import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Header, Main, Container } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"

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
  )
}

export default Layout
