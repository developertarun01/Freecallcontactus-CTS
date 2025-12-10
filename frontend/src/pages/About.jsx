import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    if (window.innerWidth <= 655) {
      // For mobile - scroll to callBanner section
      const section1 = document.querySelector(".callBanner");
      if (section1) {
        const top = section1.offsetTop - 15; // 10px above section1
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      // For desktop - scroll to top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="callBanner text-center text-3xl font-bold text-teal-800 pt-6">
          About Us
        </div>
        <div className="shadow-xl p-5 rounded-md">
          {/* <h3 className="text-xl font-bold text-teal-800">About Us</h3> */}
          <p className="mt-5">
            Freecallcontactus.online is your go-to travel partner, created to
            make every part of your journey effortless—whether you're booking
            flights, hotels, rental cars, or cruise vacations. From spontaneous
            getaways to worldwide adventures, Freecallcontactus ensures you
            travel with ease, confidence, and exceptional value.
          </p>
          <p>
            We understand that putting a trip together can sometimes feel
            stressful, especially when coordinating multiple bookings or
            adjusting your plans. That’s why Freecallcontactus goes beyond being
            a standard booking site. It’s a complete travel platform powered by
            real professionals, available 24/7 to help you secure the best
            airfare, top hotel options, dependable vehicle rentals, and
            memorable cruise packages—all in one smooth, user-friendly space.
          </p>
        </div>

        <div className="mt-4 shadow-xl p-5 rounded-md">
          <h3 className="text-xl font-bold text-teal-800">What We Do</h3>
          <ul className="list-disc pl-5 mt-5">
            <li>
              <b> Flight Reservations</b> — Book domestic or international
              flights with trusted airline partners.
            </li>
            <li>
              <b> Hotel Bookings</b> — Discover stays suited to your taste and
              budget, from luxury escapes to cozy city stays.
            </li>
            <li>
              <b> Car Rentals</b> — Choose reliable rental cars for local
              travel, weekend drives, or airport rides.
            </li>
            <li>
              <b> Cruise Packages</b> — Explore stunning destinations with
              exclusive cruise offerings.
            </li>
            <li>
              <b> Changes & Cancellations </b>— Manage your bookings
              effortlessly, including rescheduling and refunds.
            </li>
            <li>
              <b> Unpublished Call-Only Offers</b> — Unlock limited-time
              discounts not shown on public travel sites.
            </li>
            <li>
              <b> All-Inclusive Travel Bundles</b> — Get personalized packages
              combining flights, stays, rentals, and cruises.
            </li>
            <li>
              <b> 24/7 Expert Assistance</b> — Speak with knowledgeable agents
              whenever you need support.
            </li>
          </ul>
        </div>

        <div className="mt-4 shadow-xl p-5 rounded-md">
          <h3 className="text-xl font-bold text-teal-800">Why Choose Us?</h3>
          <ul className="list-disc pl-5 mt-5">
            <li>
              <b>24/7 Live Support: </b>We’re available day and night because
              travel changes can happen at any moment.
            </li>
            <li>
              <b>Transparent Pricing:</b> Clear, upfront rates—no hidden
              surprises.
            </li>
            <li>
              <b>Human-Powered Help:</b> Real travel advisors assist you from
              start to finish.
            </li>
            <li>
              <b>Flexibility & Ease:</b> Simple upgrades, adjustments, or
              refunds whenever necessary.
            </li>
            <li>
              <b>Trusted by Travelers:</b> Thousands of happy customers count on
              us every month.
            </li>
          </ul>
        </div>

        <div className="mt-4 shadow-xl p-5 rounded-md">
          <h3 className="text-xl font-bold text-teal-800">Our Mission</h3>
          <p className="mt-5">
            At Freecallcontactus, our mission is to make travel—whether by air,
            road, or sea—easy, open, and stress-free. We combine smart
            technology with personalized assistance to create a smooth travel
            experience that’s adaptable, efficient, and centered around your
            needs.
          </p>
        </div>

        <div className="mt-4 shadow-xl p-5 rounded-md">
          <h3 className="text-xl font-bold text-teal-800">Contact Us</h3>
          <p className="mt-5">
            Have questions? Need guidance planning your trip? Or searching for
            an amazing deal? Reach our travel experts anytime at (888) 508-8828
            or send us an email at contact@freecallcontactus.online .
          </p>
          <h3 className="text-xl font-bold text-teal-800 mt-5">
            freecallcontactus.online – Fly, Stay, Drive & Sail Smarter. Travel
            Easier.
          </h3>
        </div>
      </div>
    </>
  );
};

export default About;
