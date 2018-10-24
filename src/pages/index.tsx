import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../layouts'
import { Query } from '../typings/types'
import { rhythm } from '../utils/typography'

export default ({ data }: { data: Query }) => {
  return (
    <Layout>
      <div>
        {/* <h1
          style={{
            borderBottom: '1px solid',
            display: 'inline-block',
          }}
        >
          Amazing Pandas Eating Things
        </h1> */}
        {data!.allMarkdownRemark!.edges!.map(({ node }) => (
          <div key={node!.id}>
            <Link
              to={node!.fields!.slug!}
              style={{
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {node!.frontmatter!.title}{' '}
                <span
                  style={{
                    color: '#bbb',
                  }}
                >
                  — {node!.frontmatter!.date}
                </span>
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
