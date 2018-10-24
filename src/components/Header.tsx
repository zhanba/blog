import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'
import { Query } from '../typings/types'

interface ILink {
  to: string
  children: React.ReactChild
}

const ListLink = (props: ILink) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`

export const Header = () => (
  <StaticQuery
    query={query}
    // tslint:disable-next-line:jsx-no-lambda
    render={(data: Query) => (
      <header style={{ marginBottom: `1.5rem` }}>
        {data && (
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>{data!.site!.siteMetadata!.siteName}</h3>
          </Link>
        )}
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/content/">Content</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul>
      </header>
    )}
  />
)
