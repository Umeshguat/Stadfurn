import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <img src="/logo.png" alt="STADFURN" className="footer-logo" />
        <p className="footer-text">
          &copy; {new Date().getFullYear()} STADFURN. All rights reserved. | Precision in Every Structure
        </p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
