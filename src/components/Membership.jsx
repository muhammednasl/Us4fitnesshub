const Membership = () => {
    const plans = [
      {
        name: "Admission",
        price: "₹600",
        duration: "One-time fee",
      },
      {
        name: "Monthly",
        price: "₹1,000",
        duration: "Per month",
      },
      {
        name: "6 Months",
        price: "₹5,000",
        duration: "6 months",
      },
      {
        name: "1 Year",
        price: "₹10,000",
        duration: "12 months",
      },
    ];
  
    return (
      <section id="membership" className="bg-[#111111] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
  
          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
              Membership
            </p>
  
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              Choose Your
              <span className="text-lime-400"> Plan.</span>
            </h2>
  
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Simple membership options to help you get started and stay
              consistent with your training.
            </p>
          </div>
  
          {/* Plans */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="group rounded-2xl border border-white/10 bg-black p-7 transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/50"
              >
                <div className="flex items-start justify-between">
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    {plan.name}
                  </p>
  
                  <span className="text-sm font-bold text-lime-400">
                    US4
                  </span>
                </div>
  
                <div className="mt-10">
                  <p className="text-4xl font-black text-white sm:text-5xl">
                    {plan.price}
                  </p>
  
                  <p className="mt-3 text-sm text-gray-500">
                    {plan.duration}
                  </p>
                </div>
  
                <a
                  href="#contact"
                  className="mt-10 block rounded-full border border-white/10 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                >
                  Join Now
                </a>
              </div>
            ))}
          </div>
  
          {/* Bottom CTA */}
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-2xl border border-lime-400/20 bg-lime-400/[0.04] p-7 sm:flex-row">
            <div>
              <h3 className="text-xl font-bold text-white">
                Ready to start training?
              </h3>
  
              <p className="mt-1 text-sm text-gray-500">
                Contact US4 Fitness Hub to get started.
              </p>
            </div>
  
            <a
              href="#contact"
              className="whitespace-nowrap rounded-full bg-lime-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-all duration-300 hover:bg-lime-300"
            >
              Join Now
            </a>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Membership;