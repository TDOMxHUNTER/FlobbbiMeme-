
'use client'
import dynamic from 'next/dynamic'
import RoadmapComponent from '../components/RoadmapComponent'
import TokenomicsComponent from '../components/TokenomicsComponent'

const PillNav = dynamic(() => import('../components/PillNav'), {
  ssr: false
})



import Footer from '../components/Footer'

export default function Roadmap() {
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
      display: 'block',
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
        activeHref="/roadmap"
        baseColor="#00ffff"
        pillColor="#060010"
        hoveredPillTextColor="#00ffff"
      />

      <div style={{
        padding: '120px 40px 40px 40px',
        position: 'relative',
        zIndex: 2,
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '15px',
            padding: '20px',
            backdropFilter: 'blur(10px)',
            height: '600px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              overflowY: 'auto',
              paddingRight: '10px'
            }} className="scrollable-container">
              <h2 style={{
                color: '#00ffff',
                fontSize: '2rem',
                marginBottom: '20px',
                textAlign: 'center',
                textShadow: '0 0 10px #000000'
              }}>
                Roadmap
              </h2>
              <RoadmapComponent />
            </div>
          </div>

          <div>
            <TokenomicsComponent />
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .scrollable-container::-webkit-scrollbar {
          width: 8px;
        }

        .scrollable-container::-webkit-scrollbar-track {
          background: rgba(0, 255, 255, 0.1);
          border-radius: 4px;
        }

        .scrollable-container::-webkit-scrollbar-thumb {
          background: #00ffff;
          border-radius: 4px;
        }

        .scrollable-container::-webkit-scrollbar-thumb:hover {
          background: #00cccc;
        }

        @media (max-width: 1200px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
