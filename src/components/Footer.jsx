const Footer = () => {
    return (
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
  
            {/* Brand */}
            <div>
              <img
                src="images/logo.webp"
                alt="US4 Fitness Hub"
                className="h-12 w-auto"
              />
  
              <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
                Strength training, cardio and personal training in Pulikkal,
                Kerala.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Quick Links
              </h3>
  
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="#home"
                  className="text-sm text-gray-500 transition-colors hover:text-lime-400"
                >
                  Home
                </a>
  
                <a
                  href="#about"
                  className="text-sm text-gray-500 transition-colors hover:text-lime-400"
                >
                  About
                </a>
  
                <a
                  href="#services"
                  className="text-sm text-gray-500 transition-colors hover:text-lime-400"
                >
                  Services
                </a>
  
                <a
                  href="#membership"
                  className="text-sm text-gray-500 transition-colors hover:text-lime-400"
                >
                  Membership
                </a>
  
                <a
                  href="#contact"
                  className="text-sm text-gray-500 transition-colors hover:text-lime-400"
                >
                  Contact
                </a>
              </div>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Visit US4
              </h3>
  
              <div className="mt-5 space-y-3">
                <p className="text-sm text-gray-500">
                  Pulikkal, Kerala
                </p>
  
                <p className="text-sm text-gray-500">
                  Monday – Saturday
                  <br />
                  5:00 AM – 10:00 PM
                </p>
  
                <a
                  href="https://www.instagram.com/us4_fitness_hub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-gray-500 transition-colors hover:text-lime-400"
                >
                  @us4_fitness_hub
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom */}
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-600">
              © 2026 US4 Fitness Hub. All rights reserved.
            </p>
  
            <p className="text-xs uppercase tracking-wider text-gray-600">
              Train. Push. Progress.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;