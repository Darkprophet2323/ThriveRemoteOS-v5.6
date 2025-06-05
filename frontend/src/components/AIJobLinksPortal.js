import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AIJobLinksPortal = () => {
  const [selectedCategory, setSelectedCategory] = useState('ai_automation');
  const [aiTools, setAITools] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAITools = async () => {
      try {
        const response = await axios.get(`${API}/content/ai-tools`);
        setAITools(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching AI tools:", error);
        setLoading(false);
      }
    };

    fetchAITools();
  }, []);

  // Enhanced AI Job Application Companies Database
  const aiJobCompanies = {
    ai_automation: {
      name: "🤖 AI Job Automation Platforms",
      description: "Automated job application systems using AI",
      companies: [
        {
          name: "AI Apply",
          description: "Premium AI-powered job application automation platform with high success rates",
          url: "https://aiapply.co/",
          logo: "🎯",
          tier: "Premium",
          features: ["Auto-apply to 1000+ jobs", "Custom cover letters", "Interview scheduling"],
          pricing: "$29/month"
        },
        {
          name: "LazyApply",
          description: "LinkedIn and Indeed automation tool for bulk job applications",
          url: "https://lazyapply.com/",
          logo: "⚡",
          tier: "Popular",
          features: ["LinkedIn integration", "Indeed automation", "Application tracking"],
          pricing: "$19/month"
        },
        {
          name: "Simplify Jobs",
          description: "One-click job applications with AI resume optimization",
          url: "https://simplify.jobs/",
          logo: "🚀",
          tier: "Featured",
          features: ["One-click apply", "Resume optimization", "Application insights"],
          pricing: "Free + Premium"
        },
        {
          name: "JobBot AI",
          description: "Chrome extension for automated job applications with smart filtering",
          url: "https://jobsbot.com/",
          logo: "🤖",
          tier: "Growing",
          features: ["Chrome extension", "Smart filtering", "Application analytics"],
          pricing: "$15/month"
        },
        {
          name: "ApplyBot",
          description: "AI-driven application system with personalized outreach",
          url: "https://applybot.ai/",
          logo: "📧",
          tier: "New",
          features: ["Personalized outreach", "Follow-up automation", "Response tracking"],
          pricing: "$25/month"
        }
      ]
    },
    resume_ai: {
      name: "📄 AI Resume & CV Builders",
      description: "AI-powered resume creation and optimization tools",
      companies: [
        {
          name: "Resume Worded",
          description: "AI-powered resume optimization with instant scoring system",
          url: "https://resumeworded.com/",
          logo: "📊",
          tier: "Premium",
          features: ["AI scoring", "ATS optimization", "LinkedIn optimization"],
          pricing: "$19/month"
        },
        {
          name: "Teal HQ",
          description: "AI career platform with resume builder and job tracking",
          url: "https://tealhq.com/",
          logo: "💎",
          tier: "Featured",
          features: ["Resume builder", "Job tracking", "Career coaching"],
          pricing: "Free + Premium"
        },
        {
          name: "Rezi AI",
          description: "ATS-optimized resume builder with AI content generation",
          url: "https://rezi.ai/",
          logo: "🎨",
          tier: "Popular",
          features: ["ATS optimization", "AI content", "Multiple templates"],
          pricing: "$29/month"
        },
        {
          name: "Enhancv",
          description: "Visual resume builder with AI-powered content suggestions",
          url: "https://enhancv.com/",
          logo: "✨",
          tier: "Creative",
          features: ["Visual design", "AI suggestions", "Modern templates"],
          pricing: "$24.99/month"
        },
        {
          name: "Kickresume",
          description: "AI resume builder with professional templates and cover letters",
          url: "https://kickresume.com/",
          logo: "🎯",
          tier: "Professional",
          features: ["Professional templates", "Cover letters", "Website builder"],
          pricing: "$19/month"
        }
      ]
    },
    interview_ai: {
      name: "🎤 AI Interview Preparation",
      description: "AI-powered interview coaching and preparation platforms",
      companies: [
        {
          name: "Interview Warmup (Google)",
          description: "Google's free AI interview practice platform with real-time feedback",
          url: "https://grow.google/certificates/interview-warmup/",
          logo: "🔥",
          tier: "Free",
          features: ["Real-time feedback", "Industry-specific", "Google-backed"],
          pricing: "Free"
        },
        {
          name: "Interviewing.io",
          description: "Technical interview practice with real engineers and AI feedback",
          url: "https://interviewing.io/",
          logo: "💻",
          tier: "Technical",
          features: ["Real engineers", "Technical focus", "Anonymous practice"],
          pricing: "Free + Premium"
        },
        {
          name: "Pramp",
          description: "Peer-to-peer interview practice with AI-powered matching",
          url: "https://pramp.com/",
          logo: "🤝",
          tier: "Community",
          features: ["Peer practice", "AI matching", "Free sessions"],
          pricing: "Free"
        },
        {
          name: "InterviewBuddy",
          description: "AI-powered interview coach with personalized feedback",
          url: "https://interviewbuddy.in/",
          logo: "🎭",
          tier: "AI Coach",
          features: ["AI coaching", "Personalized feedback", "Multiple scenarios"],
          pricing: "$39/month"
        },
        {
          name: "Big Interview",
          description: "Comprehensive interview training system with AI assessment",
          url: "https://biginterview.com/",
          logo: "🎪",
          tier: "Comprehensive",
          features: ["Video practice", "AI assessment", "Industry-specific"],
          pricing: "$79/month"
        }
      ]
    },
    job_search_ai: {
      name: "🔍 AI Job Search Platforms",
      description: "AI-enhanced job discovery and matching platforms",
      companies: [
        {
          name: "LinkedIn Jobs AI",
          description: "LinkedIn's AI-powered job recommendations and easy apply",
          url: "https://linkedin.com/jobs/",
          logo: "💼",
          tier: "Essential",
          features: ["AI recommendations", "Easy apply", "Network insights"],
          pricing: "Free + Premium"
        },
        {
          name: "ZipRecruiter AI",
          description: "AI job matching with instant notifications and one-click apply",
          url: "https://ziprecruiter.com/",
          logo: "⚡",
          tier: "Fast",
          features: ["Instant matching", "One-click apply", "Salary insights"],
          pricing: "Free"
        },
        {
          name: "Indeed Smart Apply",
          description: "AI-powered job search with smart application features",
          url: "https://indeed.com/",
          logo: "🎯",
          tier: "Popular",
          features: ["Smart apply", "Salary comparison", "Company reviews"],
          pricing: "Free"
        },
        {
          name: "Glassdoor AI",
          description: "AI-driven job search with company insights and salary data",
          url: "https://glassdoor.com/",
          logo: "🏢",
          tier: "Insights",
          features: ["Company insights", "Salary data", "Interview reviews"],
          pricing: "Free + Premium"
        },
        {
          name: "AngelList Talent",
          description: "AI startup job matching with equity and remote opportunities",
          url: "https://angel.co/",
          logo: "👼",
          tier: "Startup",
          features: ["Startup focus", "Equity info", "Remote jobs"],
          pricing: "Free"
        }
      ]
    },
    recruiting_ai: {
      name: "🎪 AI Recruiting & Hiring Platforms",
      description: "Companies using AI for recruitment and hiring processes",
      companies: [
        {
          name: "HireVue",
          description: "AI-powered video interviewing and assessment platform",
          url: "https://hirevue.com/",
          logo: "🎥",
          tier: "Enterprise",
          features: ["Video interviews", "AI assessment", "Predictive analytics"],
          pricing: "Enterprise"
        },
        {
          name: "Pymetrics",
          description: "AI-powered talent matching using neuroscience games",
          url: "https://pymetrics.ai/",
          logo: "🧠",
          tier: "Scientific",
          features: ["Neuroscience games", "Bias reduction", "Talent matching"],
          pricing: "Enterprise"
        },
        {
          name: "Paradox (Olivia)",
          description: "AI recruiting assistant for automated candidate screening",
          url: "https://paradox.ai/",
          logo: "🤖",
          tier: "Automation",
          features: ["AI assistant", "Automated screening", "Candidate engagement"],
          pricing: "Enterprise"
        },
        {
          name: "Workday AI",
          description: "AI-powered HR and recruiting solutions for enterprises",
          url: "https://workday.com/",
          logo: "⚙️",
          tier: "Enterprise",
          features: ["HR automation", "Predictive analytics", "Talent insights"],
          pricing: "Enterprise"
        },
        {
          name: "SmartRecruiters",
          description: "AI-enhanced talent acquisition platform",
          url: "https://smartrecruiters.com/",
          logo: "🎯",
          tier: "Platform",
          features: ["AI sourcing", "Candidate matching", "Hiring analytics"],
          pricing: "Enterprise"
        }
      ]
    }
  };

  const filteredCompanies = searchTerm
    ? Object.values(aiJobCompanies).flatMap(category =>
        category.companies.filter(company =>
          company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          company.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : aiJobCompanies[selectedCategory]?.companies || [];

  const getTierColor = (tier) => {
    const colors = {
      'Premium': '#D4AF37',
      'Featured': '#FF6B6B',
      'Popular': '#4ECDC4',
      'Free': '#45B7D1',
      'Enterprise': '#96CEB4',
      'Technical': '#FFEAA7',
      'Community': '#DDA0DD',
      'New': '#98D8C8',
      'Growing': '#F7DC6F',
      'Essential': '#85C1E9',
      'Fast': '#F8C471',
      'Insights': '#BB8FCE',
      'Startup': '#82E0AA',
      'Scientific': '#F1948A',
      'Automation': '#85C1E9',
      'Platform': '#F8D7DA',
      'Creative': '#D1ECF1',
      'Professional': '#D4EDDA',
      'AI Coach': '#FFF3CD',
      'Comprehensive': '#F4CCCC'
    };
    return colors[tier] || '#E0E0E0';
  };

  if (loading) {
    return (
      <div className="ai-job-portal">
        <div className="portal-header">
          <h2>🤖 AI Job Application Companies Portal</h2>
          <p>Loading entertainment hub for AI job platforms...</p>
        </div>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-job-portal" style={{
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 25%, #f1f3f4 50%, #e9ecef 75%, #f8f9fa 100%)',
      borderRadius: '20px',
      boxShadow: '0 25px 50px rgba(0,0,0,0.1), 0 10px 30px rgba(0,0,0,0.05)',
      border: '1px solid rgba(108, 117, 125, 0.1)',
      overflow: 'hidden'
    }}>
      {/* Sophisticated Header */}
      <div style={{
        background: 'linear-gradient(135deg, #212529 0%, #343a40 50%, #495057 100%)',
        padding: '30px',
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          animation: 'subtleRotate 20s linear infinite'
        }} />
        
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          marginBottom: '8px',
          background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 50%, #e9ecef 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          position: 'relative',
          zIndex: 2
        }}>
          🤖 AI Job Links Portal
        </h2>
        <p style={{
          fontSize: '1.1rem',
          opacity: 0.9,
          fontWeight: '400',
          position: 'relative',
          zIndex: 2
        }}>
          Professional AI-Powered Job Application Platform
        </p>
        <p style={{
          fontSize: '0.9rem',
          opacity: 0.7,
          marginTop: '8px',
          position: 'relative',
          zIndex: 2
        }}>
          Featuring {Object.values(aiJobCompanies).reduce((total, cat) => total + cat.companies.length, 0)}+ Premium AI Platforms
        </p>
        
        {/* Enhanced Search Bar */}
        <div style={{
          marginTop: '25px',
          maxWidth: '400px',
          margin: '25px auto 0',
          position: 'relative',
          zIndex: 2
        }}>
          <input
            type="text"
            placeholder="🔍 Search premium AI job platforms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '15px 20px',
              border: 'none',
              borderRadius: '50px',
              background: 'rgba(255,255,255,0.95)',
              color: '#212529',
              fontSize: '1rem',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              backdropFilter: 'blur(10px)',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.transform = 'scale(1.02)';
              e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
            }}
            onBlur={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
            }}
          />
        </div>
      </div>

      {/* Category Navigation */}
      {!searchTerm && (
        <div className="category-nav">
          {Object.entries(aiJobCompanies).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`category-btn ${selectedCategory === key ? 'active' : ''}`}
            >
              {category.name}
              <span className="company-count">({category.companies.length})</span>
            </button>
          ))}
        </div>
      )}

      {/* Content Section */}
      <div className="portal-content">
        {!searchTerm && (
          <div className="category-header">
            <h3>{aiJobCompanies[selectedCategory]?.name}</h3>
            <p>{aiJobCompanies[selectedCategory]?.description}</p>
          </div>
        )}

        <div className="companies-grid">
          {filteredCompanies.map((company, index) => (
            <div key={index} className="company-card">
              <div className="company-header">
                <div className="company-logo">{company.logo}</div>
                <div className="company-info">
                  <h4>{company.name}</h4>
                  <span 
                    className="tier-badge"
                    style={{ backgroundColor: getTierColor(company.tier) }}
                  >
                    {company.tier}
                  </span>
                </div>
              </div>
              
              <p className="company-description">{company.description}</p>
              
              <div className="features-list">
                {company.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    ✨ {feature}
                  </span>
                ))}
              </div>
              
              <div className="company-footer">
                <div className="pricing">
                  💰 {company.pricing}
                </div>
                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                  onClick={() => {
                    // Log click for analytics
                    console.log(`Visited: ${company.name}`);
                  }}
                >
                  🚀 Visit Platform →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="portal-stats">
        <div className="stat-item">
          <span className="stat-number">{Object.values(aiJobCompanies).reduce((total, cat) => total + cat.companies.length, 0)}+</span>
          <span className="stat-label">AI Platforms</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{Object.keys(aiJobCompanies).length}</span>
          <span className="stat-label">Categories</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">24/7</span>
          <span className="stat-label">Available</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">Free</span>
          <span className="stat-label">to Browse</span>
        </div>
      </div>

      <style jsx>{`
        .ai-job-portal {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          background: linear-gradient(135deg, #0a0a0a, #1a1a1a);
          color: #fff;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .portal-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .portal-header h2 {
          color: #D4AF37;
          font-size: 2.2rem;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .portal-subtitle {
          color: #ccc;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }

        .search-input {
          width: 100%;
          max-width: 400px;
          padding: 12px 20px;
          border: 2px solid #D4AF37;
          border-radius: 25px;
          background: rgba(255,255,255,0.1);
          color: #fff;
          font-size: 1rem;
          backdrop-filter: blur(10px);
        }

        .search-input::placeholder {
          color: #aaa;
        }

        .category-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 30px;
        }

        .category-btn {
          padding: 12px 20px;
          border: none;
          background: rgba(255,255,255,0.1);
          color: #fff;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          font-size: 0.9rem;
        }

        .category-btn:hover {
          background: rgba(212, 175, 55, 0.2);
          transform: translateY(-2px);
        }

        .category-btn.active {
          background: linear-gradient(135deg, #D4AF37, #F4D03F);
          color: #000;
          font-weight: bold;
        }

        .company-count {
          font-size: 0.8rem;
          opacity: 0.7;
          margin-left: 5px;
        }

        .category-header {
          text-align: center;
          margin-bottom: 25px;
        }

        .category-header h3 {
          color: #D4AF37;
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .companies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .company-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 15px;
          padding: 20px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .company-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(212, 175, 55, 0.2);
          border-color: #D4AF37;
        }

        .company-header {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        .company-logo {
          font-size: 2rem;
          margin-right: 15px;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 50%;
        }

        .company-info h4 {
          margin: 0;
          color: #D4AF37;
          font-size: 1.2rem;
        }

        .tier-badge {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.7rem;
          font-weight: bold;
          color: #000;
          margin-top: 4px;
        }

        .company-description {
          margin-bottom: 15px;
          line-height: 1.5;
          color: #ccc;
        }

        .features-list {
          margin-bottom: 15px;
        }

        .feature-tag {
          display: inline-block;
          background: rgba(212, 175, 55, 0.1);
          color: #D4AF37;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.8rem;
          margin: 2px;
          border: 1px solid rgba(212, 175, 55, 0.3);
        }

        .company-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pricing {
          color: #4ECDC4;
          font-weight: bold;
        }

        .visit-btn {
          background: linear-gradient(135deg, #D4AF37, #F4D03F);
          color: #000;
          padding: 8px 16px;
          border-radius: 20px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .visit-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
        }

        .portal-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
          background: rgba(255,255,255,0.05);
          padding: 20px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: bold;
          color: #D4AF37;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #ccc;
        }

        .loading-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid rgba(212, 175, 55, 0.1);
          border-left: 4px solid #D4AF37;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AIJobLinksPortal;