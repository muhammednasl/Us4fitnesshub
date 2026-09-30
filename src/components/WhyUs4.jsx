const WhyUs4 = () => {
    const features = [
      {
        number: "01",
        title: "6 Days a Week",
        description: "Train Monday through Saturday.",
      },
      {
        number: "02",
        title: "5 AM – 10 PM",
        description: "Flexible hours to fit your routine.",
      },
      {
        number: "03",
        title: "Strength & Cardio",
        description: "Train for strength, fitness and conditioning.",
      },
      {
        number: "04",
        title: "Personal Training",
        description: "Get focused guidance for your training goals.",
      },
    ];
  
    return (
      <section className="bg-black py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
  
            {/* Main Statement */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
                Why US4
              </p>
  
              <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl lg:text-7xl">
                Your Goals.
                <span className="block">Your Work.</span>
                <span className="block text-lime-400">
                  Your Progress.
                </span>
              </h2>
  
              <p className="mt-7 max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
                A focused place to train consistently, improve your fitness and
                keep moving toward your goals.
              </p>
            </div>
  
            {/* Features */}
            <div className="grid gap-0 border-t border-white/10">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="group flex gap-6 border-b border-white/10 py-7"
                >
                  <span className="pt-1 text-sm font-bold text-lime-400">
                    {feature.number}
                  </span>
  
                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-lime-400">
                      {feature.title}
                    </h3>
  
                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyUs4;