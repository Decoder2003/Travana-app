"use client"

import { Shield, MapPin, CuboidIcon as Cube, Sparkles, Diamond, GitBranch, Trophy, ArrowRight } from "lucide-react"

const techFeatures = [
  {
    id: "1",
    title: "Fuzzy Geolocation",
    description:
      "Your exact location is never shared. We use geohashing to create approximate zones, protecting your privacy while enabling efficient ride matching.",
    icon: MapPin,
    color: "text-emerald-500",
    bgColor: "bg-emerald-100",
  },
  {
    id: "2",
    title: "Aptos Blockchain",
    description:
      "Built on Aptos for fast, secure, and low-cost transactions. Smart contracts handle payments automatically with built-in escrow protection.",
    icon: Cube,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    id: "3",
    title: "AI Clustering",
    description:
      "Our AI suggests optimal pickup points at public locations like malls and metro stations, making rides more convenient and private.",
    icon: Sparkles,
    color: "text-amber-500",
    bgColor: "bg-amber-100",
  },
  {
    id: "4",
    title: "Ride NFTs",
    description:
      "Every completed ride generates a unique NFT receipt. Collect them for rewards, use in disputes, or trade in our marketplace.",
    icon: Diamond,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    id: "5",
    title: "Decentralized Network",
    description:
      "No central authority controls your data or rides. The network is owned and operated by the community of users and drivers.",
    icon: GitBranch,
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    id: "6",
    title: "Token Rewards",
    description:
      "Earn TRAV tokens for rides, referrals, and network participation. Use tokens for discounts or governance voting.",
    icon: Trophy,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
]

const steps = [
  {
    number: 1,
    title: "Request Ride",
    description: "Enter your destination. AI suggests nearby pickup zones to protect your privacy.",
  },
  {
    number: 2,
    title: "Smart Matching",
    description: "Our algorithm matches you with nearby drivers using fuzzy geolocation.",
  },
  {
    number: 3,
    title: "Secure Payment",
    description: "Smart contracts handle payment with automatic escrow protection.",
  },
  {
    number: 4,
    title: "Mint NFT",
    description: "Receive a unique ride NFT as proof of journey and earn rewards.",
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your location data stays private with advanced geohashing",
    color: "text-emerald-500",
  },
  {
    icon: Sparkles,
    title: "Lightning Fast",
    description: "Aptos blockchain enables instant, low-cost transactions",
    color: "text-amber-500",
  },
  {
    icon: GitBranch,
    title: "Community Owned",
    description: "Decentralized network controlled by users, not corporations",
    color: "text-blue-500",
  },
  {
    icon: Trophy,
    title: "Earn Rewards",
    description: "Get TRAV tokens and collectible NFTs for every ride",
    color: "text-purple-500",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <div className="gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Shield className="mx-auto mb-6" size={64} />
          <h1 className="text-5xl font-bold mb-6">Privacy-First Mobility</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Travana revolutionizes ride-sharing with blockchain technology, AI-powered matching, and uncompromising
            privacy protection.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Problem Statement */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Problem</h2>
          <div className="bg-white rounded-xl p-8 card-shadow">
            <p className="text-lg text-gray-700 mb-6">
              Traditional ride-sharing platforms invade your privacy, track your every move, and control your data.
              Centralized systems create single points of failure and give corporations too much power over mobility.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-red-600">
                <span>👁️</span>
                <span>Location tracking</span>
              </div>
              <div className="flex items-center space-x-2 text-red-600">
                <span>🏢</span>
                <span>Centralized control</span>
              </div>
              <div className="flex items-center space-x-2 text-red-600">
                <span>🔒</span>
                <span>Data ownership</span>
              </div>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Solution</h2>
          <p className="text-lg text-gray-700 max-w-4xl">
            Travana combines cutting-edge Web3 technologies to create a truly decentralized, privacy-preserving
            ride-sharing platform.
          </p>
        </div>

        {/* Tech Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.id} className="bg-white rounded-xl p-6 card-shadow">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center`}>
                      <Icon className={feature.color} size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Travana?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="bg-white rounded-xl p-6 text-center card-shadow">
                  <Icon className={`mx-auto mb-4 ${benefit.color}`} size={48} />
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="gradient-secondary rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Revolution</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the future of mobility. Download Travana and experience truly private, decentralized
            ride-sharing.
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
            <span>Get Started</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
