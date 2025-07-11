import React from 'react';
import { Shield, Users, Building, Mail, Calendar, Globe, Database, Check, Info, ChevronRight } from 'lucide-react';

const PricingSection = ({ isDark }) => {
  const plans = [
    {
      id: 'essentials',
      name: 'Vault Essentials',
      target: 'For entrepreneurs',
      discount: '60% OFF',
      originalPrice: '$4.99',
      price: '$1.99',
      billing: '/user/month',
      cta: 'Get Vault Essentials',
      minUsers: 'Minimum 3 users',
      billedAt: '$23.88',
      icon: Shield,
      features: [
        'Unlimited logins, notes, and credit cards',
        'Browser, mobile, and desktop apps',
        'Secure vault item and link sharing',
        'Built-in 2FA authenticator',
        'Dark Web Monitoring',
        'Password health check',
        'Passkey support on all devices',
        'Unlimited hide-my-email aliases'
      ]
    },
    {
      id: 'professional',
      name: 'Vault Professional',
      target: 'For teams',
      discount: '36% OFF',
      originalPrice: '$6.99',
      price: '$4.49',
      billing: '/user/month',
      cta: 'Get Vault Professional',
      minUsers: 'Minimum 3 users',
      billedAt: '$53.88',
      icon: Users,
      isRecommended: true,
      baseFeatures: 'Get everything in Vault Essentials, plus:',
      features: [
        'Detailed activity logs',
        'SSO and SCIM',
        'Enterprise policies',
        'Advanced account protection',
        'File attachment',
        'SIEM integration'
      ]
    },
    {
      id: 'business',
      name: 'Futeur Business Suite',
      target: 'For companies',
      discount: '13% OFF',
      originalPrice: '$14.99',
      price: '$12.99',
      billing: '/user/month',
      cta: 'Get Futeur Business Suite',
      minUsers: '',
      billedAt: '$155.88',
      icon: Building,
      baseFeatures: 'Get everything in Vault Professional, plus:',
      features: [
        '1TB storage per user',
        '15 custom email domains',
        'Secure personal and shared calendar',
        'Cloud storage and sharing for large files',
        'VPN connection for 10 devices per user'
      ],
      suiteIcons: [
        { icon: Mail, label: 'Mail' },
        { icon: Calendar, label: 'Calendar' },
        { icon: Globe, label: 'VPN' },
        { icon: Shield, label: 'Pass' },
        { icon: Database, label: 'Drive' }
      ]
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h3 className={`text-4xl md:text-5xl font-medium mb-12 text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Simple, transparent pricing
        </h3>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                plan.isRecommended 
                  ? `${isDark ? 'bg-slate-800/50 border-cyan-500/50' : 'bg-white border-cyan-400/50'} shadow-xl shadow-cyan-500/20`
                  : `${isDark ? 'bg-slate-800/30 border-slate-700/50' : 'bg-white border-slate-200/50'}`
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-slate-900 px-4 py-1 rounded-full text-xs font-bold">
                    RECOMMENDED
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                      <plan.icon className={`w-5 h-5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`} />
                    </div>
                    <div>
                      <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {plan.target}
                      </div>
                    </div>
                  </div>
                  <div className="bg-cyan-500 text-white px-2 py-1 rounded text-xs font-bold">
                    {plan.discount}
                  </div>
                </div>

                {/* Plan Name */}
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>

                {/* Suite Icons */}
                {plan.suiteIcons && (
                  <div className="flex items-center space-x-2 mb-6">
                    {plan.suiteIcons.map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                          <item.icon className={`w-4 h-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`} />
                        </div>
                        <span className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className={`text-sm line-through ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      {plan.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className={`text-3xl font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {plan.billing}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href="https://vault.futeursecure.com/login"
                  className={`w-full rounded-md group transition-all duration-300 ${
                    plan.isRecommended 
                      ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700'
                      : `${
                          isDark 
                            ? 'bg-slate-700 text-slate-200 hover:bg-slate-600' 
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* Min Users */}
                {plan.minUsers && (
                  <p className={`text-center text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.minUsers}
                  </p>
                )}

                {/* Base Features */}
                {plan.baseFeatures && (
                  <div className="mb-4">
                    <p className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      {plan.baseFeatures}
                    </p>
                  </div>
                )}

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {feature}
                        {(feature.includes('File attachment') || feature.includes('Advanced account protection') || feature.includes('SIEM integration')) && (
                          <Info className={`w-3 h-3 ml-1 inline ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                        )}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Billing */}
                <div className={`mt-6 pt-4 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Billed at {plan.billedAt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;