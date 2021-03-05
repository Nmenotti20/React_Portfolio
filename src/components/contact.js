import React from 'react';
// import Resume from ''

function Contact() {
    return (

        <div className="row align-items-center">
            <div className="container">
            {/* <!--HEADER--> */}
            <h1>Contact</h1>

            {/* <!--BOOTSTRAP CARD FORM FOR FIRST, LAST NAME, EMAIL, MESSAGE BOX AND SUBMIT BUTTON--> */}
            <div className="card" id="contact-form">
                <form>

                {/* <!--FIRST NAME, LAST NAME FORM--> */}
                <div className="form-row">
                    <div className="col">
                    <input type="text" className="form-control" id="inputFirstName" placeholder="First name"></input>
                    </div>
                    <div className="col">
                    <input type="text" className="form-control" id="inputLastName" placeholder="Last name"></input>
                    </div>
                </div>

                {/* <!--EMAIL FORM SECTION--> */}
                <div className="form-group">
                    <label for="inputEmail">Email</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp"></input>
                    <small id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</small>
                </div>

                {/* <!--MESSAGE BOX IN FORM FOR TEXT--> */}
                <div className="form-group">
                    <label for="inputMessage">Message</label>
                    <textarea className="form-control" id="inputMessage" rows="3"></textarea>
                </div>

                {/* <!--SUBMIT BUTTON TO SUBMIT FORM WHEN COMPLETE--> */}
                <button type="submit" className="btn btn-primary" id="submit-btn">Submit</button>
                </form>
            </div>
            </div>
        </div>

    )
}
    
export default Contact;        