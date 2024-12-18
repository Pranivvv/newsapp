import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={this.props.mode}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">StarNews</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">general</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">technology</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className={`btn btn-outline-${this.props.mode === 'light' ? 'dark' : 'light'}`} type="button" onClick={this.props.changeMode} >Toggle to {this.props.mode === 'light' ? 'Light' : 'dark'} Mode</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
