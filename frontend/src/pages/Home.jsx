import React, { useState, useEffect } from "react";
import FlightForm from "../components/forms/FlightForm";
import HotelForm from "../components/forms/HotelForm";
import { Link } from "react-router-dom";
import CarForm from "../components/forms/CarForm";
import CruiseForm from "../components/forms/CruiseForm";
import { Plane, Hotel, Car, Ship } from "lucide-react";
import PopularAirline from "../components/common/PopularAirline";
import TopFlights from "../components/common/TopFlights";
import HotelDeals from "../components/common/HotelDeals";

const Home = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const [showKeywords, setShowKeywords] = useState(false);

  const tabs = [
    {
      id: "flights",
      label: "Flights",
      icon: Plane,
      bgImage: `${import.meta.env.BASE_URL}flights/images/bg-plane.jpg`,
    },
  ];

  const currentBg = tabs.find((tab) => tab.id === activeTab)?.bgImage;

  const renderForm = () => {
    switch (activeTab) {
      case "flights":
        return <FlightForm />;
      case "hotels":
        return <HotelForm />;
      case "cars":
        return <CarForm />;
      case "cruises":
        return <CruiseForm />;
      default:
        return <FlightForm />;
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 655) {
      // For mobile - scroll to callBanner section
      const section1 = document.querySelector(".starting");
      if (section1) {
        const top = section1.offsetTop - 10; // 10px above section1
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      // For desktop - scroll to top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const airlines = [
    { id: 1, title: "Delta Airlines", classes: "section2-card-1" },
    { id: 2, title: "United Airlines", classes: "section2-card-2" },
    { id: 3, title: "American Airlines", classes: "section2-card-3" },
    { id: 4, title: "Lufthansa Airlines", classes: "section2-card-4" },
    { id: 5, title: "Emirates Airlines", classes: "section2-card-5" },
    { id: 6, title: "Singapore Airlines", classes: "section2-card-6" },
  ];

  return (
    <>
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

      <div className="mob-sub-header">Airlines Phone Number Reservation</div>
      <main>
        <section className="hero-mobile-section">
          <img
            src={`${import.meta.env.BASE_URL}images/airlines-crew.png`}
            alt="airlines-crew"
            className="airline-crew-img"
          />
          <div className="booking-wrapper">
            <Link to="#">
              <div className="booking-changes mb-2">
                Booking, Changes & Cancellation
              </div>
            </Link>
            <p className="no-holds text-center mb-1">
              No Hold, Call Answered in 5 Sec
            </p>
            <Link to="+1 (888) 508-8828">
              <div className="orange-btn">
                <img
                  src={`${import.meta.env.BASE_URL}images/phone.svg`}
                  alt="phone"
                  className="orange-phone"
                />
                <span className="orange-link">+1 (888) 508-8828</span>
              </div>
            </Link>
            <p className="no-holds text-center">24/7 Helpline</p>
          </div>
        </section>
        <section className="mobile-highlights-section">
          <div className="container">
            <div className="highlight-grid">
              <div className="highlight-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  style={{ color: "#306e56" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1a11 11 0 1 0 11 11A11.012 11.012 0 0 0 12 1Zm0 20a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Zm.5-14h-1v6l5.25 3.15l.5-.86L12.5 13Z" />
                </svg>
                <div>
                  <h2>Immediate Answer to Each Incoming Call</h2>
                </div>
              </div>
              <div className="highlight-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  style={{ color: "#306e56" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M17.59 6.41L6.41 17.59L7.83 19L19 7.83ZM7 7a2 2 0 1 0 2 2a2 2 0 0 0-2-2Zm10 10a2 2 0 1 0-2-2a2 2 0 0 0 2 2Z" />
                </svg>
                <div>
                  <h2>Save Instantly with Discounts Up to 40%</h2>
                </div>
              </div>
              <div className="highlight-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  style={{ color: "#306e56" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5Zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5Z" />
                </svg>
                <div>
                  <h2>24/7 Assistance for All Your Travel Needs</h2>
                </div>
              </div>
              <div className="highlight-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  style={{ color: "#306e56" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1a11 11 0 0 0-11 11v7a3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4v-1a8 8 0 0 1 16 0v1h-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3v-7A11 11 0 0 0 12 1Z" />
                </svg>
                <div>
                  <h2>Trusted Specialists. True Assistance.</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mobile-hero-bottom">
          <div className="border-col">
            <div>
              <img
                src={`${import.meta.env.BASE_URL}images/search-shield.png`}
                alt="shield-search"
                width="25"
              />
              <p>Data Protection</p>
            </div>
          </div>
          <div className="border-col">
            <div>
              <img
                src={`${import.meta.env.BASE_URL}images/check-shield.svg`}
                alt="shield-check"
                width="25"
              />
              <p>Safe Journeys</p>
            </div>
          </div>
          <div className="border-col">
            <p>
              <strong>40k+</strong> Satisfied Explorers
            </p>
          </div>
          <div className="border-col">
            <div>
              <img
                src={`${import.meta.env.BASE_URL}images/headphones-svgrepo.svg`}
                alt="support-headphones"
                width="25"
              />
              <p>Round-the-Clock Support</p>
            </div>
          </div>
        </div>

        <section className="hero-section">
          <div className="container form-block">
            <div>
              <div className="w-full">
                <div className="tabs w-full ">
                  {/* Booking Tabs */}
                  <div className="w-full mt-5 md:mt-20">
                    <div className="w-full grid justify-items-center">
                      {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center justify-center space-x-0 sm:space-x-2 px-auto py-3 border border-b-2 transition-all duration-200 ${
                              activeTab === tab.id
                                ? "bg-[var(--primary)] border-[var(--primary)] border-b-[var(--accent-dark)] text-white shadow-lg"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-b-[var(--accent-dark)]"
                            }`}
                          >
                            <Icon className="hidden sm:block h-5 w-5" />
                            <span className="font-medium">{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                <div>
                  <div className="bg-slate-200 rounded-b-xl shadow-2xl p-4 md:p-4 mb-10 md:mb-20">
                    {/* Temporary test component - remove after testing */}
                    {renderForm()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="border-col">
              <div>
                <img
                  src={`${import.meta.env.BASE_URL}images/search-shield.png`}
                  alt="search-shield"
                  width="35"
                />
                <p>Privacy Compliance</p>
              </div>
            </div>
            <div className="border-col">
              <div>
                <img
                  src={`${import.meta.env.BASE_URL}images/check-shield.svg`}
                  alt="check-shield"
                  width="35"
                />
                <p>Secure Travel</p>
              </div>
            </div>
            <div className="border-col">
              <p>
                <strong>40k+</strong> Happy Travellers
              </p>
            </div>
            <div className="border-col">
              <div>
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }images/headphones-svgrepo.svg`}
                  alt="headphones-svgrepo"
                  width="35"
                />
                <p>24x7 Customer Assistance</p>
              </div>
            </div>
          </div>
        </section>

        <section className="highlights-section">
          <div className="container">
            <div className="highlight-grid">
              <div className="highlight-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  style={{ color: "#306e56" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1a11 11 0 1 0 11 11A11.012 11.012 0 0 0 12 1Zm0 20a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Zm.5-14h-1v6l5.25 3.15l.5-.86L12.5 13Z" />
                </svg>
                <div>
                  <h2>Fast Responses for Every Call</h2>
                  <p>
                    Connect instantly with skilled travel specialists –
                    dependable professionals ready to guide you
                  </p>
                </div>
              </div>

              <div className="highlight-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  style={{ color: "#306e56" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M17.59 6.41L6.41 17.59L7.83 19L19 7.83ZM7 7a2 2 0 1 0 2 2a2 2 0 0 0-2-2Zm10 10a2 2 0 1 0-2-2a2 2 0 0 0 2 2Z" />
                </svg>
                <div>
                  <h2>Unlock Instant Deals up to 40%</h2>
                  <p>
                    Exclusive call-only discounts you won’t find listed online.
                  </p>
                </div>
              </div>

              <div className="highlight-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  style={{ color: "#306e56" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5Zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5Z" />
                </svg>
                <div>
                  <h2>24/7 Travel Assistance</h2>
                  <p>
                    Tailored itineraries crafted solely to match your
                    preferences.
                  </p>
                </div>
              </div>

              <div className="highlight-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  style={{ color: "#306e56" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1a11 11 0 0 0-11 11v7a3 3 0 0 0 3 3h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4v-1a8 8 0 0 1 16 0v1h-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3v-7A11 11 0 0 0 12 1Z" />
                </svg>
                <div>
                  <h2>Trustworthy Specialists. Real Support.</h2>
                  <p>
                    Receive timely, accurate guidance around the clock with our
                    nonstop service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="details-section">
          <div className="container">
            <div className="mb-2">
              <h2>Find Affordable Flights Without the Hassle</h2>
              <p>
                Hoping to cut costs on your upcoming journey? Our team
                specializes in locating budget-friendly airfare across popular
                global routes. Whether you’re planning a romantic escape or a
                fun family trip, just share your travel details and spending
                limit. Our experienced advisors will build a tailored travel
                plan that fits your expectations—without stretching your budget.
                With exclusive fare access and smart pricing tools, securing
                economical flights has never been easier. Need guidance during
                the booking process? Our support staff is available around the
                clock to help you secure the right deal. Don’t delay—reserve
                your discounted tickets now!
              </p>
            </div>

            <div className="mb-2">
              <h2>Easy Reservations Backed by Professional Assistance</h2>
              <p>
                Frustrated with long queues and complicated airline sites? We
                simplify everything. You’ll connect instantly with a real travel
                professional—no wait times, no automated replies. Whether it’s a
                short weekend break or an international trip, we’ll uncover
                hidden savings and special call-only fares unavailable online.
              </p>
            </div>

            <div className="mb-2">
              <h2>Streamlined Flight Booking & Smooth Trip Adjustments</h2>
              <p>
                Our quick booking system, helpful support, and efficient service
                make flying easier than ever. Need to update your plans? Our
                travel team takes care of every detail—date changes, name
                updates, and routing corrections. No bots—just dependable, real
                experts offering fast assistance.
              </p>
            </div>

            <div className="mb-2">
              <h2>Easy Cancellations & Budget-Friendly Seat Upgrades</h2>
              <p>
                Had a change of plans? We handle cancellations smoothly with
                minimal charges and clear instructions. Want a more comfortable
                experience? Ask about seat or cabin upgrades—our advisors
                frequently discover great deals on premium seating and
                business-class travel.
              </p>
            </div>

            <div className="mb-2">
              <h2>✈️ Travel Worldwide Smoothly with Live Flight Specialists</h2>
              <p>
                Flying internationally? Our global booking assistance ensures a
                cost-effective, seamless, and stress-free process. Skip
                complicated platforms—speak directly with a live expert. No
                extended holds, no robotic menus—just knowledgeable, human
                guidance. From corporate travel to Europe to leisure vacations
                in Asia, we’ll find exceptional airfare deals suited to your
                trip and budget.
              </p>
              <ul>
                <li>
                  Reservations for multi-stop, long-haul, and global routes
                </li>
                <li>Flexible timing with simple itinerary modifications</li>
                <li>Upgrades to premium seating on international flights</li>
                <li>Quick cancellations with fast rebooking support</li>
              </ul>
              <p>
                Our experts secure special international fares and exclusive
                call-in discounts unavailable online. Just contact us, share
                your travel needs, and we’ll manage everything—promptly,
                efficiently, and with expert-level care. Your global trip is
                only a{" "}
                <Link to="tel:8885088828" className="light-blue">
                  phone call away
                </Link>
                .
              </p>
            </div>

            <div className="mb-2">
              <h2>💸 Discover Hidden Flight Deals with Live Specialists</h2>
              <p>
                Why pay extra for the same journey? Our advisors help you
                uncover affordable flight options—with personal assistance from
                beginning to end. Thanks to airline collaborations, we offer
                hidden fares and exclusive phone-only discounts not displayed on
                websites. Whether you're flying domestically or abroad, our
                agents will:
              </p>
              <ul>
                <li>
                  Lock in the <span className="em-text">lowest airfare</span>{" "}
                  for your travel dates and route
                </li>
                <li>
                  Help with{" "}
                  <span className="em-text">
                    bookings, changes, or cancellations
                  </span>
                </li>
                <li>
                  Locate{" "}
                  <span className="em-text">budget-friendly seat upgrades</span>{" "}
                  to improve comfort
                </li>
                <li>
                  Explain{" "}
                  <span className="em-text">
                    baggage rules and travel policies,
                  </span>{" "}
                  along with applicable fees
                </li>
              </ul>
              <p>
                <span className="em-text">No long hold times.</span> One quick
                call gets you expert guidance and your
                <span className="em-text">discounted flight price</span> ready
                right away.
              </p>
              <p>
                <Link to="tel:8885088828" className="light-blue">
                  Call today
                </Link>
                <span className="em-text">
                  to grab limited-time airfare deals before they disappear!
                </span>
              </p>
            </div>

            <div className="mb-2">
              <h2>
                Why Choosing Us for Discount Flights Is a Smarter Decision
              </h2>
              <ul>
                <li>
                  Instant Travel Support: Talk to a live expert immediately—no
                  waiting, no hassle.
                </li>
                <li>
                  Hidden Fare Benefits: Get exclusive savings that aren’t shown
                  on major booking sites.
                </li>
                <li>
                  Call-Only Discounts: Our lowest ticket prices are reserved
                  exclusively for phone bookings.
                </li>
                <li>
                  Assured Value: Every discounted ticket includes our commitment
                  to top savings, plus support for upgrades, modifications,
                  cancellations, and more.
                </li>
              </ul>
              <p>
                Travel smarter—
                <Link to="tel:8885088828" className="light-blue">
                  call now
                </Link>{" "}
                for faster bookings, lower fares, and expert help at every
                stage.
              </p>
            </div>

            <div className="mb-2">
              <h2>Top Low-Cost Airlines Offering Great Deals:</h2>
              <ul>
                <li>Frontier Airlines</li>
                <li>Spirit Airlines</li>
                <li>Sun Country Airlines</li>
                <li>JetBlue Airways</li>
                <li>Allegiant Air</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <section className="keyword-footer">
        <div className="keyword-toggle">
          <button
            onClick={() => setShowKeywords(!showKeywords)}
            className="toggle-btn"
          >
            Open Footer <span className="arrow">⌵</span>
          </button>
        </div>

        <div
          className="keyword-container"
          style={{ display: showKeywords ? "block" : "none" }}
          onClick={() => setShowKeywords(false)}
        >
          <div className="keyword-cloud">
            <span className="keyword">flight support</span>
            <span className="keyword">flight changes</span>
            <span className="keyword">cancel flight</span>
            <span className="keyword">upgrade flight</span>
            <span className="keyword">rebook flight</span>
            <span className="keyword">flight phone reservation</span>
            <span className="keyword">book flight</span>
            <span className="keyword">flight reservations</span>
            <span className="keyword">cheap flights</span>
            <span className="keyword">cheap international flights</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
