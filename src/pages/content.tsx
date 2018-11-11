import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts'
import { Query } from '../typings/types'

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

export interface IContentProps {
  data: Query
}

export default class Content extends React.Component<IContentProps, any> {
  public render() {
    const { data } = this.props
    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Content</title>
        </Helmet>
        <div>
          <table>
            <thead>
              <tr>
                <th>title</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {data.allMarkdownRemark &&
                data!.allMarkdownRemark!.edges!.map(({ node }, index) => (
                  <tr key={index}>
                    <td>{node!.frontmatter!.title}</td>
                    <td>{node!.frontmatter!.date}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Layout>
    )
  }
}
