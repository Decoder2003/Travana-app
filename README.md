# 🚖 Travana – Decentralized Ride-Sharing App

Travana is a privacy-first, decentralized ride-sharing platform built using React Native and Aptos blockchain. It protects user location using fuzzy geohashing, leverages AI to suggest intelligent pickup zones, and mints NFT receipts after every ride.

📱 Features

- 🔐 Web3 wallet integration
- 📍 Fuzzy location matching using Geohashing
- 🧠 AI-based clustering of public POIs for smart pickup zones
- 🚕 Ride booking and zone-based driver matching
- 🧾 Smart contract-based payment escrow
- 🎖️ NFT ride receipt minted post-ride
- 🏆 Points and rewards system based on ride activity

🧱 Tech Stack

- React Native + Expo (Frontend)
- Sui Blockchain (Move smart contracts)
- IPFS (ride metadata storage)
- JavaScript / TypeScript (core logic)
- Express.js (backend for clustering / POIs)

📂 App Structure

- /screens

  - WelcomeScreen.tsx
  - Dashboard.tsx
  - BookingScreen.tsx
  - RideStatus.tsx
  - SummaryScreen.tsx
  - ProfileScreen.tsx

- /services

  - wallet.ts
  - geohash.ts
  - nft.ts
  - rideAPI.ts

- /components

  - MapView
  - ZoneSelector
  - NFTCard
  - PointsTracker

🔧 Setup & Run

1. Clone the repo

   git clone [https://github.com/Decoder2003/Travana-app](https://github.com/Decoder2003/Travana-app)

2. Install dependencies

   cd travana-app
   npm install

3. Start Expo

   npx expo start

4. Run on mobile (scan QR from Expo Go) or emulator
