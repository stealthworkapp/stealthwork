import React from "react";
import {
  Shield,
  Globe,
  DollarSign,
  Code,
  CreditCard,
  Search,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const Services = () => (
  <div className="p-8 pt-32 bg-black text-white">
    <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>

    <section className="mb-16">
      <h3 className="text-3xl font-bold mb-8 text-center">VPN Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ServiceCard
          icon={Shield}
          title="VPN Router Setup"
          description="Secure your connection with our custom VPN router configurations."
        />
        <ServiceCard
          icon={Globe}
          title="Global Access"
          description="Bypass geo-restrictions and access your favorite content worldwide."
        />
        <ServiceCard
          icon={DollarSign}
          title="Cost-effective Solutions"
          description="Save on international data plans with our expert VPN setups."
        />
      </div>
    </section>

    <section>
      <h3 className="text-3xl font-bold mb-8 text-center">Website Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ServiceCard
          icon={Code}
          title="Custom Website Development"
          description="Create stunning, responsive websites tailored to your brand and needs."
        />
        <ServiceCard
          icon={CreditCard}
          title="Payment Integration"
          description="Seamlessly integrate secure payment gateways into your website."
        />
        <ServiceCard
          icon={Search}
          title="SEO Optimization"
          description="Improve your website's visibility and ranking in search engine results."
        />
      </div>
    </section>
  </div>
);

export default Services;
