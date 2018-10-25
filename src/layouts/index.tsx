import * as React from 'react'

import { Header } from '../components/Header'
import { rhythm } from '../utils/typography'

const MainLayout: React.SFC = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      marginBottom: rhythm(1.5),
      marginTop: rhythm(1.5),
      maxWidth: 800,
      paddingLeft: rhythm(3 / 4),
      paddingRight: rhythm(3 / 4),
    }}
  >
    <Header />
    {children}
  </div>
)

export default MainLayout
