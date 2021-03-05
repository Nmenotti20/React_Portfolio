import React from 'react';
import './assets/styles/style.css';
import './assets/styles/styles2.css';
// import Resume from ''

function Contact() {
    return (

        <div class="row align-items-center">
            <div class="container">
            {/* <!--HEADER--> */}
            <h1>Contact</h1>

            {/* <!--BOOTSTRAP CARD FORM FOR FIRST, LAST NAME, EMAIL, MESSAGE BOX AND SUBMIT BUTTON--> */}
            <div class="card" id="contact-form">
                <form>

                {/* <!--FIRST NAME, LAST NAME FORM--> */}
                <div class="form-row">
                    <div class="col">
                    <input type="text" class="form-control" id="inputFirstName" placeholder="First name">
                    </div>
                    <div class="col">
                    <input type="text" class="form-control" id="inputLastName" placeholder="Last name">
                    </div>
                </div>

                {/* <!--EMAIL FORM SECTION--> */}
                <div class="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
                    <small id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</small>
                </div>

                {/* <!--MESSAGE BOX IN FORM FOR TEXT--> */}
                <div class="form-group">
                    <label for="inputMessage">Message</label>
                    <textarea class="form-control" id="inputMessage" rows="3"></textarea>
                </div>

                {/* <!--SUBMIT BUTTON TO SUBMIT FORM WHEN COMPLETE--> */}
                <button type="submit" class="btn btn-primary" id="submit-btn">Submit</button>
                </form>
            </div>
            </div>
        </div>

    )
}
    
export default Contact;        