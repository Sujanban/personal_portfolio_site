import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer_main">
            <div className="footer_info">
                <h2>Realesto</h2>
                <p>Sundarharaincha-5 Morang, Nepal 56705</p>
                <p>Admin@realesto.com</p>
                <a href="tel-phone"><i className="fa fa-phone"></i> (+977) 9824386853</a>
            </div>
            <div className="footer_link">
                <h2>Links</h2>
                <div className="link_column">
                    <div>
                        <a href="">Home</a>
                        <a href="">Buy</a>
                        <a href="">Sell</a>
                        <a href="">Rent</a>
                    </div>
                    <div>
                        <a href="">About Us</a>
                        <a href="">Contact Us</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms and Conditions</a>
                    </div>
                </div>
            </div>
            <div className="footer_newsletter">
                <h2>Subcribe to Our Newsletter</h2>
                <label for="email">
                    <input type="email" name="email" className="email"
                        placeholder="Enter your e-mail"/><i><button type="submit">Subscribe</button></i>
                </label>
                <div>
                    <input type="checkbox" name="checkbox" className="term"/> I have read and agree to the <a
                        href="policy.html">Privacy Policy</a>
                </div>
            </div>
        </div>
        <div className="footer_secondary">
            <p>Realesto &copy 2022. All right reserved.</p>
            <p><i className="fa fa-twitter"></i><i className="fa fa-instagram"></i><i className="fa fa-linkedin"></i></p>
        </div>
    </footer>
  )
}
