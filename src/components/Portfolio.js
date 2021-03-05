import React from 'react';
import './assets/styles/style.css';
import './assets/styles/styles2.css';
import StriveRite from '';
import Outdoorsy from '';
import EmployeeManagement from '';
import EmployeeDirectory from '';

function Portfolio() {
    return (
        <div class="row align-items-center">
            <div class="container">
        
                {/* <!--FIRST ROW--> */}
                <div class="row">
                    <div class="col-sm-6">
                    </div>
                </div>
        
                {/* <!--HEADER--> */}
                <h1>Portfolio</h1>
        
        
                {/* <!--Bootstrap Card-group--> */}
                <div class="card-deck">
                    {/* <!--PASSWORD GENERATOR HW CARD --> */}
                    <div class="card">
                    <img src="./assets/Password_Generator_demo.jpg" class="card-img-top"
                        alt="A photo demonstrating my 'Password Generator' project">
                    <div class="card-body">
                        <h5 class="card-title">Password Generator Project</h5>
                        <p class="card-text">My Password Generator project uses JavaScript to generate a random password.</p>
                    </div>
                    <div class="card-footer">
                        <!--Button for link to my GitHub Profile-->
                        <a href="https://github.com/Nmenotti20/password_generator.git" class="btn btn-primary">Click to view my Password Generator project on GitHub.</a>
                        <br><br>
                        <!--Button for link to my live deployed URL-->
                        <a href="https://nmenotti20.github.io/password_generator" class="btn btn-primary">Click to go to the Password Generator project live deployed URL.</a>
                    </div>
                    </div>
            
                    {/* <!--OUTDoorsy Project CARD --> */}
                    <div class="card">
                    <img src="./assets/OUTDoorsy_site_example_top.jpg" class="card-img-top"
                        alt="A photo demonstrating my 'OUTDoorsy' group project">
                    <div class="card-body">
                        <h5 class="card-title">OUTDoorsy Project</h5>
                        <p class="card-text">My OUTDoorsy project aims to link in third party APIs to find local hiking trails, as searched by city name, along with local weather, and map to the trailhead while saving the cities searched to local storage and maintaining a list of historical searches.</p>
                    </div>
                    <div class="card-footer">
                        <!--Button for link to my GitHub Profile-->
                        <a href="https://github.com/Jruuuu/OUTDoorsy.git" class="btn btn-primary">Click to view my OUTDoorsy group project on GitHub.</a>
                        <br><br>
                        <!--Button for link to my live deployed URL-->
                        <a href="https://jruuuu.github.io/OUTDoorsy" class="btn btn-primary">Click to go to the OUTDoorsy project live deployed URL.</a>
                    </div>
                    </div>
            
                    {/* <!-- Code Refactor HW Card--> */}
                    <div class="card">
                    <img src="./assets/Code_Refactor_demo.jpg" class="card-img-top"
                        alt="A photo demonstating my 'Code Refactor' project">
                    <div class="card-body">
                        <h5 class="card-title">Code Refactor Project</h5>
                        <p class="card-text">The goal of my Code Refactor project was to refactor a code for a client to be able to make the website accessible.</p>
                    </div>
                    <div class="card-footer">
                        <a href="https://github.com/Nmenotti20/01-HTML-CSS-Git-Code-Refactor.git" class="btn btn-primary">Click to view my Code Refactor project on GitHub.</a>
                        <br><br>
                        <!--Button for link to my live deployed URL-->
                        <a href="https://nmenotti20.github.io/01-HTML-CSS-Git-Code-Refactor" class="btn btn-primary">Click to go to the Code Refactor project live deployed URL.</a>
                    </div>
                    </div>
            
                    {/* <!-- Fur-Ever Home Project Card --> */}
                    <div class="card">
                    <img src="./assets/Fur-Ever Home_demo.jpg" class="card-img-top"
                        alt="A photo demonstrating my 'Fur-Ever Home' group project">
                    <div class="card-body">
                        <h5 class="card-title">Fur-Ever Home group Project</h5>
                        <p class="card-text">My Fur-Ever Home group project uses node.js and express-handlebars along with MySQL linked in with the PetFinder API to provide a platform for users looking to adopt a pet to find one by searching in their postal code area. This search will return the type of pet they select from the drop-down menu in the area they search. The user may also post a pet to the site for adoption by other users. The app is deployed in Heroku.</p>
                    </div>
                    <div class="card-footer">
                        <!--Button for link to my GitHub Profile-->
                        <a href="https://github.com/TJH1992/Project-2.git" class="btn btn-primary">Click to view my Fur-Ever Home group project on GitHub.</a>
                        <br><br>
                        <!--Button for link to my live deployed URL-->
                        <a href="https://oursuperduperawesomeproject2.herokuapp.com" class="btn btn-primary">Click to go to the Fur-Ever Home project live deployed URL.</a>
                    </div>
                    </div>
            
                    <div class="card">
                    <img src="./assets/Employee_MS_demo.gif" class="card-img-top"
                        alt="A photo demonstrating my 'Employee_MS' project">
                    <div class="card-body">
                        <h5 class="card-title">Employee_MS Project</h5>
                        <p class="card-text">In my Employee_MS project I built a command line application that a small buisinass owner might use to manage their staffing levels. Using the command line, a user is able to view and add departments, roles, and employees as well as edit an existing employee role. This project is not deployed, and must be run in the terminal.</p>
                    </div>
                    <div class="card-footer">
                        {/* <!--Button for link to my GitHub Profile--> */}
                        <a href="https://github.com/Nmenotti20/Employee_MS" class="btn btn-primary">Click to view my Employee_MS project on GitHub.</a>
                        <br><br>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;