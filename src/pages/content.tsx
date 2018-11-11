import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts'
import { Query } from '../typings/types'

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
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
          <h1>My Site's Files</h1>
          <table>
            <thead>
              <tr>
                <th>relativePath</th>
                <th>prettySize</th>
                <th>extension</th>
                <th>birthTime</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile &&
                data!.allFile!.edges!.map(({ node }, index) => (
                  <tr key={index}>
                    <td>{node!.relativePath}</td>
                    <td>{node!.prettySize}</td>
                    <td>{node!.extension}</td>
                    <td>{node!.birthTime}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Layout>
    )
  }
}
