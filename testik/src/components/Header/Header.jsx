  'use client'; 
  import './Header.css'
  export const Header = () => {


    return (
      <>
      
      <header className="header">
      <div className="header-container">
        <a href="/lessons1" className="logo-link">
          <img width='125px' alt="" src="public/logo.webp" />
        </a>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link"> TG</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link"> VK</a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">YouTube</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
    )
  }