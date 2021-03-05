import React from 'react';
import './assets/styles/style.css';
import './assets/styles/styles2.css';
// import Resume from ''

function About() {
    return (
        // RESPONSIVE CONTAINER FOR CARD & TEXT
        <div class="row align-items-center">
          <div class="container">
      
            <div class="col">
      
              {/* <!--ABOUT ME HEADER--> */}
              <h1>About Me</h1>
      
      
              {/* <!--BOOTSTRAP CARD--> */}
              <div class="card text-center" style="width: 25rem;">
                <img src="./assets/NickMenotti_Headshot.jpg" class="card-img-top" alt="A headshot photo of Nick Menotti">
      
                <div class="card-body">
                  <h5 class="card-title"><br>Nick Menotti</h5>
                  San Diego, CA<br>
                  M: 760.443.0056<br>
                  Email: nmenotti@cox.net
      
                  <p class="card-text">
                    Passionate leader, and team player experienced in contract managed services operations management, eager
                    to apply newly acquired skills as a full-stack web developer for a growing organization.<br><br>Currently
                    studying Front-end and back-end technologies, including HTML5, CSS3, JavaScript, jQuery, Express.js,
                    React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB,
                    MySQL, and Git.</p>
      
                  <a href="https://www.linkedin.com/in/nick-m-b3490299?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdS%2Bff21SQxufztOA8CNMJg%3D%3D"
                    class="btn btn-primary">Click to find me on LinkedIn</a><br><br>
      
                  <a href="./assets/Nick Menotti - Resume - Full Stack Web Developer - 11.21.2020.pdf"
                    class="btn btn-primary">Click to view my Resume.</a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default About;