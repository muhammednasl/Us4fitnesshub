const Hero = () => {
    return (
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-black pt-20"
      >
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 py-12 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
  
            {/* Hero Content */}
            <div className="relative z-10">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
                US4 Fitness Hub
              </p>
  
              <h1 className="max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Build Strength.
                <span className="block text-lime-400">
                  Become Stronger.
                </span>
              </h1>
  
              <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                Strength training, cardio and personal training designed to help
                you become stronger, fitter and more confident.
              </p>
  
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-lime-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-300 hover:scale-105"
                >
                  Join Now
                </a>
  
                <a
                  href="#membership"
                  className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-lime-400 hover:text-lime-400"
                >
                  View Membership
                </a>
              </div>
  
              {/* Quick Information */}
              <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-6">
                <div>
                  <p className="text-2xl font-bold text-white">6 Days</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    Open Weekly
                  </p>
                </div>
  
                <div>
                  <p className="text-2xl font-bold text-white">5 AM</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    Opening Time
                  </p>
                </div>
  
                <div>
                  <p className="text-2xl font-bold text-white">10 PM</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    Closing Time
                  </p>
                </div>
              </div>
            </div>
  
            {/* Hero Image */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-lime-400/10 blur-3xl" />
  
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="/images/heroPage.png"
                  alt="US4 Fitness Hub strength training"
                  className="h-[500px] w-full object-cover object-center sm:h-[600px] lg:h-[650px]"
                />
  
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;