function GlobalNetwork() {
  return (
    <div className="relative bg-black text-white py-20 px-6 overflow-hidden">

      {/* Background Image */}
      <img
        src="/world.jpg"
        alt="world"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Tap into a <br />
            <span className="text-pink-500">global talent network</span>
          </h1>

          <div className="mt-10 space-y-8">

            <div>
              <h3 className="text-xl font-semibold">Post your job</h3>
              <p className="text-gray-400 mt-2">
                It's free and easy! Get lots of competitive bids that suit your
                budget in minutes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Choose freelancers</h3>
              <p className="text-gray-400 mt-2">
                We've got freelancers for jobs of any size or budget, across 2700+ skills.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Pay safely</h3>
              <p className="text-gray-400 mt-2">
                Only pay for work when you are 100% satisfied with the outcome.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">We're here to help</h3>
              <p className="text-gray-400 mt-2">
                Our expert team helps you find talent and manage your work.
              </p>
            </div>

            <p className="text-pink-500 mt-4 cursor-pointer">
              Get started now 
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (Cards) */}
        <div className="relative flex flex-col gap-6">

          {[1,2,3,4,5,6].map((i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <img
                src={`https://i.pravatar.cc/40?img=${i}`}
                alt="user"
                className="w-10 h-10 rounded-full"
              />

              <div className="flex-1">
                <div className="text-pink-500"></div>
                <div className="h-2 bg-gray-500 rounded mt-1 w-3/4"></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default GlobalNetwork;