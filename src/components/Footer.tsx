import React from 'react'
import './footer.css'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-content">©{year} ryannz</div>
    </footer>
  )
}
