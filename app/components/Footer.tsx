
'use client'
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/flobbi.ico" alt="Flobbi Logo" style={{ width: '36px', height: '36px' }} />
          </div>
          <p className="footer-made">
            Made with <span className="heart">❤️</span> by <a href="https://x.com/_fazalurrehman0" target="_blank" rel="noopener noreferrer"><span className="author">@HUNTER</span></a>
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h3>Socials</h3>
            <ul>
              <li><a href="https://www.tiktok.com/@flobbimeme" target="_blank" rel="noopener noreferrer">🎵 TikTok</a></li>
              <li><a href="https://x.com/FlobbiMeme" target="_blank" rel="noopener noreferrer">🐦 X</a></li>
              <li><a href="https://x.com/i/communities/1935108471860641853" target="_blank" rel="noopener noreferrer">👥 X Community</a></li>
              <li><a href="https://t.me/FlobbiMeme" target="_blank" rel="noopener noreferrer">✈️ Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
