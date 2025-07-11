import React, { useState, useEffect } from "react";
import { 
  Monitor, 
  Smartphone, 
  Tablet, 
  Shield, 
  Zap, 
  Lock, 
  Activity,
  TrendingUp,
  Clock,
  AlertTriangle,
  CheckCircle,
  Globe,
  Users,
  BarChart3,
  Eye,
  Server,
  Sparkles,
  Star,
  ArrowUpRight,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ModernDashboardPreview = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeDevice, setActiveDevice] = useState('desktop');
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';



  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const devices = [
    { id: 'desktop', icon: Monitor, label: 'Desktop', users: '2.1K' },
    { id: 'tablet', icon: Tablet, label: 'Mobile', users: '847' },
 
  ];

  const dashboardTabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3, badge: null },
    { id: 'activity', label: 'Live Feed', icon: Activity, badge: '12' },
    { id: 'trends', label: 'Insights', icon: TrendingUp, badge: null }
  ];

  const securityMetrics = [
    { 
      label: 'Threats Stopped', 
      value: '2,847', 
      trend: '+23% this week', 
      status: 'excellent',
      icon: Shield,
      description: 'Advanced AI detection'
    },
    { 
      label: 'Data Protected', 
      value: '847TB', 
      trend: '+15% growth', 
      status: 'positive',
      icon: Lock,
      description: 'Encrypted & secured'
    },
    { 
      label: 'Active Users', 
      value: '12.4K', 
      trend: '+8% monthly', 
      status: 'positive',
      icon: Users,
      description: 'Across all devices'
    },
    { 
      label: 'System Health', 
      value: '99.97%', 
      trend: 'Perfect uptime', 
      status: 'excellent',
      icon: Zap,
      description: 'Always available'
    }
  ];

  const recentActivity = [
    { 
      type: 'block', 
      message: 'Sophisticated phishing attempt neutralized', 
      time: '2 min ago', 
      severity: 'high',
      detail: 'AI detected and blocked malicious email campaign'
    },
    { 
      type: 'login', 
      message: 'New team member joined from San Francisco', 
      time: '5 min ago', 
      severity: 'medium',
      detail: 'Sarah Chen • MacBook Pro • Verified'
    },
    { 
      type: 'update', 
      message: 'Security intelligence updated automatically', 
      time: '12 min ago', 
      severity: 'low',
      detail: 'Latest threat definitions deployed globally'
    },
    { 
      type: 'scan', 
      message: 'Deep system scan completed successfully', 
      time: '1 hour ago', 
      severity: 'low',
      detail: '847 files analyzed • Zero threats found'
    }
  ];

  const getActivityIcon = (type) => {
    const iconClass = "w-4 h-4";
    switch (type) {
      case 'block': return <Shield className={iconClass} />;
      case 'login': return <Users className={iconClass} />;
      case 'update': return <Sparkles className={iconClass} />;
      case 'scan': return <Eye className={iconClass} />;
      default: return <Activity className={iconClass} />;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return isDarkMode ? 'text-red-400 bg-red-500/10 border-red-500/20' : 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return isDarkMode ? 'text-amber-400 bg-amber-500/10 border-amber-500/20' : 'text-amber-600 bg-amber-50 border-amber-200';
      case 'low': return isDarkMode ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' : 'text-emerald-600 bg-emerald-50 border-emerald-200';
      default: return isDarkMode ? 'text-blue-400 bg-blue-500/10 border-blue-500/20' : 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  const renderOverviewTab = () => (
    <div className="space-y-8">
      {/* Hero Status */}
      <div className="text-center space-y-4">
        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
          isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
        }`}>
          <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
          All systems running beautifully
        </div>
        <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Your security is our obsession
        </h3>
        <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-slate-600'} max-w-md mx-auto`}>
          Advanced AI protection working 24/7 to keep your team and data safe from evolving threats
        </p>
      </div>

      {/* Enhanced Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {securityMetrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div key={idx} className={`group p-5 rounded-2xl border transition-all duration-500 hover:scale-105 cursor-pointer ${
              isDarkMode 
                ? 'bg-slate-800/40 border-white/5 hover:bg-slate-800/60 hover:border-white/10' 
                : 'bg-white/80 border-slate-200/30 hover:bg-white hover:border-slate-300/50 hover:shadow-lg'
            }`}
            style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20' : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <ArrowUpRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                  isDarkMode ? 'text-white/40' : 'text-slate-400'
                }`} />
              </div>
              <div className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {metric.value}
              </div>
              <div className={`text-xs font-medium mb-2 ${isDarkMode ? 'text-white/70' : 'text-slate-700'}`}>
                {metric.label}
              </div>
              <div className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-slate-500'}`}>
                {metric.description}
              </div>
              <div className={`text-xs font-medium mt-2 ${
                metric.status === 'excellent' ? 'text-emerald-400' : 'text-blue-400'
              }`}>
                {metric.trend}
              </div>
            </div>
          );
        })}
      </div>

      <div className={`relative p-6 rounded-2xl border ${
  isDarkMode ? 'bg-slate-800 border-white/10' : 'bg-white border-slate-200'
}`}>
  <div className="relative">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Threat Intelligence
        </h4>
        <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>
          Real-time protection insights across your organization
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <Star className={`w-4 h-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-500'}`} fill="currentColor" />
        <span className={`text-sm font-medium ${isDarkMode ? 'text-white/80' : 'text-slate-700'}`}>
          AI Powered
        </span>
      </div>
    </div>

    <div className="flex items-end justify-between h-32 space-x-3">
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => {
        const height = Math.floor(Math.random() * 60 + 30); // Static height %
        return (
          <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end">
            <div
              className={`w-full rounded-t-lg ${
                isDarkMode
                  ? 'bg-purple-500'
                  : 'bg-gradient-to-t from-blue-400 to-purple-500'
              }`}
              style={{
                height: `${height}%`
              }}
            />
            <span className={`text-xs font-medium mt-1 ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>
              {day}
            </span>
          </div>
        );
      })}
    </div>
  </div>
</div>


    </div>
  );

  const renderActivityTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Live Security Feed
          </h3>
          <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>
            What's happening right now across your infrastructure
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <span className={`text-xs font-medium ${isDarkMode ? 'text-white/70' : 'text-slate-600'}`}>
            Live
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {recentActivity.map((activity, idx) => (
          <div key={idx} className={`group p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
            isDarkMode 
              ? 'bg-slate-800/30 border-white/5 hover:bg-slate-800/50 hover:border-white/10' 
              : 'bg-white/60 border-slate-200/50 hover:bg-white hover:border-slate-300/50 hover:shadow-md'
          }`}>
            <div className="flex items-start space-x-4">
              <div className={`flex-shrink-0 p-2.5 rounded-xl border ${getSeverityColor(activity.severity)}`}>
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  {activity.message}
                </p>
                <p className={`text-xs mb-2 ${isDarkMode ? 'text-white/50' : 'text-slate-500'}`}>
                  {activity.detail}
                </p>
                <div className="flex items-center space-x-2">
                  <Clock className={`w-3 h-3 ${isDarkMode ? 'text-white/40' : 'text-slate-400'}`} />
                  <span className={`text-xs ${isDarkMode ? 'text-white/50' : 'text-slate-500'}`}>
                    {activity.time}
                  </span>
                </div>
              </div>
              <ArrowUpRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${
                isDarkMode ? 'text-white/40' : 'text-slate-400'
              }`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTrendsTab = () => (
    <div className="space-y-8">
      <div>
        <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Security Insights
        </h3>
        <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>
          Discover patterns and optimize your security posture
        </p>
      </div>

      {/* Trend Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Threats Prevented', value: '2,847', change: '+34%', trend: 'up', color: 'emerald' },
          { label: 'Response Time', value: '0.3s', change: '-12%', trend: 'down', color: 'blue' },
          { label: 'Team Satisfaction', value: '9.7/10', change: '+0.2', trend: 'up', color: 'purple' }
        ].map((stat, idx) => (
          <div key={idx} className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
            isDarkMode ? 'bg-slate-800/40 border-white/5' : 'bg-white/80 border-slate-200/30'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <span className={`text-sm font-medium ${isDarkMode ? 'text-white/70' : 'text-slate-700'}`}>
                {stat.label}
              </span>
              <div className={`p-1.5 rounded-lg ${
                stat.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                stat.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                'bg-purple-500/10 text-purple-400'
              }`}>
                <TrendingUp className="w-3 h-3" />
              </div>
            </div>
            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {stat.value}
            </div>
            <div className={`text-sm font-medium ${
              stat.trend === 'up' ? 'text-emerald-400' : 'text-blue-400'
            }`}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>

      {/* Weekly Overview */}
      <div className={`p-6 rounded-2xl border ${
        isDarkMode ? 'bg-slate-800/20 border-white/5' : 'bg-gradient-to-br from-slate-50 to-blue-50/50 border-slate-200/30'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Weekly Security Overview
            </h4>
            <p className={`text-sm ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>
              Your protection in action
            </p>
          </div>
          <div className={`px-3 py-1.5 rounded-full text-xs font-medium ${
            isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-700'
          }`}>
            This Week
          </div>
        </div>
        
        <div className="flex items-end space-x-2 h-40">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => {
            const threats = Math.floor(Math.random() * 80) + 20;
            const scans = Math.floor(Math.random() * 30) + 10;
            const logins = Math.floor(Math.random() * 50) + 20;
            
            return (
              <div key={idx} className="flex-1 flex flex-col items-center space-y-2">
                <div className="w-full space-y-1">
                  <div 
                    className="w-full rounded-t bg-gradient-to-t from-blue-400 to-blue-500 transition-all duration-1000"
                    style={{ 
                      height: `${threats}px`,
                      animationDelay: `${idx * 100}ms`,
                      transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
                      transformOrigin: 'bottom'
                    }}
                  />
                  <div 
                    className="w-full bg-gradient-to-t from-purple-400 to-purple-500 transition-all duration-1000"
                    style={{ 
                      height: `${scans}px`,
                      animationDelay: `${idx * 100 + 50}ms`,
                      transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
                      transformOrigin: 'bottom'
                    }}
                  />
                  <div 
                    className="w-full rounded-b bg-gradient-to-t from-emerald-400 to-emerald-500 transition-all duration-1000"
                    style={{ 
                      height: `${logins}px`,
                      animationDelay: `${idx * 100 + 100}ms`,
                      transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
                      transformOrigin: 'bottom'
                    }}
                  />
                </div>
                <span className={`text-xs font-medium ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>
                  {day}
                </span>
              </div>
            );
          })}
        </div>
        
        <div className="flex items-center justify-center space-x-8 mt-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded bg-gradient-to-r from-blue-400 to-blue-500"></div>
            <span className={isDarkMode ? 'text-white/70' : 'text-slate-700'}>Threats Blocked</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded bg-gradient-to-r from-purple-400 to-purple-500"></div>
            <span className={isDarkMode ? 'text-white/70' : 'text-slate-700'}>Security Scans</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded bg-gradient-to-r from-emerald-400 to-emerald-500"></div>
            <span className={isDarkMode ? 'text-white/70' : 'text-slate-700'}>Safe Logins</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-950 via-slate-950 to-slate-950' 
        : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
       
        {/* Modern Header */}
        <div className="text-center mb-12">
         
          <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Security that feels like magic
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-white/70' : 'text-slate-600'} max-w-2xl mx-auto`}>
            Experience our intuitive dashboard that makes enterprise security simple, beautiful, and incredibly powerful
          </p>
        </div>

        {/* Enhanced Device Selection */}
        <div className="hidden sm:flex justify-center mb-12 px-4">
  <div className={`inline-flex rounded-2xl p-1.5 backdrop-blur-sm ${
    isDarkMode ? 'bg-slate-900/60 border border-white/10' : 'bg-white/90 border border-slate-200/60 shadow-lg'
  }`}>
    {devices.map((device) => {
      const Icon = device.icon;
      return (
        <button
          key={device.id}
          onClick={() => setActiveDevice(device.id)}
          className={`flex items-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${
            activeDevice === device.id
              ? (isDarkMode ? 'bg-white text-slate-900 shadow-lg' : 'bg-slate-900 text-white shadow-lg')
              : (isDarkMode ? 'text-white/60 hover:text-white/80 hover:bg-white/5' : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100')
          }`}
        >
          <Icon className="w-4 h-4 mr-2" />
          {device.label}
          <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
            activeDevice === device.id
              ? (isDarkMode ? 'bg-slate-200 text-slate-700' : 'bg-white/20 text-white/80')
              : (isDarkMode ? 'bg-white/10 text-white/50' : 'bg-slate-200 text-slate-500')
          }`}>
            {device.users}
          </span>
        </button>
      );
    })}
  </div>
</div>




        {/* Device Preview with Enhanced Design */}
        <div className="relative">
          <div 
            className={`relative mx-auto transition-all duration-700 ${
              activeDevice === 'mobile' ? 'max-w-sm' : 
              activeDevice === 'tablet' ? 'max-w-4xl' : 'max-w-6xl'
            }`}
            style={{
              transform: `perspective(1200px) rotateX(${(mousePosition.y - 50) * 0.02}deg) rotateY(${(mousePosition.x - 50) * 0.02}deg)`
            }}
          >
            {/* Enhanced Device Frame */}
            <div className={`relative rounded-3xl overflow-hidden backdrop-blur-xl border transition-all duration-500 ${
              isDarkMode 
                ? 'bg-slate-900/95 border-white/10 shadow-2xl shadow-blue-500/20' 
                : 'bg-white/98 border-slate-200/50 shadow-2xl shadow-slate-900/10'
            }`}>
              
              {/* Refined Device Header */}
              <div className={`flex items-center justify-between px-8 py-5 border-b backdrop-blur-sm ${
                isDarkMode ? 'border-white/10 bg-slate-800/30' : 'border-slate-200/50 bg-white/50'
              }`}>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-white" />
                    <span className={`text-sm font-semibold ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>
                      Futeur Security
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className={`text-xs font-medium ${isDarkMode ? 'text-white/70' : 'text-slate-600'}`}>
                      Secure & Online
                    </span>
                  </div>
                  <div className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                    isDarkMode ? 'bg-slate-700 text-white/80' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {activeDevice.charAt(0).toUpperCase() + activeDevice.slice(1)}
                  </div>
                </div>
              </div>

              {/* Enhanced Dashboard Navigation */}
              <div className={`flex border-b ${isDarkMode ? 'border-white/10' : 'border-slate-200/50'}`}>
                {dashboardTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center px-8 py-5 text-sm font-medium transition-all duration-300 border-b-2 ${
                        activeTab === tab.id
                          ? (
                              isDarkMode
                                ? 'border-blue-400 text-white bg-blue-500/5'
                                : 'border-blue-600 text-gray-900 bg-blue-50'
                            )
                          : (
                              isDarkMode
                                ? 'border-transparent hover:border-white/20 text-gray-300 hover:text-white/80'
                                : 'border-transparent hover:border-gray-400 text-gray-600 hover:text-black'
                            )
                      }`}
                      
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {tab.label}
                        {tab.badge && (
                          <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                            activeTab === tab.id
                              ? (isDarkMode ? 'bg-blue-400 text-blue-900' : 'bg-blue-600 text-white')
                              : (isDarkMode ? 'bg-white/10 text-white/70' : 'bg-slate-200 text-slate-600')
                          }`}>
                            {tab.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
  
                {/* Dashboard Content */}
                <div className="p-8">
                  {activeTab === 'overview' && renderOverviewTab()}
                  {activeTab === 'activity' && renderActivityTab()}
                  {activeTab === 'trends' && renderTrendsTab()}
                </div>
              </div>
  
              {/* Subtle Device Glow Effect */}
              <div className={`absolute inset-0 -z-10 rounded-3xl opacity-20 blur-xl ${
                isDarkMode ? 'bg-blue-500' : 'bg-slate-400'
              }`} style={{ transform: 'scale(1.02)' }}></div>
            </div>
          </div>

        </div>
      </div>
    );
  };
  
  export default ModernDashboardPreview;