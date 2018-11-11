import * as React from 'react'

import { Header } from '../components/Header'
import { rhythm } from '../utils/typography'

const MainLayout: React.SFC = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      marginBottom: rhythm(1.5),
      marginTop: rhythm(0),
      maxWidth: '100vw',
    }}
  >
    <Header />
    <div style={{ margin: `0 auto`, maxWidth: '800px' }}>{children}</div>
  </div>
)

export default MainLayout
