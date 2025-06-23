"use client"

import { Calendar, Gift, Diamond, Music, Leaf, Clock, Users, ArrowRight, Share2 } from "lucide-react"

const promotions = [
  {
    id: "1",
    title: "Tech Conference 2024",
    description: "Special rides to the biggest tech event of the year",
    discount: "30% OFF",
    validUntil: "Dec 25, 2024",
    type: "event",
    gradient: "from-indigo-500 to-purple-600",
    icon: Calendar,
  },
  {
    id: "2",
    title: "First Ride Free",
    description: "Welcome to Travana! Your first ride is on us",
    discount: "100% OFF",
    validUntil: "Limited time",
    type: "discount",
    gradient: "from-emerald-500 to-emerald-600",
    icon: Gift,
  },
  {
    id: "3",
    title: "NFT Rewards Launch",
    description: "Collect unique ride NFTs and earn exclusive rewards",
    discount: "NEW",
    validUntil: "Ongoing",
    type: "feature",
    gradient: "from-amber-500 to-orange-600",
    icon: Diamond,
  },
  {
    id: "4",
    title: "Weekend Pool Party",
    description: "Shared rides to the hottest weekend events",
    discount: "25% OFF",
    validUntil: "Every Weekend",
    type: "event",
    gradient: "from-red-500 to-red-600",
    icon: Music,
  },
  {
    id: "5",
    title: "Green Rides Initiative",
    description: "Choose eco-friendly options and save the planet",
    discount: "15% OFF",
    validUntil: "Permanent",
    type: "discount",
    gradient: "from-green-500 to-green-600",
    icon: Leaf,
  },
]

const featuredEvents = [
  {
    id: "1",
    name: "Blockchain Summit",
    location: "Convention Center",
    date: "Dec 20-22",
    attendees: "5K+",
  },
  {
    id: "2",
    name: "Food Festival",
    location: "City Park",
    date: "Dec 18-19",
    attendees: "10K+",
  },
  {
    id: "3",
    name: "Art Exhibition",
    location: "Modern Gallery",
    date: "Dec 15-30",
    attendees: "2K+",
  },
]

export default function PromotionsPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-2">Promotions</h1>
          <p className="text-xl text-indigo-100">Exclusive offers & events</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Promotion */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured</h2>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-xl p-8 text-white">
            <div className="max-w-2xl">
              <div className="bg-white/20 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4">
                LIMITED TIME
              </div>
              <h3 className="text-3xl font-bold mb-4">Holiday Special</h3>
              <p className="text-xl text-indigo-100 mb-6">Get 50% off on all rides during the holiday season</p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>Ends Dec 31</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={16} />
                  <span>1.2K used</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Promotions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promotions.map((promotion) => {
              const Icon = promotion.icon
              return (
                <div
                  key={promotion.id}
                  className={`bg-gradient-to-r ${promotion.gradient} rounded-xl p-6 text-white hover:shadow-xl transition-shadow cursor-pointer`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <div className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                      {promotion.discount}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{promotion.title}</h3>
                  <p className="text-white/90 mb-4">{promotion.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">Valid until {promotion.validUntil}</span>
                    <ArrowRight size={16} className="text-white/80" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Featured Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Trending Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl card-shadow hover:shadow-xl transition-shadow">
                <div className="h-32 bg-gray-100 rounded-t-xl flex items-center justify-center">
                  <Calendar className="text-indigo-600" size={48} />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">{event.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={14} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={14} className="text-emerald-500" />
                      <span className="text-emerald-600 font-semibold">{event.attendees} attending</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Referral Program */}
        <div className="gradient-secondary rounded-xl p-8 text-white text-center">
          <Share2 className="mx-auto text-emerald-400 mb-4" size={48} />
          <h2 className="text-2xl font-bold mb-4">Refer & Earn</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Invite friends and earn 100 TRAV tokens for each successful referral
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">0</div>
              <div className="text-gray-400 text-sm">Referrals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">0</div>
              <div className="text-gray-400 text-sm">TRAV Earned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
