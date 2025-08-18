
'use client'
import dynamic from 'next/dynamic'

const PillNav = dynamic(() => import('../components/PillNav'), {
  ssr: false
})

import Footer from '../components/Footer'

export default function Team() {
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
        activeHref="/team"
        baseColor="#00ffff"
        pillColor="#060010"
        hoveredPillTextColor="#00ffff"
      />

      <div style={{
        padding: '120px 40px 40px 40px',
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%'
      }}>
        <h1 style={{
          color: '#00ffff',
          fontSize: '3rem',
          textAlign: 'center',
          marginBottom: '40px',
          textShadow: '0 0 20px #000000'
        }}>
          Our Team
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          width: '100%',
          marginBottom: '40px'
        }}>
          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000'
            }}>👨‍💼</div>
            <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>CEO & Founder</h3>
            <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>Furobo</p>
            <p style={{ color: '#000', fontSize: '0.9rem', marginBottom: '1rem' }}>Mysterious Person</p>
            <a href="https://x.com/Furobosan" target="_blank" rel="noopener noreferrer" style={{
              color: '#00ffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              border: '1px solid #00ffff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}>@Furobosan</a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000'
            }}>👩‍💻</div>
            <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>Co-Founder</h3>
            <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>Alex Williams</p>
            <p style={{ color: '#000', fontSize: '0.9rem', marginBottom: '1rem' }}>Mysterious Person 2.0</p>
            <a href="yo" target="_blank" rel="noopener noreferrer" style={{
              color: '#00ffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              border: '1px solid #00ffff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}>i dont know</a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000'
            }}>📈</div>
            <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>All Rounder</h3>
            <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>Hunter</p>
            <p style={{ color: '#000', fontSize: '0.9rem', marginBottom: '1rem' }}>He can do Anything</p>
            <a href="https://x.com/_fazalurrehman0" target="_blank" rel="noopener noreferrer" style={{
              color: '#00ffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              border: '1px solid #00ffff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}>@HUNTER</a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000'
            }}>⚡</div>
            <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>All Rounder 2.0</h3>
            <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>Yoshui</p>
            <p style={{ color: '#000', fontSize: '0.9rem', marginBottom: '1rem' }}>He can do anything but only for girls.(leader of flobbi princess)</p>
            <a href="https://x.com/ikarun696" target="_blank" rel="noopener noreferrer" style={{
              color: '#00ffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              border: '1px solid #00ffff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}>@yoshui</a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000'
            }}>🎯</div>
            <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>Disocrd Manager</h3>
            <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>Rishi</p>
            <p style={{ color: '#000', fontSize: '0.9rem', marginBottom: '1rem' }}>Manage Discord and Hosts Games</p>
            <a href="https://x.com/Rishi12Peace" target="_blank" rel="noopener noreferrer" style={{
              color: '#00ffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              border: '1px solid #00ffff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}>@Rishi</a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000'
            }}>👥</div>
            <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>Community Manager</h3>
            <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>GOJO (not from jujutsu kaisen)</p>
            <p style={{ color: '#000', fontSize: '0.9rem', marginBottom: '1rem' }}>You can see him every where in Flobbi official chats helping people</p>
            <a href="https://x.com/Anonymeme10430" target="_blank" rel="noopener noreferrer" style={{
              color: '#00ffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              border: '1px solid #00ffff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}>@Gojo from Flobbi</a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000'
            }}>🔒</div>
            <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>Flobbi Telegram Manager</h3>
            <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>Lareyyy</p>
            <p style={{ color: '#000', fontSize: '0.9rem', marginBottom: '1rem' }}>Handle Telegram Commnuity</p>
            <a href="https://x.com/lisawang" target="_blank" rel="noopener noreferrer" style={{
              color: '#00ffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              border: '1px solid #00ffff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}>@lareyy</a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000'
            }}>🤝</div>
            <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>Mysterious Person 3.0</h3>
            <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>DukeCM</p>
            <p style={{ color: '#000', fontSize: '0.9rem', marginBottom: '1rem' }}>Mysterious Person 3.0</p>
            <a href="yo" target="_blank" rel="noopener noreferrer" style={{
              color: '#00ffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              border: '1px solid #00ffff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}>i dont know same as alex</a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000'
            }}>🎨</div>
            <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>TikTok handler</h3>
            <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>Hakigen</p>
            <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '1rem' }}>Handle Flobbi TikTok Account</p>
            <a href="yo" target="_blank" rel="noopener noreferrer" style={{
              color: '#00ffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              border: '1px solid #00ffff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}>Account Suspended</a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
