'use client'
import React, { useState, useEffect } from 'react';
import './TextType.css';

interface TextTypeProps {
  text: string[];
  textColors?: string[];
  typingSpeed?: number;
  pauseDuration?: number;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  textColors = ["#ffffff"],
  typingSpeed = 100,
  pauseDuration = 1500,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentText = text[currentTextIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (currentCharIndex > 0) {
          setDisplayText(currentText.substring(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % text.length);
        }
      } else {
        if (currentCharIndex < currentText.length) {
          setDisplayText(currentText.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentCharIndex, isDeleting, currentTextIndex, text, typingSpeed, pauseDuration]);

  const currentColor = textColors[currentTextIndex % textColors.length];

  return (
    <div className="text-type-container">
      <span 
        style={{ color: currentColor }}
        className="typed-text"
      >
        {displayText}
        <span className="cursor">|</span>
      </span>
    </div>
  );
};

export default TextType;