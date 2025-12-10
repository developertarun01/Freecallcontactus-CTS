import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="sticky-call-button">
          <div className="call-button-wrap">
            <div className="call-img-block">
              <img
                src={`${import.meta.env.BASE_URL}images/call-center.png`}
                alt="call-center"
                width="40"
              />
              <div>
                <p>Call & Get upto</p>
                <p>
                  <Link to="tel:8885088828">
                    <strong>+1 (888) 508-8828</strong>
                  </Link>
                </p>
              </div>
            </div>
            <div className="call-now">
              <Link to="tel:8885088828">
                <img
                  src={`${import.meta.env.BASE_URL}images/phone-outline.svg`}
                  alt="phone-outline"
                  width="20"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-wrap">
          <div className="footer-content-box">
            <div>
              <h2 className="mb-05">
                <strong>Subscribe to Newsletter</strong>
              </h2>
              <p className="get-exclusive mb-1">
                Get exclusive discounts on flights & hotels
              </p>
              <div className="mt-1 newsletter-wrapper">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
                <button>Submit</button>
              </div>
              <p>
                <Link
                  to="mailto:contact@freecallcontactus.online"
                  className="email-link"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/email-icon.svg`}
                    alt="email-icon"
                    width="25"
                  />
                  contact@freecallcontactus.online
                </Link>
              </p>
              <ul className="social-links-ul">
                <li>
                  <Link to="http://freecallcontactus.online">
                    <img
                      src={`${import.meta.env.BASE_URL}images/fb-icon.svg`}
                      alt="fb-icon"
                      width="25"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="http://freecallcontactus.online">
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }images/instagram-icon.svg`}
                      alt="instagram-icon"
                      width="25"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="http://freecallcontactus.online">
                    <img
                      src={`${import.meta.env.BASE_URL}images/twitter-com.svg`}
                      alt="twitter-com"
                      width="25"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-underline mb-1">IMPORTANT LINKS</h2>
              <ul>
                <li>
                  <Link to="https://freecallcontactus.online/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="https://freecallcontactus.online/contact">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="https://freecallcontactus.online/privacy_policy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-underline mb-1">SEVICES</h2>
              <ul>
                <li>
                  <Link to="tel:8885088828">Flight Changes</Link>
                </li>
                <li>
                  <Link to="tel:8885088828">Flight Cancelations</Link>
                </li>
                <li>
                  <Link to="tel:8885088828">Flight Upgrade</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-underline mb-1">CONTACT US</h2>
              <ul>
                <li>
                  <Link to="tel:8885088828">
                    <strong>+1 (888) 508-8828</strong>
                  </Link>
                </li>
                <li>
                  <strong>
                    Email:
                    <Link to="mailto:contact@freecallcontactus.online">
                      contact@freecallcontactus.online
                    </Link>
                  </strong>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src={`${import.meta.env.BASE_URL}images/footer_bg.png`}
              alt="footer-bg"
              className="footer-bg"
            />
          </div>
        </div>
        <div className="p-20 disclaimer-wrap">
          <p className="text-center small">
            Disclaimer: We operate as an independent travel service offering
            reservations for flights, hotels, and vacation packages. We are not
            owned by or directly connected to any airline. All bookings are
            processed via authorized partners and are subject to each airline’s
            specific terms and conditions.
          </p>

          <p className="text-center">
            Customer Support Line:{" "}
            <Link to="tel:8885088828">+1 (888) 508-8828</Link> | Email:{" "}
            <Link to="mailto:contact@freecallcontactus.online">
              contact@freecallcontactus.online
            </Link>
            <br />
            Copyright © 2025 freecallcontactus.online
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
