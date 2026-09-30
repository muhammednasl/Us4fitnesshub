const Contact = () => {
    return (
      <section id="contact" className="relative bg-[#111111] py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-4 sm:px-6 lg:px-8">
  
          {/* Map */}
          <div className="relative h-[600px] overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="US4 Fitness Hub Location"
              src="https://www.google.com/maps?q=US4%20Fitness%20Hub%20Pulikkal%20Kerala&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
            />
  
            {/* Details Card */}
            <div className="absolute left-6 top-6 w-[calc(100%-3rem)] max-w-md rounded-3xl bg-white p-7 shadow-2xl sm:left-10 sm:top-10 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Our Details
              </h2>
  
              <div className="mt-7 space-y-6">
  
                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl">
                    📍
                  </div>
  
                  <div>
                    <p className="font-semibold text-slate-900">
                      Location
                    </p>
                    <p className="mt-1 leading-6 text-slate-500">
                      Pulikkal,
                      <br />
                      Kerala, India
                    </p>
                  </div>
                </div>
  
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl">
                    📞
                  </div>
  
                  <div>
                    <p className="font-semibold text-slate-900">
                      Phone
                    </p>
  
                    <a
                      href="tel:+919999999999"
                      className="mt-1 block text-slate-500 transition-colors hover:text-lime-600"
                    >
                      +91 95396 81545
                    </a>
                  </div>
                </div>
  
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl">
                    ✉️
                  </div>
  
                  <div>
                    <p className="font-semibold text-slate-900">
                      Email
                    </p>
  
                    <a
                      href="mailto:us4fitnesshub@gmail.com"
                      className="mt-1 block break-all text-slate-500 transition-colors hover:text-lime-600"
                    >
                      us4fitnesshub@gmail.com
                    </a>
                  </div>
                </div>
  
                {/* Business Hours */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl">
                    🕐
                  </div>
  
                  <div>
                    <p className="font-semibold text-slate-900">
                      Business Hours
                    </p>
  
                    <p className="mt-1 text-slate-500">
                      Monday – Saturday
                      <br />
                      5:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;