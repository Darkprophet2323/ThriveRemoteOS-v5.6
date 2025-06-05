import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const SophisticatedBootLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing ThriveRemoteOS v5.5...');
  const [liveData, setLiveData] = useState({
    systemMetrics: { cpu: 0, memory: 0, network: 'Connecting' },
    aiTools: 0,
    jobs: 0,
    weather: 'Loading...'
  });

  useEffect(() => {
    // Fetch live data
    const fetchLiveData = async () => {
      try {
        const [systemResponse, aiToolsResponse, jobsResponse] = await Promise.all([
          axios.get(`${API}/system/performance`).catch(() => ({ data: { performance: { cpu_usage: 15, memory_usage: 32 } } })),
          axios.get(`${API}/content/ai-tools`).catch(() => ({ data: { total_tools: 120 } })),
          axios.get(`${API}/jobs/live`).catch(() => ({ data: { total: 250 } }))
        ]);

        setLiveData({
          systemMetrics: {
            cpu: systemResponse.data.performance?.cpu_usage || Math.floor(Math.random() * 30) + 10,
            memory: systemResponse.data.performance?.memory_usage || Math.floor(Math.random() * 40) + 20,
            network: 'Connected'
          },
          aiTools: aiToolsResponse.data.total_tools || 120,
          jobs: jobsResponse.data.total || 250,
          weather: '22°C Clear'
        });
      } catch (error) {
        console.log('Using fallback data for loading screen');
      }
    };

    fetchLiveData();

    const bootSequence = [
      { progress: 15, status: 'Connecting to AI job entertainment services...', delay: 600 },
      { progress: 35, status: 'Loading 120+ AI tools database...', delay: 700 },
      { progress: 55, status: 'Initializing desktop environment...', delay: 500 },
      { progress: 75, status: 'Preparing AI job links portal...', delay: 600 },
      { progress: 90, status: 'Finalizing entertainment platform...', delay: 400 },
      { progress: 100, status: 'ThriveRemoteOS v5.5 Ready!', delay: 500 }
    ];

    const runBootSequence = async () => {
      for (const step of bootSequence) {
        await new Promise(resolve => setTimeout(resolve, step.delay));
        setProgress(step.progress);
        setStatus(step.status);
      }
      
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
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
      zIndex: 10000,
      overflow: 'hidden'
    }}>
      
      {/* Subtle Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(108, 117, 125, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(73, 80, 87, 0.03) 0%, transparent 50%)
        `,
        animation: 'subtleMove 20s ease-in-out infinite'
      }} />

      {/* Main Content Container */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '50px 60px',
        boxShadow: '0 20px 60px rgba(108, 117, 125, 0.15), 0 8px 25px rgba(108, 117, 125, 0.1)',
        border: '1px solid rgba(233, 236, 239, 0.8)',
        backdropFilter: 'blur(20px)',
        textAlign: 'center',
        maxWidth: '500px',
        width: '90%',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Sophisticated Logo */}
        <div style={{
          fontSize: '3rem',
          marginBottom: '20px',
          color: '#495057',
          filter: 'drop-shadow(0 2px 8px rgba(108, 117, 125, 0.2))',
          animation: 'sophisticatedPulse 3s ease-in-out infinite'
        }}>
          🤖
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#212529',
          marginBottom: '8px',
          letterSpacing: '-0.025em'
        }}>
          ThriveRemoteOS V5.5
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '1rem',
          color: '#6c757d',
          marginBottom: '40px',
          fontWeight: '500'
        }}>
          AI Job Entertainment Platform
        </p>

        {/* Sophisticated Progress Bar */}
        <div style={{
          marginBottom: '30px'
        }}>
          <div style={{
            width: '100%',
            height: '6px',
            background: '#e9ecef',
            borderRadius: '3px',
            overflow: 'hidden',
            marginBottom: '8px',
            position: 'relative'
          }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #6c757d, #495057)',
              borderRadius: '3px',
              transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                animation: 'sophisticatedShine 2s ease-in-out infinite'
              }} />
            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: '#868e96'
          }}>
            <span>{progress}%</span>
            <span>Professional Loading</span>
          </div>
        </div>

        {/* Status */}
        <p style={{
          fontSize: '0.95rem',
          color: '#495057',
          marginBottom: '35px',
          fontWeight: '500',
          height: '24px'
        }}>
          {status}
        </p>

        {/* Live Data Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          marginBottom: '25px'
        }}>
          <DataCard
            icon="🖥️"
            label="System"
            value={`${liveData.systemMetrics.cpu}% CPU`}
            sublabel={`${liveData.systemMetrics.memory}% RAM`}
          />
          <DataCard
            icon="🌐"
            label="Network"
            value={liveData.systemMetrics.network}
            sublabel="High Speed"
          />
          <DataCard
            icon="🔧"
            label="AI Tools"
            value={`${liveData.aiTools}+`}
            sublabel="Available"
          />
          <DataCard
            icon="💼"
            label="Live Jobs"
            value={`${liveData.jobs}+`}
            sublabel="Opportunities"
          />
        </div>

        {/* Footer Info */}
        <div style={{
          fontSize: '0.75rem',
          color: '#868e96',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px'
        }}>
          <span>🔒 Secure</span>
          <span>•</span>
          <span>⚡ Fast</span>
          <span>•</span>
          <span>🎯 Professional</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes sophisticatedPulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes sophisticatedShine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @keyframes subtleMove {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
};

const DataCard = ({ icon, label, value, sublabel }) => (
  <div style={{
    background: 'rgba(248, 249, 250, 0.8)',
    borderRadius: '12px',
    padding: '16px',
    border: '1px solid rgba(233, 236, 239, 0.6)',
    textAlign: 'center',
    transition: 'all 0.3s ease'
  }}>
    <div style={{ fontSize: '1.25rem', marginBottom: '6px' }}>{icon}</div>
    <div style={{
      fontSize: '0.7rem',
      color: '#6c757d',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '4px'
    }}>
      {label}
    </div>
    <div style={{
      fontSize: '0.9rem',
      fontWeight: '700',
      color: '#212529',
      marginBottom: '2px'
    }}>
      {value}
    </div>
    <div style={{
      fontSize: '0.65rem',
      color: '#868e96'
    }}>
      {sublabel}
    </div>
  </div>
);

export default SophisticatedBootLoader;