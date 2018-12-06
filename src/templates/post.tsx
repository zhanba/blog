import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts'
import { Query } from '../typings/types'

export default ({ data }: { data: Query }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post!.frontmatter!.title}</title>
      </Helmet>
      <div>
        <h1>{post!.frontmatter!.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post!.html! }} />
      </div>
      <div
        style={{
          backgroundColor: '#e6e3db',
          border: '2px solid #d21a1a',
          borderRadius: '5px',
          padding: '3px',
        }}
      >
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          style={{ textDecoration: 'none', textShadow: `none`, backgroundImage: `none` }}
        >
          本文章均采用Creative Commons BY-NC-ND 4.0（自由转载-保持署名-非商用-禁止演绎）协议发布。
        </a>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
