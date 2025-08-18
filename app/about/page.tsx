'use client'
import dynamic from 'next/dynamic'

const PillNav = dynamic(() => import('../components/PillNav'), {
  ssr: false
})

import Footer from '../components/Footer'

export default function About() {
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
        activeHref="/about"
        baseColor="#00ffff"
        pillColor="#060010"
        hoveredPillTextColor="#00ffff"
      />

      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '80px 20px 20px 20px',
        position: 'relative',
        zIndex: 3
      }}>
        <h1 style={{
          color: '#00ffff',
          fontSize: '3rem',
          textAlign: 'center',
          marginBottom: '40px',
          textShadow: '0 0 20px #000000'
        }}>
          About FLOBBI
        </h1>

        <div style={{
          color: '#fff',
          fontSize: '1.2rem',
          lineHeight: '1.8',
          textAlign: 'center',
          background: 'rgba(0, 255, 255, 0.1)',
          border: '1px solid #00ffff',
          borderRadius: '15px',
          padding: '40px',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ marginBottom: '20px' }}>
            Welcome to the future of meme coins with FLOBBI - a revolutionary cryptocurrency that combines 
            cutting-edge blockchain technology with the power of community-driven innovation.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Our mission is to create a sustainable and engaging ecosystem where holders can participate 
            in governance, earn rewards, and be part of a vibrant community that shapes the future of DeFi.
          </p>
          <p>
            Join us on this exciting journey as we build the next generation of meme-powered cryptocurrency 
            that delivers real utility and value to our community members.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}