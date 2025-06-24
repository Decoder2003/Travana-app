"use client"

import { useState } from "react"
import { MapPin, Star, Diamond } from "lucide-react"

interface RideHistory {
  id: string
  destination: string
  date: string
  time: string
  amount: string
  type: string
  status: "completed" | "cancelled"
  nftId?: string
  rating: number
}

const rideHistory: RideHistory[] = [
  {
    id: "1",
    destination: "Central Mall",
    date: "Today",
    time: "2:30 PM",
    amount: "₹120",
    type: "TravanaGo",
    status: "completed",
    nftId: "TRV-001",
    rating: 5,
  },
  {
    id: "2",
    destination: "Tech Park",
    date: "Yesterday",
    time: "9:15 AM",
    amount: "₹85",
    type: "TravanaPool",
    status: "completed",
    nftId: "TRV-002",
    rating: 4,
  },
  {
    id: "3",
    destination: "Airport",
    date: "Dec 18",
    time: "6:45 AM",
    amount: "₹350",
    type: "TravanaPremium",
    status: "completed",
    nftId: "TRV-003",
    rating: 5,
  },
  {
    id: "4",
    destination: "City Center",
    date: "Dec 17",
    time: "8:20 PM",
    amount: "₹95",
    type: "TravanaGo",
    status: "cancelled",
    rating: 0,
  },
  {
    id: "5",
    destination: "University",
    date: "Dec 16",
    time: "11:30 AM",
    amount: "₹65",
    type: "TravanaPool",
    status: "completed",
    nftId: "TRV-004",
    rating: 4,
  },
]

export default function HistoryPage() {
  const [selectedTab, setSelectedTab] = useState<"all" | "completed" | "cancelled">("all")

  const filteredHistory = rideHistory.filter((ride) => {
    if (selectedTab === "all") return true
    return ride.status === selectedTab
  })

  const totalRides = rideHistory.filter((r) => r.status === "completed").length
  const totalSpent = rideHistory
    .filter((r) => r.status === "completed")
    .reduce((sum, r) => sum + Number.parseInt(r.amount.replace("₹", "")), 0)
  const nftCount = rideHistory.filter((r) => r.nftId).length

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={12} className={i < rating ? "text-amber-400 fill-current" : "text-gray-300"} />
    ))
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-2">Ride History</h1>
          <p className="text-xl text-indigo-100">Your journey with Travana</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Section */}
        <div className="mb-8">
          <div className="gradient-primary rounded-xl p-6 text-white">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">{totalRides}</div>
                <div className="text-indigo-100 text-sm">Total Rides</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">₹{totalSpent}</div>
                <div className="text-indigo-100 text-sm">Total Spent</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">{nftCount}</div>
                <div className="text-indigo-100 text-sm">NFTs Collected</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="bg-gray-100 p-1 rounded-xl inline-flex">
            {(["all", "completed", "cancelled"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors capitalize ${
                  selectedTab === tab ? "bg-white text-indigo-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Ride History List */}
        <div className="space-y-4 mb-12">
          {filteredHistory.map((ride) => (
            <div key={ride.id} className="bg-white rounded-xl p-6 card-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-indigo-600" size={20} />
                  <h3 className="font-semibold text-gray-900 text-lg">{ride.destination}</h3>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900">{ride.amount}</div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-indigo-600 font-medium">{ride.type}</div>
                  <div className="text-gray-600 text-sm">
                    {ride.date} • {ride.time}
                  </div>
                </div>
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      ride.status === "completed" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {ride.status === "completed" ? "Completed" : "Cancelled"}
                  </span>
                </div>
              </div>

              {ride.status === "completed" && (
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 text-sm">Rating:</span>
                    <div className="flex space-x-1">{renderStars(ride.rating)}</div>
                  </div>
                  {ride.nftId && (
                    <div className="flex items-center space-x-2">
                      <Diamond className="text-purple-600" size={14} />
                      <span className="text-purple-600 font-medium text-sm">NFT: {ride.nftId}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* NFT Collection */}
        <div className="gradient-secondary rounded-xl p-8 text-white text-center">
          <Diamond className="mx-auto text-purple-400 mb-4" size={48} />
          <h2 className="text-2xl font-bold mb-4">Ride NFTs</h2>
          <p className="text-gray-300 mb-6">You&apos;ve collected {nftCount} unique ride NFTs</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2">
            <span>View Collection</span>
            <Diamond size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
