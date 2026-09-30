const About = () => {
    return (
      <section id="about" className="bg-[#111111] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
  
            {/* Left Content */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
                About US4
              </p>
  
              <h2 className="max-w-xl text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                Train With
                <span className="block text-lime-400">
                  Purpose.
                </span>
              </h2>
  
              <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                US4 Fitness Hub is a fitness center in Pulikkal focused on
                strength training, cardio, and personal training. Whether you're
                starting your fitness journey or working toward a stronger
                version of yourself, US4 provides a focused environment to train
                consistently.
              </p>
  
              <a
                href="#services"
                className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:border-lime-400 hover:text-lime-400"
              >
                Explore Services
              </a>
            </div>
  
            {/* Right Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black p-8 sm:p-12">
  
                {/* Background US4 */}
                <div className="absolute -right-8 -top-12 select-none text-[180px] font-black leading-none text-white/[0.03] sm:text-[220px]">
                  US4
                </div>
  
                <div className="relative z-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                    Fitness • Strength • Performance
                  </p>
  
                  <div className="mt-12 space-y-8">
  
                    {/* Strength */}
                    <div className="border-b border-white/10 pb-7">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">
                          Strength
                        </h3>
  
                        <span className="text-2xl font-black text-lime-400">
                          01
                        </span>
                      </div>
  
                      <p className="mt-3 text-sm leading-6 text-gray-500">
                        Focused training to help you build strength and improve
                        your physical performance.
                      </p>
                    </div>
  
                    {/* Cardio */}
                    <div className="border-b border-white/10 pb-7">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">
                          Cardio
                        </h3>
  
                        <span className="text-2xl font-black text-lime-400">
                          02
                        </span>
                      </div>
  
                      <p className="mt-3 text-sm leading-6 text-gray-500">
                        Training designed to improve endurance, fitness and
                        overall conditioning.
                      </p>
                    </div>
  
                    {/* Personal Training */}
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">
                          Personal Training
                        </h3>
  
                        <span className="text-2xl font-black text-lime-400">
                          03
                        </span>
                      </div>
  
                      <p className="mt-3 text-sm leading-6 text-gray-500">
                        More focused guidance with personal training support.
                      </p>
                    </div>
  
                  </div>
                </div>
              </div>
  
              {/* Accent */}
              <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-full bg-lime-400/20 blur-2xl" />
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default About;