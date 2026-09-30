const Services = () => {
    const services = [
      {
        number: "01",
        title: "Strength Training",
        description:
          "Build strength, muscle and physical performance with focused strength training.",
        image: "/images/strength.jpg",
      },
      {
        number: "02",
        title: "Cardio",
        description:
          "Improve endurance, conditioning and overall fitness with dedicated cardio training.",
        image: "/images/cardio.jpg",
      },
      {
        number: "03",
        title: "Personal Training",
        description:
          "Get focused guidance and individual support to stay consistent and work toward your goals.",
        image: "/images/personalTraining.jpg",
      },
    ];
  
    return (
      <section id="services" className="bg-black py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
  
          {/* Section Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
              What We Offer
            </p>
  
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              Train. Push.
              <span className="text-lime-400"> Progress.</span>
            </h2>
  
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Everything you need to build strength, improve fitness and stay
              committed to your training.
            </p>
          </div>
  
          {/* Service Cards */}
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="group relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10"
              >
                {/* Service Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
  
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/55 transition-all duration-300 group-hover:bg-black/40" />
  
                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <span className="mb-3 text-sm font-bold tracking-widest text-lime-400">
                    {service.number}
                  </span>
  
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {service.title}
                  </h3>
  
                  <p className="mt-4 max-w-sm text-sm leading-7 text-gray-300">
                    {service.description}
                  </p>
  
                  <div className="mt-6 text-xl text-lime-400 transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Services;