
import { Building, Shield, Landmark, Heart, Briefcase, GraduationCap } from "lucide-react";

export const solutions = [
  {
    id: "enterprise",
    title: "Enterprise",
    icon: Building,
    description: "Comprehensive security architecture for large organizations, focusing on scalability and integration with existing systems.",
    features: [
      "Global security infrastructure",
      "Multi-region deployment",
      "Enterprise-scale monitoring",
      "Advanced threat analysis"
    ]
  },
  {
    id: "financial",
    title: "Financial Services",
    icon: Landmark,
    description: "Specialized security protocols for financial institutions, ensuring compliance with regulations while protecting sensitive data.",
    features: [
      "PCI-DSS compliance",
      "Real-time fraud detection",
      "Secure transaction logging",
      "Multi-factor authentication"
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: Heart,
    description: "HIPAA-compliant security solutions designed to protect patient data while maintaining accessibility for healthcare providers.",
    features: [
      "Patient data protection",
      "Regulatory compliance",
      "Secure medical records",
      "Access control systems"
    ]
  },
  {
    id: "government",
    title: "Government",
    icon: Shield,
    description: "High-clearance security frameworks built to protect critical infrastructure and classified information with multi-layered approaches.",
    features: [
      "Classified information protection",
      "Infrastructure security",
      "Advanced encryption protocols",
      "Security clearance management"
    ]
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    description: "Balanced security solutions for educational institutions, protecting student data while enabling open learning environments.",
    features: [
      "Student data protection",
      "Campus network security",
      "Learning platform protection",
      "Research data security"
    ]
  },
  {
    id: "custom",
    title: "Custom Solutions",
    icon: Briefcase,
    description: "Tailored security frameworks designed specifically for your industry's unique challenges and requirements.",
    features: [
      "Customized security architecture",
      "Industry-specific compliance",
      "Tailored threat response",
      "Specialized protection systems"
    ]
  }
];
