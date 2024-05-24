/* -----------------------------------------------------------------------------------------

    THIS FILE CONTAINS SOME STATIC DATA TO FILL SOME DIFFERENT COMPONENTS

----------------------------------------------------------------------------------------- */

import React from "react";

/* FAQS LIST */
export const FAQS = [
  {
    question: "What is Ethermotion?",
    answer: (
      <div className="text-muted">
        <p className="mb-2">
          Ethermotion is a web3 streaming service where users can upload their videos and get paid if people subscribe. It's a platform that leverages blockchain technology to provide a decentralized and fair ecosystem for content creators and viewers alike.
        </p>
      </div>
    ),
  },
  {
    question: "How does Ethermotion work?",
    answer: (
      <div className="text-muted">
        <p className="mb-2">
          Ethermotion allows users to create channels, upload videos, and engage with their audience. Viewers can subscribe to channels they like, and content creators earn money through these subscriptions. All transactions are powered by cryptocurrency, ensuring secure and transparent payments.
        </p>
      </div>
    ),
  },
  {
    question: "Who is Ethermotion for?",
    answer: (
      <div className="text-muted">
        <p className="mb-2">
          Ethermotion is designed for content creators, influencers, and viewers who are interested in a decentralized video streaming platform. It's perfect for those who want to monetize their content and for viewers who want to support their favorite creators.
        </p>
      </div>
    ),
  },
  {
    question: "What is Ethermotion's vision?",
    answer: (
      <div className="text-muted">
        <p className="mb-2">
          Ethermotion aims to revolutionize the way content is created, shared, and monetized on the web. By leveraging the power of blockchain technology, Ethermotion seeks to provide a transparent, fair, and decentralized platform for all users.
        </p>
      </div>
    ),
  },
  {
    question: "What stack is the Ethermotion App built with?",
    answer: (
      <div className="text-muted">
        <p className="mb-2">
          <strong className="text-white">Solidity</strong> – Building smart contracts.
        </p>
        <p className="mb-2">
          <strong className="text-white">Truffle Suite</strong> – Development environment, testing framework, and asset pipeline for blockchains.
        </p>
        <p className="mb-2">
          <strong className="text-white">Web3.js</strong> – JavaScript library for interacting with a local or remote Ethereum node.
        </p>
        <p className="mb-2">
          <strong className="text-white">IPFS</strong> – Decentralized storage to save images with metadata on the blockchain.
        </p>
        <p className="mb-2">
          <strong className="text-white">MetaMask</strong> – Crypto wallet for trading NFTs and interacting with dApps.
        </p>
        <p className="mb-2">
          <strong className="text-white">React.js</strong> – JavaScript framework to build the user interface and connect everything together.
        </p>
        <p className="mb-2">
          <strong className="text-white">Bootstrap 5</strong> – UI framework for responsive and modern design.
        </p>
      </div>
    ),
  },
  {
    question: "What blockchains does Ethermotion support?",
    answer: (
      <div className="text-muted">
        <p className="mb-2">Ethermotion currently supports these blockchains:</p>
        <ul className="mb-0 text-white">
          <li>Theta Testnet (Live on Testnet)</li>
          <li>Binance Smart Chain (Live on Testnet)</li>
          <li>Ethereum</li>
          <li>Polygon</li>
          <li>Celo</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What wallets are supported by Ethermotion?",
    answer: (
      <div className="text-muted">
        <p className="mb-2">Currently, you can use MetaMask wallet with Ethermotion.</p>
      </div>
    ),
  },
  {
    question: "What features are available in the Admin Panel of Ethermotion?",
    answer: (
      <div className="text-muted">
        <p className="mb-2">
          The admin panel is integrated into the UI and is accessible only by the marketplace owner. It's not a CMS, but it allows admins to manage videos and track profits. Future updates will include a decentralized algorithm for better management.
        </p>
        <p className="mb-2 fw-bold">The admin dashboard contains:</p>
        <ul className="mb-0 text-white">
          <li>The app's profits</li>
          <li>All videos with their status, pending or active</li>
          <li>Ability to approve videos</li>
          <li>Ability to block videos</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Who is the Founder of Ethermotion?",
    answer: (
      <div className="text-muted">
        <p className="mb-2">
          Ethermotion was founded by a passionate Web3 developer with a vision to revolutionize the streaming industry using blockchain technology.
        </p>
      </div>
    ),
  },
  {
    question: "More questions?",
    answer: (
      <div className="text-muted">
        <p className="mb-2">
          If you can't find the answers here, <a href="https://www.ethermotion.xyz/#contact" className="text-primary" target="_blank" rel="noopener noreferrer">get in touch</a>. We will be happy to help you.
        </p>
      </div>
    ),
  },
];
