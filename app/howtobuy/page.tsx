
'use client'
import dynamic from 'next/dynamic'

const PillNav = dynamic(() => import('../components/PillNav'), {
  ssr: false
})

import Footer from '../components/Footer'

export default function HowToBuy() {
  const pillNavItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'ROADMAP & TOKENOMICS', href: '/roadmap&tokenomics' },
    { label: 'HOW TO BUY', href: '/howtobuy' },
    { label: 'CONTACT', href: '/contact' },
    { label: 'TEAM EXECUTIVES', href: '/team' }
  ];

  return (
    <main style={{
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden',
      overflowY: 'auto'
    }}>
      {/* Main centered background image */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(/image.ico)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        zIndex: 1,
        opacity: 1.5
      }} />
      
      <PillNav
        items={pillNavItems}
        activeHref="/howto"
        baseColor="#00ffff"
        pillColor="#060010"
        hoveredPillTextColor="#00ffff"
      />

      <div style={{
        flex: 1,
        padding: '120px 20px 20px 20px',
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: '#00ffff',
          fontSize: '3rem',
          textAlign: 'center',
          marginBottom: '2rem',
          textShadow: '0 0 20px #000000'
        }}>
          How to Buy FLOBBI
        </h1>

        <div style={{
          color: '#fff',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          maxWidth: '800px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '2rem',
          borderRadius: '10px',
          border: '1px solid #00ffff',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#00ffff', marginBottom: '1rem' }}>Step 1: Set Up Your Wallet</h2>
            <p>Download and install a compatible wallet like MetaMask, Trust Wallet, or Phantom Wallet. Make sure to securely store your recovery phrase.(Do Not Give Anyone Your Phassphrase).</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#00ffff', marginBottom: '1rem' }}>Step 2: Get Some SOL</h2>
            <p>Purchase Solana (SOL) from a centralized exchange like Coinbase, Binance, or Kraken. Transfer the funds to your wallet.</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#00ffff', marginBottom: '1rem' }}>Step 3: Connect to PumpFUN</h2>
            <p>Visit a decentralized exchange like Uniswap (for Ethereum) or Raydium (for Solana). Connect your wallet to the platform.</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#00ffff', marginBottom: '1rem' }}>Step 4: Swap for FLOBBI</h2>
            <p>Search for FLOBBI token using our contract address. Enter the amount you want to swap and confirm the transaction. Make sure to check slippage settings.</p>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#00ffff', marginBottom: '1rem' }}>Step 5: Add FLOBBI to Your Wallet</h2>
            <p>Add FLOBBI as a custom token in your wallet using our contract address to view your balance.</p>
          </div>

          <div style={{
            backgroundColor: 'rgba(0, 255, 255, 0.1)',
            padding: '1rem',
            borderRadius: '5px',
            border: '1px solid #00ffff',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>
              ⚠️ Always do your own research and never invest more than you can afford to lose!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
