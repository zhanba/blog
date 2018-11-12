import * as React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import '../style/global.css'
import { rhythm } from '../utils/typography'

const MainLayout: React.SFC = ({ children }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: '100vw',
    }}
  >
    <Header />
    <div style={{ margin: `0 auto`, maxWidth: '800px', padding: '0 1rem' }}>{children}</div>
    <Footer />
  </div>
)

export default MainLayout
