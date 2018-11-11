import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'
import { Query } from '../typings/types'

interface ILink {
  to: string
  children: React.ReactChild
}

const ListLink = (props: ILink) => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, lineHeight: '40px' }}>
    <Link style={{ textDecoration: 'none', color: '#fff', textShadow: `none`, backgroundImage: `none` }} to={props.to}>
      {props.children}
    </Link>
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
    render={(data: Query) => (
      <header
        style={
          { marginBottom: `1.5rem`, backgroundColor: '#20232a', height: '40px' } // tslint:disable-next-line:jsx-no-lambda
        }
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {data && (
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
              <h3 style={{ display: `inline`, color: '#fff', lineHeight: '40px' }}>
                {data!.site!.siteMetadata!.siteName}
              </h3>
            </Link>
          )}
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/content/">Content</ListLink>
            <ListLink to="/about/">About</ListLink>
          </ul>
        </div>
      </header>
    )}
  />
)
