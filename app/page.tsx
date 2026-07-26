import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-700 to-sky-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="uppercase tracking-widest text-orange-300 font-semibold mb-4">
              Welcome to Nexablu Trading LLP
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">

              Complete HVAC
              <br />

              Solutions
              <span className="text-orange-400"> Under One Roof</span>

            </h1>

            <p className="mt-8 text-lg text-blue-100 leading-8">

              Wholesale & Retail Supplier of Air Conditioners,
              Copper Pipes,
              Copper Fittings,
              Ducting Materials,
              Refrigerant Gas,
              Insulation Materials,
              HVAC Accessories &
              Installation Products.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/products"
                className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="border border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                Request Quote
              </Link>

            </div>

          </div>

          <div>

            <img
              src="/images/hero-ac.png"
              alt="HVAC"
              className="w-full"
            />

          </div>

        </div>

      </section>

    </main>
  );
}
