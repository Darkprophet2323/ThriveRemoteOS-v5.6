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
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
      zIndex: 10000,
      overflow: 'hidden'
    }}>
      
      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div style={{
        textAlign: 'center',
        zIndex: 2,
        position: 'relative'
      }}>
        
        {/* Fancy Fan Loader */}
        <div className="fan-loader-container" style={{
          marginBottom: '40px',
          position: 'relative'
        }}>
          <div className="fan-loader">
            <div className="fan-blade"></div>
            <div className="fan-blade"></div>
            <div className="fan-blade"></div>
            <div className="fan-blade"></div>
            <div className="fan-blade"></div>
            <div className="fan-blade"></div>
            <div className="fan-blade"></div>
            <div className="fan-blade"></div>
          </div>
          
          {/* Center Logo */}
          <div className="center-logo">
            🤖
          </div>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: '2.8rem',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #FFD700 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '15px',
          textAlign: 'center',
          letterSpacing: '-0.02em'
        }}>
          ThriveRemoteOS V5.5
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.3rem',
          color: '#ccc',
          marginBottom: '50px',
          textAlign: 'center',
          fontWeight: '300'
        }}>
          AI Job Entertainment Platform
        </p>

        {/* Advanced Progress Bar */}
        <div style={{
          width: '450px',
          height: '8px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '25px',
          position: 'relative',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
        }}>
          <div 
            className="progress-fill"
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #D4AF37, #F4D03F, #FFD700)',
              borderRadius: '4px',
              transition: 'width 0.5s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div className="progress-shine"></div>
          </div>
        </div>

        {/* Status */}
        <p style={{
          fontSize: '1.1rem',
          color: '#D4AF37',
          textAlign: 'center',
          marginBottom: '15px',
          fontWeight: '500'
        }}>
          {status}
        </p>

        {/* Progress Percentage */}
        <p style={{
          fontSize: '1rem',
          color: '#888',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          {progress}% Complete
        </p>
      </div>

      <style jsx>{`
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #D4AF37, #F4D03F);
          border-radius: 50%;
          opacity: 0.6;
          animation: float-up linear infinite;
        }

        @keyframes float-up {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) scale(1);
            opacity: 0;
          }
        }

        .fan-loader-container {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto;
        }

        .fan-loader {
          position: relative;
          width: 120px;
          height: 120px;
          animation: fan-rotate 2s linear infinite;
        }

        .fan-blade {
          position: absolute;
          width: 8px;
          height: 40px;
          background: linear-gradient(180deg, #D4AF37 0%, #F4D03F 50%, transparent 100%);
          border-radius: 4px 4px 0 0;
          transform-origin: 50% 100%;
          top: 10px;
          left: 50%;
          margin-left: -4px;
        }

        .fan-blade:nth-child(1) { transform: rotate(0deg); }
        .fan-blade:nth-child(2) { transform: rotate(45deg); }
        .fan-blade:nth-child(3) { transform: rotate(90deg); }
        .fan-blade:nth-child(4) { transform: rotate(135deg); }
        .fan-blade:nth-child(5) { transform: rotate(180deg); }
        .fan-blade:nth-child(6) { transform: rotate(225deg); }
        .fan-blade:nth-child(7) { transform: rotate(270deg); }
        .fan-blade:nth-child(8) { transform: rotate(315deg); }

        @keyframes fan-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .center-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2.5rem;
          z-index: 3;
          animation: logo-pulse 2s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.5));
        }

        @keyframes logo-pulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.5));
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.1);
            filter: drop-shadow(0 0 20px rgba(212, 175, 55, 0.8));
          }
        }

        .progress-fill {
          position: relative;
          overflow: hidden;
        }

        .progress-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(255,255,255,0.4) 50%, 
            transparent 100%
          );
          animation: shine 2s ease-in-out infinite;
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        /* Additional effects */
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(212, 175, 55, 0.6);
          }
        }

        .fan-loader-container {
          animation: glow 3s ease-in-out infinite;
          border-radius: 50%;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .fan-loader-container {
            width: 100px;
            height: 100px;
          }
          
          .fan-loader {
            width: 100px;
            height: 100px;
          }
          
          .fan-blade {
            width: 6px;
            height: 35px;
          }
          
          .center-logo {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SimpleBootLoader;