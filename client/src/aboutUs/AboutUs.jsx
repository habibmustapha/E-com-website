const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#D2B021]">
              About ZPhone
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Technology that fits
              <span className="text-[#D2B021]"> your life.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              ZPhone is an Algerian online store dedicated to bringing you
              smartphones, accessories, and everyday technology with a simple,
              reliable shopping experience.
            </p>
          </div>
        </div>

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D2B021]/10 blur-3xl" />
      </section>

      {/* Who We Are */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#D2B021]">
              Who we are
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              More than just a phone store.
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              At ZPhone, we believe buying technology should be simple,
              transparent, and enjoyable. Our goal is to make it easier for
              customers to discover the devices that match their needs and
              budget.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              From smartphones and accessories to the latest technology, we
              focus on offering carefully selected products and a shopping
              experience you can rely on.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl bg-gray-100 p-8">
              <span className="text-3xl">📱</span>
              <h3 className="mt-5 text-xl font-semibold">Latest Devices</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Discover smartphones and technology for every lifestyle.
              </p>
            </div>

            <div className="rounded-3xl bg-black p-8 text-white">
              <span className="text-3xl">⚡</span>
              <h3 className="mt-5 text-xl font-semibold">Simple Shopping</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                A straightforward experience from discovery to checkout.
              </p>
            </div>

            <div className="rounded-3xl bg-black p-8 text-white">
              <span className="text-3xl">🔒</span>
              <h3 className="mt-5 text-xl font-semibold">Reliable Service</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                We care about making every customer interaction dependable.
              </p>
            </div>

            <div className="rounded-3xl bg-[#D2B021] p-8">
              <span className="text-3xl">💡</span>
              <h3 className="mt-5 text-xl font-semibold">Smart Choices</h3>
              <p className="mt-2 text-sm leading-6 text-black/60">
                Technology selected with value, quality, and usability in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#D2B021]">
              Our mission
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Making technology easier to access.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We want ZPhone to be a place where customers can explore, compare,
              and purchase technology with confidence. No unnecessary complexity
              — just the products and service you need.
            </p>
          </div>
        </div>
      </section>

      {/* Why ZPhone */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#D2B021]">
              Why ZPhone?
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built around the customer.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D2B021] font-bold">
                01
              </div>
              <div>
                <h3 className="font-semibold">Quality products</h3>
                <p className="mt-2 text-gray-600">
                  We focus on products that deliver real value and practical
                  everyday use.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D2B021] font-bold">
                02
              </div>
              <div>
                <h3 className="font-semibold">Customer first</h3>
                <p className="mt-2 text-gray-600">
                  Your experience matters at every step of the shopping journey.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D2B021] font-bold">
                03
              </div>
              <div>
                <h3 className="font-semibold">Technology made simple</h3>
                <p className="mt-2 text-gray-600">
                  We make discovering and buying technology straightforward,
                  without unnecessary complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-black px-6 py-16 text-center text-white sm:px-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Find your next device.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Explore our collection and discover technology made for you.
          </p>

          <a
            href="/shop"
            className="mt-8 inline-flex rounded-full bg-[#D2B021] px-7 py-3 font-semibold text-black transition hover:bg-[#e4c337]"
          >
            Explore the Shop
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
