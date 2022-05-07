import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
        <p>Dera &copy; {currentYear}</p>
    </footer>
  )
}

export default Footer
