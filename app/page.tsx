'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('')
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setEmailSubmitted(true)
      setEmail('')
      setTimeout(() => setEmailSubmitted(false), 3000)
    }
  }

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToEmail = () => {
    document.getElementById('email-list')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-off-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="KitchenFreak Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-800 hover:text-orange-600 font-medium transition">
                Home
              </Link>
              <Link href="#menu" className="text-gray-800 hover:text-orange-600 font-medium transition">
                Menu
              </Link>
              <Link href="#about" className="text-gray-800 hover:text-orange-600 font-medium transition">
                About
              </Link>
              <Link href="#contact" className="text-gray-800 hover:text-orange-600 font-medium transition">
                Contact
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-800 hover:text-orange-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-charcoal to-charcoal-light text-white pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              The Future of Soul Food.
              <br />
              <span className="text-gold">Freaky Fast.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              KitchenFreak is your go-to spot for fried chicken dinners, crispy fish plates, and Freak sides served fast, hot, and consistent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToMenu}
                className="bg-gold text-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
              >
                View the Menu
              </button>
              <button
                onClick={scrollToEmail}
                className="bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold hover:text-charcoal transition-all duration-300 w-full sm:w-auto"
              >
                Join the Freak List
              </button>
            </div>
          </div>
          
          {/* Hero Food Image */}
          <div className="mt-12 bg-charcoal-light rounded-2xl p-4 sm:p-8 border border-gold/20 overflow-hidden">
            <div className="relative w-full" style={{ aspectRatio: '3/2' }}>
              <Image
                src="/food-hero.png"
                alt="KitchenFreak soul food spread - fried chicken, mac and cheese, green beans, fried fish, and sauces with Soul Food, Freaky Fast branding"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MICRO MENU SECTION */}
      <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4">The Menu</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Simple. Focused. Freaky good.
            </p>
            <a
              href="/menu.pdf"
              download
              className="inline-flex items-center gap-2 bg-gold text-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-gold-light transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Menu PDF
            </a>
          </div>

          {/* PLATES */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-charcoal mb-8 text-center sm:text-left">Plates</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-off-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-charcoal">Fried Chicken Dinner</h4>
                  <span className="text-2xl font-bold text-gold">$21</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Three pieces of smoked-then-fried chicken, one Freak Side, Freak Sauce drizzle, and a slice of white bread.
                </p>
              </div>

              <div className="bg-off-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-charcoal">Freak Fish Plate (Whiting)</h4>
                  <span className="text-2xl font-bold text-gold">$17</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Two crispy whiting fillets, one Freak Side, Secret Tartar, and a lemon wedge.
                </p>
              </div>
            </div>
          </div>

          {/* SIDES */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-charcoal mb-8 text-center sm:text-left">Sides</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-off-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-charcoal">Mac Attack</h4>
                  <span className="text-2xl font-bold text-gold">$5</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Creamy, baked mac and cheese with a Freak blend of cheeses.
                </p>
              </div>

              <div className="bg-off-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-charcoal">Freak Beans</h4>
                  <span className="text-2xl font-bold text-gold">$4</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Garlic butter green beans with a soulful snap.
                </p>
              </div>
            </div>
          </div>

          {/* DRINKS */}
          <div>
            <h3 className="text-3xl font-bold text-charcoal mb-8 text-center sm:text-left">Drinks</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-off-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-charcoal">Sweet Tea</h4>
                  <span className="text-xl font-bold text-gold">$3</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Classic sweet tea that tastes like Sunday dinner.
                </p>
              </div>

              <div className="bg-off-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-charcoal">Lemonade</h4>
                  <span className="text-xl font-bold text-gold">$3</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Bright, refreshing lemonade with just the right sweetness.
                </p>
              </div>

              <div className="bg-off-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-charcoal">Half & Half (Arnold Palmer)</h4>
                  <span className="text-xl font-bold text-gold">$3.50</span>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Half sweet tea, half lemonade, full Freak energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY KITCHENFREAK SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4">Why KitchenFreak?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The Chick-fil-A / Chipotle of soul food. Simple. Fast. Consistent.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Soul Food, Freaky Fast</h3>
              <p className="text-gray-700 leading-relaxed">
                Plates built in minutes, not an hour wait. Real flavor, no shortcuts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Micro Menu, Max Flavor</h3>
              <p className="text-gray-700 leading-relaxed">
                Fried chicken dinners, fish plates, a couple of sides, and drinks. That's it. We obsess over a few things so they always hit.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Consistent Like a Franchise</h3>
              <p className="text-gray-700 leading-relaxed">
                Tight recipes and simple operations so every plate tastes like the last one.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Built for the Future</h3>
              <p className="text-gray-700 leading-relaxed">
                Modern branding, fast-casual flow, and a system designed to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple. Fast. Freaky good.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-charcoal">1</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Pick Your Plate</h3>
              <p className="text-gray-700 leading-relaxed">
                Fried Chicken Dinner or Freak Fish Plate.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-charcoal">2</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Choose Your Side</h3>
              <p className="text-gray-700 leading-relaxed">
                Mac Attack or Freak Beans.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-charcoal">3</span>
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Grab a Drink</h3>
              <p className="text-gray-700 leading-relaxed">
                Sweet Tea, Lemonade, or Half & Half.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Keep It Simple, Keep It Freak</h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              We're not doing 50 menu items. We're focused on <span className="text-gold font-semibold">dialed-in fried chicken</span>, <span className="text-gold font-semibold">crispy fish</span>, <span className="text-gold font-semibold">a couple of sides</span>, and <span className="text-gold font-semibold">classic drinks</span>.
            </p>
            <p>
              Our goal: to become the modern soul food chain that's simple enough to scale but soulful enough to feel like home.
            </p>
          </div>
        </div>
      </section>

      {/* COMING SOON / GROWTH VISION SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4">What's Next?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              As we grow, we're staying focused on flavor first.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-charcoal mb-3">More Freak Sides</h3>
              <p className="text-gray-700 leading-relaxed">
                As we grow, we'll add new sides carefully — always flavor first.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-charcoal mb-3">Limited-Time Sauces & Drops</h3>
              <p className="text-gray-700 leading-relaxed">
                Expect occasional limited drops and Freak flavors, announced to our email list.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-bold text-charcoal mb-3">Catering & Pop-Ups</h3>
              <p className="text-gray-700 leading-relaxed">
                We're exploring catering, pop-ups, and ghost kitchens as we expand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN THE FREAK LIST SECTION */}
      <section id="email-list" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">Join the Freak List</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the Freak List for launch updates, tasting invites, and drop announcements.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-gold focus:outline-none text-charcoal"
            />
            <button
              type="submit"
              className="bg-gold text-charcoal px-8 py-3 rounded-lg font-bold hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {emailSubmitted ? '✓ Notified!' : 'Notify Me'}
            </button>
          </form>
          
          {emailSubmitted && (
            <p className="mt-4 text-gold font-semibold">Thanks! We'll be in touch soon.</p>
          )}
        </div>
      </section>

      {/* COLUMBIA HEIGHTS PICKUP SECTION */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-off-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 sm:p-12 shadow-lg border-2 border-orange-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4">Pick Up at Columbia Heights</h2>
              <p className="text-xl text-gray-600">
                KitchenFreak is primarily pickup-based, built around the <span className="text-orange-600 font-semibold">Columbia Heights</span> crowd.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-off-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Location</h3>
                <p className="text-gray-700 mb-2 font-semibold">Columbia Heights</p>
                <p className="text-gray-600 text-sm">
                  Order ahead & pick up at our window.
                </p>
              </div>

              <div className="bg-off-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Hours</h3>
                <p className="text-gray-700 mb-2">Coming Soon</p>
                <p className="text-gray-600 text-sm italic">
                  Delivery coming soon.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
                <p className="text-lg font-semibold text-charcoal mb-2">
                  Order ahead & pick up at our window.
                </p>
                <p className="text-gray-600 italic text-sm">
                  Delivery coming soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal-light text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/logo.png"
                alt="KitchenFreak Logo"
                width={100}
                height={50}
                className="object-contain mb-4"
              />
              <p className="text-gray-400">Future Soul Food.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#contact" className="hover:text-gold transition">Contact</Link></li>
                <li><a href="#" className="hover:text-gold transition">Franchise Interest</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold transition">Instagram</a></li>
                <li><a href="#" className="hover:text-gold transition">TikTok</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tagline</h4>
              <p className="text-gray-400 text-sm">
                Soul Food, Freaky Fast.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} KitchenFreak. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
