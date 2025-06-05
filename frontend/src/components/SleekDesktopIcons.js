import React from 'react';

const SleekDesktopIcons = ({ onIconClick, sounds }) => {
  const icons = [
    {
      id: 'ai-job-portal',
      icon: '🤖',
      label: 'AI Job Links',
      component: 'AIJobLinksPortal',
      size: { width: 800, height: 600 },
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'ai-portal',
      icon: '🎭',
      label: 'AI Career Portal',
      component: 'WaitressJobPortal',
      size: { width: 500, height: 400 },
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 'music-entertainment',
      icon: '🎵',
      label: 'Music Player',
      component: 'MediaPlayerApp',
      size: { width: 450, height: 450 },
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 'virtual-pets',
      icon: '🐾',
      label: 'Virtual Pets',
      component: 'VirtualPetsHub',
      size: { width: 400, height: 300 },
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 'relocate',
      icon: '✈️',
      label: 'Global Jobs',
      component: 'RelocateMeIntegration',
      size: { width: 550, height: 450 },
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 'downloads',
      icon: '📥',
      label: 'Downloads',
      component: 'ProfessionalDownloadManager',
      size: { width: 600, height: 500 },
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 'weather',
      icon: '☁️',
      label: 'Weather',
      component: 'ProfessionalWeatherWidget',
      size: { width: 500, height: 450 },
      gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)'
    },
    {
      id: 'vault',
      icon: '📁',
      label: 'File Vault',
      component: 'VaultApp',
      size: { width: 450, height: 350 },
      gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)'
    },
    {
      id: 'text-editor',
      icon: '✏️',
      label: 'Text Editor',
      component: 'NotepadApp',
      size: { width: 500, height: 400 },
      gradient: 'linear-gradient(135deg, #fdbb2d 0%, #22c1c3 100%)'
    },
    {
      id: 'terminal',
      icon: '⌨️',
      label: 'Terminal',
      component: 'QuantumTerminal',
      size: { width: 400, height: 300 },
      gradient: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)'
    },
    {
      id: 'settings',
      icon: '⚙️',
      label: 'Settings',
      component: 'ProfessionalSettings',
      size: { width: 600, height: 500 },
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'calculator',
      icon: '🧮',
      label: 'Calculator',
      component: 'CalculatorApp',
      size: { width: 320, height: 500 },
      gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
    },
    {
      id: 'media-player',
      icon: '▶️',
      label: 'Media Player',
      component: 'MediaPlayerApp',
      size: { width: 400, height: 500 },
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      id: 'system-status',
      icon: '📊',
      label: 'System Status',
      component: 'SystemStatusApp',
      size: { width: 600, height: 450 },
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  return (
    <div className="desktop-icons-container">
      {icons.map((iconData, index) => (
        <div
          key={iconData.id}
          className="desktop-icon modern-icon bounceIn iconHover hoverFloat hoverGlow"
          style={{
            background: iconData.gradient,
            animationDelay: `${index * 0.1}s`
          }}
          onClick={() => {
            if (sounds?.playClick) sounds.playClick();
            onIconClick(
              iconData.label,
              iconData.icon,
              iconData.component,
              iconData.size.width,
              iconData.size.height
            );
          }}
          onMouseEnter={() => {
            if (sounds?.playHover) sounds.playHover();
          }}
        >
          <div className="icon-wrapper">
            <div className="icon-symbol">
              {iconData.icon}
            </div>
            <div className="floating-particles"></div>
          </div>
          <div className="icon-label">{iconData.label}</div>
        </div>
      ))}
      
      <style jsx>{`
        .desktop-icons-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, 120px);
          grid-template-rows: repeat(auto-fit, 140px);
          gap: 20px;
          padding: 40px;
          pointer-events: none;
        }

        .desktop-icon {
          pointer-events: all;
          width: 100px;
          height: 120px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 20px;
          padding: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            0 4px 16px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .desktop-icon:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.2),
            0 10px 20px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .desktop-icon:active {
          transform: translateY(-5px) scale(1.02);
        }

        .icon-wrapper {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .desktop-icon:hover .icon-wrapper {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .icon-symbol {
          font-size: 2rem;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
          z-index: 2;
          transition: all 0.3s ease;
        }

        .desktop-icon:hover .icon-symbol {
          transform: scale(1.1);
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .floating-particles::before,
        .floating-particles::after {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
        }

        .floating-particles::before {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .floating-particles::after {
          top: 60%;
          right: 20%;
          animation-delay: 1.5s;
        }

        .desktop-icon:hover .floating-particles {
          opacity: 1;
        }

        .icon-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          text-transform: lowercase;
          letter-spacing: 0.5px;
          margin-top: 8px;
          transition: all 0.3s ease;
        }

        .desktop-icon:hover .icon-label {
          color: rgba(255, 255, 255, 1);
          transform: translateY(-2px);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        /* Enhanced gradient animations */
        .desktop-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: inherit;
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .desktop-icon:hover::before {
          opacity: 0.7;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .desktop-icons-container {
            grid-template-columns: repeat(auto-fit, 100px);
            grid-template-rows: repeat(auto-fit, 120px);
            gap: 15px;
            padding: 20px;
          }
          
          .desktop-icon {
            width: 80px;
            height: 100px;
            padding: 10px;
          }
          
          .icon-wrapper {
            width: 50px;
            height: 50px;
          }
          
          .icon-symbol {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SleekDesktopIcons;