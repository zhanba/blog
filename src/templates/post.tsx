import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../layouts'
import { Query } from '../typings/types'

export default ({ data }: { data: Query }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>本文章均采用Creative Commons BY-NC-ND 4.0（自由转载-保持署名-非商用-禁止演绎）协议发布。</div>
      <div>
        <h1>{post!.frontmatter!.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post!.html! }} />
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
