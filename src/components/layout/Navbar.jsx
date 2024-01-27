import React from 'react'
import './layout.css'
import navImage from '../../assets/images/Group 1.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className='top-bar'>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M1.11146 5.56847C1.93424 8.77865 3.60468 11.7087 5.948 14.052C8.29131 16.3953 11.2214 18.0658 14.4315 18.8885C16.9015 19.5173 19 17.3934 19 14.8438V13.6902C19 13.0534 18.482 12.5423 17.8487 12.4788C16.7982 12.3753 15.7671 12.1272 14.7846 11.7417L13.031 13.4952C10.1758 12.1266 7.87342 9.8242 6.50478 6.969L8.25834 5.21545C7.87237 4.23293 7.62391 3.20183 7.52 2.15135C7.4577 1.51684 6.94663 1 6.30982 1H5.15616C2.60659 1 0.482715 3.09849 1.11146 5.56847Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg> +123 0000 000
        </p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10.0001 19.0043C11.9231 19.0043 13.4819 14.9759 13.4819 10.0065C13.4819 5.03722 11.9231 1.00879 10.0001 1.00879C8.07708 1.00879 6.51819 5.03722 6.51819 10.0065C6.51819 14.9759 8.07708 19.0043 10.0001 19.0043Z" stroke="white" stroke-width="1.125" />
          <path d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z" stroke="white" stroke-width="1.125" />
          <path d="M1 9.99463L19 10.0059" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
        </svg>United States - EN</p>
      </div>
      <nav className="navbar p-4  navbar-expand-lg" data-bs-theme="dark" >
        <div className="container">
          <Link className="navbar-brand" to="/"> <img src={navImage} alt="luts jesco" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle active " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product & Services
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle active " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Support
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle active " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Learn
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle active " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Contact  </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <a className="nav-btn btn border-light rounded-0 text-light btn-outline-lg" type="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="white" />
                <path d="M17 16.5C17 18.985 17 21 9 21C1 21 1 18.985 1 16.5C1 14.015 4.582 12 9 12C13.418 12 17 14.015 17 16.5Z" stroke="white" />
              </svg>
                Sign In</a>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar