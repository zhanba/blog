import { graphql, Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts'
import { Query } from '../typings/types'
import { rhythm } from '../utils/typography'

export default ({ data }: { data: Query }) => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data!.site!.siteMetadata!.siteName}</title>
      </Helmet>
      <div>
        {data!.allMarkdownRemark!.edges!.map(({ node }) => (
          <div key={node!.id}>
            <Link to={node!.fields!.slug!} style={{ color: 'inherit', textDecoration: 'none' }}>
              <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                {node!.frontmatter!.title} <span style={{ color: '#bbb' }}>— {node!.frontmatter!.date}</span>
              </h3>
              <p>{node!.excerpt}</p>
            </Link>
          </div>
        ))}
        <h4>{data!.allMarkdownRemark!.totalCount} Posts</h4>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
