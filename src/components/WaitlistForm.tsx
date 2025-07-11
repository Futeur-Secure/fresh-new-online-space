// src/components/Waitlist.tsx
import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

export interface WaitlistProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Waitlist({ isOpen, onClose }: WaitlistProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: ''
  });

  const roles = [
    'C-Suite Executive',
    'VP/Director of Engineering',
    'VP/Director of Product',
    'Head of Operations',
    'Engineering Manager',
    'Product Manager',
    'Technical Lead',
    'Solutions Architect',
    'Other Leadership Role'
  ];

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsLoading(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        role: ''
      });
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));

    setIsLoading(false);
    setIsSubmitted(true);

    // Auto-close after success
    setTimeout(onClose, 3500);
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.company &&
    formData.role;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ease-out"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 ease-out animate-in fade-in-0 zoom-in-98 border border-gray-100">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-50 transition-colors duration-150 z-10"
        >
          <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
        </button>

        {!isSubmitted ? (
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-black rounded-xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
              </div>
              <h2 className="text-2xl font-medium text-gray-900 mb-2">
                Early Access
              </h2>
              <p className="text-gray-500 text-sm">
                Request access to our enterprise platform
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-all duration-150 text-gray-900 placeholder-gray-400 text-sm"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-all duration-150 text-gray-900 placeholder-gray-400 text-sm"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Work email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-all duration-150 text-gray-900 placeholder-gray-400 text-sm"
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-all duration-150 text-gray-900 placeholder-gray-400 text-sm"
                required
              />
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-black focus:border-black transition-all duration-150 text-gray-900 bg-white text-sm appearance-none cursor-pointer"
                required
              >
                <option value="">Select role</option>
                {roles.map(roleOption => (
                  <option key={roleOption} value={roleOption}>
                    {roleOption}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 focus:ring-2 focus:ring-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150 flex items-center justify-center gap-2 mt-6"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="text-sm">Submitting</span>
                  </div>
                ) : (
                  <>
                    <span className="text-sm">Request Access</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center">
                We'll notify you when early access is available
              </p>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-12 h-12 bg-black rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Request Received</h3>
            <p className="text-gray-500 text-sm mb-6">
              We'll be in touch soon with next steps
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Expected Launch</span>
                <span className="font-medium text-gray-900">Q2 2025</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
