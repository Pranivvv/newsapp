import React, { Component } from 'react'

export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={this.props.mode}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">StarNews</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">business</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">entertainment</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">general</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">health</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">science</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">sports</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">technology</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className={`btn btn-outline-${this.props.mode==='light'?'dark':'light'}`} type="button" onClick={this.props.changeMode} >Toggle to {this.props.mode==='light' ? 'Light' : 'dark'} Mode</button>
                </form>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
