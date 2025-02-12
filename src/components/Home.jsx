import { Trophy } from "lucide-react";
import React from 'react'; // This may be required in some setups
import { motion } from "framer-motion";
import CountdownTimer from "./Timer";

export default function Home() {
  return (
<div className="bg-gradient-to-b from-blue-900 to-yellow-500 min-h-screen">
  {/* Header */}
  <header className="p-3 flex justify-between items-center bg-blue-900 shadow-lg">
    {/* Left Section: Trophy Icon */}
    <div className="flex-1 flex justify-start">
      <Trophy className="text-yellow-500" />
    </div>

    {/* Center Section: Title */}
    <h1 className="text-3xl font-bold text-yellow-500 text-center flex-1">
      246Competitions
    </h1>

    {/* Right Section: Button */}
    <div className="flex-1 flex justify-end">
      <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded">
        Enter Now
      </button>
    </div>
  </header>

        {/* Countdown Timer */}
        <CountdownTimer />


      {/* Hero Section */}
      <section className="text-center py-8">
        <h2 className="text-4xl font-bold">Win Amazing Prizes!</h2>
        <p className="text-lg mt-4 text-white">Enter competitions for a chance to win cars, cash and more.</p>
        <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-blue-900 text-xl font-bold px-6 py-3 rounded">
          View Competitions
        </button>
      </section>

{/* Competitions Grid */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
  {/* Competition Card 1 */}
  <motion.div
    whileHover={{ scale: 1.05 }} // Scale up on hover
    whileTap={{ scale: 0.95 }}   // Slightly shrink on click
    initial={{ opacity: 0, y: 20 }} // Initial state (hidden and slightly below)
    whileInView={{ opacity: 1, y: 0 }} // Animate into view
    transition={{ duration: 0.5 }} // Animation duration
    viewport={{ once: true }} // Only animate once
    className="bg-blue-900 rounded-lg overflow-hidden border border-yellow-500 shadow-lg"
  >
    <img 
      src="/src/assets/hilux.avif" 
      alt="Toyota Hilux" 
      className="w-full h-48 object-contain"
    />
    <div className="p-4 text-center">
      <h3 className="text-2xl font-bold">Win a Toyota Hilux</h3>
      <p className="mt-2 text-white">Enter now to stand a chance to win this truck.</p>
      <p className="mt-2 text-yellow-500 font-bold">Tickets from $100</p>
      <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded">
        Enter Now
      </button>
    </div>
  </motion.div>

  {/* Competition Card 2 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }} // Add a slight delay for staggered animations
    viewport={{ once: true }}
    className="bg-blue-900 rounded-lg overflow-hidden border border-yellow-500 shadow-lg"
  >
    <img 
      src="src/assets/cash.jpg" 
      alt="Cash Prize" 
      className="w-full h-48 object-contain"
    />
    <div className="p-4 text-center">
      <h3 className="text-2xl font-bold">$10,000 Cash Prize</h3>
      <p className="mt-2 text-white">Big rewards, easy entry!</p>
      <p className="mt-2 text-yellow-500 font-bold">Tickets from $50</p>
      <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded">
        Enter Now
      </button>
    </div>
  </motion.div>

  {/* Competition Card 3 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }} // Add a longer delay for the third card
    viewport={{ once: true }}
    className="bg-blue-900 rounded-lg overflow-hidden border border-yellow-500 shadow-lg"
  >
    <img 
      src="src/assets/comingsoon.jpeg"
      alt="Upcoming competition details" 
      className="w-full h-48 object-contain"
    />
    <div className="p-4 text-center">
      <h3 className="text-2xl font-bold">Next Prize Coming Soon</h3>
      <p className="mt-2 text-white">It will be announced in the coming weeks!</p>
      <p className="mt-2 text-yellow-500 font-bold">Sit tight!</p>
      <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded">
        Enter Now
      </button>
    </div>
  </motion.div>
</section>

      {/* Why Choose Us Section */}
      <section className="bg-blue-900 py-8 px-6 text-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Why Choose 246Competitions?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-yellow-500">Guaranteed Winners</h3>
            <p className="mt-2">Every competition has a guaranteed winner.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-yellow-500">Secure & Fair</h3>
            <p className="mt-2">All draws are independently verified.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-yellow-500">Amazing Prizes</h3>
            <p className="mt-2">From cars to cash prizes, we offer the best rewards.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-blue-900 mt-10 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-yellow-500">About Us</h4>
            <ul className="mt-2">
              <li>Our Story</li>
              <li>How It Works</li>
              <li>Winners</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-yellow-500">Support</h4>
            <ul className="mt-2">
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-yellow-500">Legal</h4>
            <ul className="mt-2">
              <li>Privacy Policy</li>
              <li>Competition Rules</li>
              <li>Complaints</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-yellow-500">Connect</h4>
            <ul className="mt-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <p className="mt-8">&copy; 2025 246Competitions. All rights reserved.</p>
      </footer>
    </div>
  );
}