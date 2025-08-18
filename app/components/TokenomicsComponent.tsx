
'use client'
import React from 'react';
import PieCSSStyling from './PieCSSStyling';

export default function TokenomicsComponent() {
  return (
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
          Tokenomics
        </h2>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <PieCSSStyling />
        </div>

        <div style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.6' }}>
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ color: '#00ffff', textShadow: '0 0 3px #000000', marginBottom: '15px' }}>Total Supply</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff' }}>1,000,000,000 $FLOBBI</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#00ffff', textShadow: '0 0 3px #000000', marginBottom: '15px' }}>Distribution</h3>
            <div style={{ paddingLeft: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Liquidity Pool:</span>
                <span style={{ color: '#00ffff' }}>60%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Marketing & Development:</span>
                <span style={{ color: '#00ffff' }}>10%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Team & Advisors:</span>
                <span style={{ color: '#00ffff' }}>10%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Community Rewards:</span>
                <span style={{ color: '#00ffff' }}>20%</span>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ color: '#00ffff', textShadow: '0 0 3px #000000', marginBottom: '15px' }}>Utility</h3>
            <ul style={{ paddingLeft: '20px' }}>
              <li>GONNA BE REVEAL SOON</li>
            </ul>
          </div>
        </div>
      </div>

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
      `}</style>
    </div>
  );
}
