import React, { useState, useEffect } from 'react';

const SimpleBootLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing ThriveRemoteOS v5.5...');

  useEffect(() => {
    const bootSequence = [
      { progress: 20, status: 'Loading AI Job Entertainment Platform...', delay: 800 },
      { progress: 40, status: 'Connecting to backend services...', delay: 600 },
      { progress: 60, status: 'Loading AI job links database...', delay: 700 },
      { progress: 80, status: 'Initializing desktop environment...', delay: 500 },
      { progress: 100, status: 'ThriveRemoteOS v5.5 Ready!', delay: 400 }
    ];

    const runBootSequence = async () => {
      for (const step of bootSequence) {
        await new Promise(resolve => setTimeout(resolve, step.delay));
        setProgress(step.progress);
        setStatus(step.status);
      }
      
      // Complete the loading
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800);
    };

    runBootSequence();
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
      zIndex: 10000
    }}>
      
      {/* Logo */}
      <div style={{
        fontSize: '4rem',
        marginBottom: '20px',
        animation: 'pulse 2s ease-in-out infinite'
      }}>
        🤖
      </div>

      {/* Title */}
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#D4AF37',
        marginBottom: '10px',
        textAlign: 'center'
      }}>
        ThriveRemoteOS V5.5
      </h1>

      {/* Subtitle */}
      <p style={{
        fontSize: '1.2rem',
        color: '#ccc',
        marginBottom: '40px',
        textAlign: 'center'
      }}>
        AI Job Entertainment Platform
      </p>

      {/* Progress Bar */}
      <div style={{
        width: '400px',
        height: '6px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '3px',
        overflow: 'hidden',
        marginBottom: '20px'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #D4AF37, #F4D03F)',
          borderRadius: '3px',
          transition: 'width 0.5s ease'
        }} />
      </div>

      {/* Status */}
      <p style={{
        fontSize: '1rem',
        color: '#D4AF37',
        textAlign: 'center',
        marginBottom: '10px'
      }}>
        {status}
      </p>

      {/* Progress Percentage */}
      <p style={{
        fontSize: '0.9rem',
        color: '#888',
        textAlign: 'center'
      }}>
        {progress}% Complete
      </p>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default SimpleBootLoader;