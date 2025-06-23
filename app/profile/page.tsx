"use client"

import { User, Settings, Wallet, Diamond, Shield, HelpCircle, Info, LogOut } from "lucide-react"

const menuItems = [
  { icon: User, label: "Edit Profile", href: "/profile/edit" },
  { icon: Wallet, label: "Wallet Settings", href: "/profile/wallet" },
  { icon: Diamond, label: "NFT Collection", href: "/profile/nfts" },
  { icon: Shield, label: "Privacy Settings", href: "/profile/privacy" },
  { icon: HelpCircle, label: "Help & Support", href: "/support" },
  { icon: Info, label: "About Travana", href: "/about" },
]

export default function ProfilePage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <div className="gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">Profile</h1>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Settings size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Card */}
        <div className="mb-8">
          <div className="gradient-primary rounded-xl p-8 text-white text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-2">Travana User</h2>
            <p className="text-indigo-100 mb-4">user@travana.app</p>
            <div className="flex items-center justify-center space-x-2">
              <Wallet size={16} className="text-indigo-100" />
              <span className="text-indigo-100">Wallet Connected</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 text-center card-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <User className="text-indigo-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
            <div className="text-gray-600 text-sm">Rides</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center card-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Diamond className="text-purple-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-gray-600 text-sm">NFTs</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center card-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-amber-600 font-bold">T</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">250</div>
            <div className="text-gray-600 text-sm">TRAV</div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="bg-white rounded-xl card-shadow overflow-hidden mb-8">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={item.href}
                className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                  index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="text-indigo-600" size={20} />
                  <span className="font-medium text-gray-900">{item.label}</span>
                </div>
                <Settings className="text-gray-400" size={16} />
              </button>
            )
          })}
        </div>

        {/* Logout */}
        <button className="w-full bg-white rounded-xl p-4 card-shadow hover:shadow-lg transition-shadow flex items-center justify-center space-x-2 text-red-600 hover:text-red-700">
          <LogOut size={20} />
          <span className="font-semibold">Sign Out</span>
        </button>
      </div>
    </div>
  )
}
