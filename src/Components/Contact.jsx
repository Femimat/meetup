import "../Assets/Styles/Contact.css"
function Contact() {
    return(
    <div className="contact-container">
        <form className="form-info">
            <h4 id="content-header">Contact Form</h4>
            <div className="form-group">
                <label for="name" className="col-sm-3">Name<sup>*</sup></label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="name" placeholder="John Doe"/>
                </div>
            </div>
    
            <div className="form-group">
                <label for="name" className="col-sm-3">Email<sup>*</sup></label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" id="name" placeholder="you@youremail.com"/>
                </div>
            </div>

            <div className="form-group">
                <label for="name" className="col-sm-4">Your Message<sup>*</sup></label>
                <div className="col-sm-8">
                  <textarea id="message" className="form" rows="4" ></textarea>
                </div>
            </div>

            <div className="col-sm-offset-3">
                <button type="submit" name="submit" className="btn-submit">Send</button>
            </div>
        </form>

        <div className="twitter-info">
            <h4>Twitter Feed</h4>
            <p>Lorem <a href="http://designerdada.com">#Ipsum</a> is a dummy text used as a text filler in designs. This is just a dummy text. via <a href="http://designerdada.com">@designerdada</a></p>
            <hr/>
            <p>Lorem Ipsum is a <a href="http://designerdada.com">#dummy</a> text used as a text filler in designs. This is just a dummy text. via <a href="http://designerdada.com">@designerdada</a></p>
            <hr/>
            <p>Lorem Ipsum is a <a href="http://designerdada.com">#dummy</a> text used as a text filler in designs. This is just a dummy text. via <a href="http://designerdada.com">@designerdada</a></p>
        </div>
    </div>
    )
}

export default Contact
