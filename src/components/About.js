import React from 'react';
// import Resume from ''

function About() {
    return (
        // RESPONSIVE CONTAINER FOR CARD & TEXT
        <div className="row align-items-center">
          <div className="container">
      
            <div className="col">
      
              {/* <!--ABOUT ME HEADER--> */}
              <h1>About Me</h1>
      
      
              {/* <!--BOOTSTRAP CARD--> */}
              <div className="card text-center" style={{ width: "25rem" }}>
                <img src="./assets/NickMenotti_Headshot.jpg" className="card-img-top" alt="Nick Menotti"></img>
      
                <div className="card-body">
                  <h5 className="card-title"><br></br>Nick Menotti</h5>
                  San Diego, CA<br></br>
                  M: 760.443.0056<br></br>
                  Email: nmenotti@cox.net
      
                  <p className="card-text">
                    Passionate leader, and team player experienced in contract managed services operations management, eager
                    to apply newly acquired skills as a full-stack web developer for a growing organization.<br></br>Currently
                    studying Front-end and back-end technologies, including HTML5, CSS3, JavaScript, jQuery, Express.js,
                    React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB,
                    MySQL, and Git.</p>
      
                  <a href="https://www.linkedin.com/in/nick-m-b3490299?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdS%2Bff21SQxufztOA8CNMJg%3D%3D"
                    className="btn btn-primary">Click to find me on LinkedIn</a><br></br>
      
                  <a href="./assets/Nick Menotti - Resume - Full Stack Web Developer - 11.21.2020.pdf"
                    className="btn btn-primary">Click to view my Resume.</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default About;