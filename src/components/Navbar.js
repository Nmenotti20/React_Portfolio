import React from 'react';
import './assets/styles/style.css';
import './assets/styles/styles2.css';
import Profile from '';

function Navbar() {
    function findPos(obj) {
        var curtop = 0;
        if (obj.offsetParent) {
            do {
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
        return [curtop];
        }
    }

    function scrollSmooth(spot) {
        window.scrollTo({
            top: findPos(document.getElementById(spot)),
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand" href="./index.html">Nick Menotti</a>
        <div class="navbar-nav ml-auto">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="portfolio.html">Portfolio <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </nav>
    )
}

export default Navbar;