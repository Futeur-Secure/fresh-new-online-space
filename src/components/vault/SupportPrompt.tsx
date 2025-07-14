
import React from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SupportPrompt: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-light text-[#121212] mb-3">
            Didn't find what you need?
          </h3>
          <p className="text-[#121212]/70 text-lg">
            Our support team is here to help you succeed with FuteurVault
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Chat Support */}
          <div className="p-6 rounded-2xl bg-[#f9fafa] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300">
            <MessageCircle className="w-8 h-8 text-[#3367d6] mx-auto mb-4" />
            <h4 className="font-medium text-[#121212] mb-2">Live Chat</h4>
            <p className="text-sm text-[#121212]/70 mb-4">
              Get instant help from our support team
            </p>
            <Button 
              className="w-full bg-[#3367d6] hover:bg-[#3367d6]/90 text-white rounded-xl"
              onClick={() => {
                // Add chat widget integration here
                console.log('Opening chat widget');
              }}
            >
              Start Chat
            </Button>
          </div>

          {/* Email Support */}
          <div className="p-6 rounded-2xl bg-[#f9fafa] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300">
            <Mail className="w-8 h-8 text-[#3367d6] mx-auto mb-4" />
            <h4 className="font-medium text-[#121212] mb-2">Email Support</h4>
            <p className="text-sm text-[#121212]/70 mb-4">
              Detailed help via email within 24 hours
            </p>
            <Button 
              variant="outline" 
              className="w-full border-[#3367d6] text-[#3367d6] hover:bg-[#3367d6] hover:text-white rounded-xl"
              onClick={() => {
                window.location.href = 'mailto:support@futeursecure.com';
              }}
            >
              Send Email
            </Button>
          </div>

          {/* Phone Support */}
          <div className="p-6 rounded-2xl bg-[#f9fafa] hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300">
            <Phone className="w-8 h-8 text-[#3367d6] mx-auto mb-4" />
            <h4 className="font-medium text-[#121212] mb-2">Phone Support</h4>
            <p className="text-sm text-[#121212]/70 mb-4">
              Enterprise customers get priority phone support
            </p>
            <Button 
              variant="outline" 
              className="w-full border-[#3367d6] text-[#3367d6] hover:bg-[#3367d6] hover:text-white rounded-xl"
              onClick={() => {
                window.location.href = 'tel:+1-800-FUTEUR-1';
              }}
            >
              Call Us
            </Button>
          </div>
        </div>

        <div className="mt-12 p-6 bg-[#3367d6]/5 rounded-2xl">
          <p className="text-sm text-[#121212]/70">
            <strong>Enterprise customers:</strong> Access priority support through your dedicated success manager or our 24/7 enterprise hotline.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportPrompt;
