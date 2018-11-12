import { graphql, Link, StaticQuery } from 'gatsby'
import React from 'react'
import { Query } from '../typings/types'
import './header.css'

interface ILink {
  to: string
  children: React.ReactChild
}

const ListLink = (props: ILink) => (
  <li className="header-menu">
    <Link className="header-menu-link" to={props.to}>
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
    // tslint:disable-next-line:jsx-no-lambda
    render={(data: Query) => (
      <header className="header">
        <div className="header-content">
          {data && (
            <Link to="/" className="title-link">
              <h3 className="title">{data!.site!.siteMetadata!.siteName}</h3>
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
