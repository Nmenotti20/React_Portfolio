import React from 'react';

function Navbar() {
    // function findPos(obj) {
    //     var curtop = 0;
    //     if (obj.offsetParent) {
    //         do {
    //             curtop += obj.offsetTop;
    //         } while (obj = obj.offsetParent);
    //     return [curtop];
    //     }
    // }

    // function scrollSmooth(spot) {
    //     window.scrollTo({
    //         top: findPos(document.getElementById(spot)),
    //         left: 0,
    //         behavior: 'smooth'
    //     })
    // }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="./index.html">Nick Menotti</a>
        <div className="navbar-nav ml-auto">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="portfolio.html">Portfolio <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;