"use client"

import { useState } from "react"
// import { useSearchParams } from "next/navigation"
import { MapPin, Shield, Car, Users, Zap, Wallet, CheckCircle, ArrowRight } from "lucide-react"

const rideOptions = [
  {
    id: "1",
    type: "TravanaGo",
    estimatedTime: "3-5 min",
    price: "₹120",
    description: "Quick and affordable",
    icon: Car,
  },
  {
    id: "2",
    type: "TravanaPool",
    estimatedTime: "5-8 min",
    price: "₹85",
    description: "Share and save",
    icon: Users,
  },
  {
    id: "3",
    type: "TravanaPremium",
    estimatedTime: "2-4 min",
    price: "₹180",
    description: "Luxury experience",
    icon: Zap,
  },
]

export default function RideBookingPage() {
  // const searchParams = useSearchParams()
  // const rideType = searchParams.get("type")

  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [selectedOption, setSelectedOption] = useState("1")

  const handleBookRide = () => {
    console.log("Booking ride:", { pickup, destination, selectedOption })
  }

  return (
    <div className="pt-16 md:pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Location Inputs */}
        <div className="bg-white rounded-xl p-6 card-shadow mb-6">
          <div className="flex items-start space-x-4">
            <div className="flex flex-col items-center space-y-2 pt-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <div className="w-0.5 h-10 bg-gray-300"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                <MapPin className="text-emerald-500" size={20} />
                <input
                  type="text"
                  placeholder="Pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-900"
                />
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                <MapPin className="text-red-500" size={20} />
                <input
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 flex items-center space-x-3">
          <Shield className="text-emerald-600" size={20} />
          <p className="text-emerald-800">Your exact location is protected with fuzzy geolocation</p>
        </div>

        {/* Ride Options */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Choose your ride</h2>
          <div className="space-y-3">
            {rideOptions.map((option) => {
              const Icon = option.icon
              const isSelected = selectedOption === option.id
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`w-full bg-white rounded-xl p-4 border-2 transition-all ${
                    isSelected ? "border-indigo-500 bg-indigo-50" : "border-transparent hover:border-gray-200"
                  } card-shadow`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        <Icon className="text-indigo-600" size={24} />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900">{option.type}</h3>
                        <p className="text-gray-600 text-sm">{option.description}</p>
                        <p className="text-gray-500 text-xs">{option.estimatedTime}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-900">{option.price}</div>
                      {isSelected && <CheckCircle className="text-emerald-500 mt-1" size={20} />}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Payment</h2>
          <div className="bg-white rounded-xl p-4 card-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Wallet className="text-indigo-600" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Crypto Wallet</h3>
                  <p className="text-gray-600 text-sm">Smart contract escrow</p>
                </div>
              </div>
              <ArrowRight className="text-gray-400" size={20} />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl p-6 card-shadow mb-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Shield className="text-emerald-500" size={20} />
              <span className="text-sm font-medium text-gray-700">Privacy Protected</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-5 h-5 bg-blue-500 rounded"></div>
              <span className="text-sm font-medium text-gray-700">Blockchain Secured</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-5 h-5 bg-amber-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">NFT Receipt</span>
            </div>
          </div>
        </div>

        {/* Book Ride Button */}
        <button
          onClick={handleBookRide}
          className="w-full gradient-primary text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2"
        >
          <span>Book Travana Ride</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  )
}
