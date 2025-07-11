
import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "10+ years of industry experience",
    "Cutting-edge technology stack",
    "Agile development methodology",
    "24/7 support and maintenance",
    "Scalable and future-proof solutions",
    "Data-driven approach to optimization"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're passionate about creating digital experiences that not only look amazing 
              but also drive real business results. Our team combines creativity with technical 
              expertise to deliver solutions that exceed expectations.
            </p>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="p-4">
                    <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-purple-600 mb-2">300+</div>
                    <div className="text-sm text-gray-600">Projects Done</div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
