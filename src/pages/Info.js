import React, { useState, useMemo } from "react";
import { Camera } from 'lucide-react';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
// import AmazonProductCard from "../components/AmazonProductCard"; // Assuming you have this component
import amazonProducts from "../data/amazonProducts.json"; // Assuming you have this data file

const Info = () => {
  // State for selected product type
  const [selectedProductType] = useState("All");
  const [activeSection, setActiveSection] = useState('introduction');

  const navItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'routers', label: 'Routers' },
    { id: 'vpn', label: 'VPN Services' },
    { id: 'setup', label: 'Setup Guides' },
    { id: 'resources', label: 'Resources' },
    { id: 'work-recommendations', label: 'Work Recommendations' },
  ];

  // const routers = [
  //   {
  //     name: 'GL.iNet GL-AXT1800 (Flint)',
  //     description: 'Recommended for creating a home VPN server or moving somewhere long term. Features dual-band Wi-Fi 6 and OpenWrt for advanced customization.',
  //     link: 'https://amzn.to/49aQ2ns',
  //   },
  //   {
  //     name: 'GL.iNet GL-MT6000 (Flint 2)',
  //     description: 'More powerful than the Flint router, also recommended for creating your own VPN server. Offers faster speeds and better coverage.',
  //     link: 'https://amzn.to/441VGG7',
  //   },
  //   {
  //     name: 'GL.iNet GL-AXT1800 (Slate AX)',
  //     description: 'The main recommended router for most travelers. Balances performance and portability with Wi-Fi 6 support.',
  //     link: 'https://amzn.to/3pEY8CG',
  //   },
  //   {
  //     name: 'Cheaper Travel Router',
  //     description: 'A more budget-friendly option, normally used as a backup. Suitable for basic needs and shorter trips.',
  //     link: 'https://amzn.to/3XJO3kq',
  //   },
  // ];

  const vpnServices = [
    {
      name: 'ExpressVPN',
      features: [
        'High-speed servers in 94 countries',
        'Strong encryption',
        'No-logs policy',
        '30-day money-back guarantee',
      ],
      recommendation: 'Highly recommended for its reliability and ease of use. Get 30 days free with the referral link.',
      link: 'https://www.expressrefer.com/refer-a-friend/30-days-free?referrer_id=73661680&utm_campaign=referrals&utm_medium=copy_link&utm_source=referral_dashboard',
    },
    {
      name: 'NordVPN',
      features: [
        'Large server network',
        'Double VPN feature',
        'Dedicated IP option',
        'CyberSec feature for ad and malware blocking',
      ],
      recommendation: 'Recommended for users who need a dedicated IP address. The dedicated IP can be safer as you always have the same IP address.',
      link: 'https://ref.nordvpn.com/TvJeQnhcNcB',
    },
    {
      name: 'AzireVPN',
      features: [
        'WireGuard protocol support',
        'No-logs policy',
        'Cheaper option',
      ],
      recommendation: 'Easier to set up in the router and cheaper, but less secure than the other options. Use the referral for 14 days free.',
      link: 'https://www.azirevpn.com/ref/hlif0DEfsD',
    },
  ];

  const chartData = [
    { name: 'Jan', ExpressVPN: 90, NordVPN: 85, AzireVPN: 70 },
    { name: 'Feb', ExpressVPN: 92, NordVPN: 88, AzireVPN: 72 },
    { name: 'Mar', ExpressVPN: 91, NordVPN: 86, AzireVPN: 71 },
    { name: 'Apr', ExpressVPN: 93, NordVPN: 87, AzireVPN: 73 },
  ];

  // Extract unique product types from amazon products
  // const productTypes = useMemo(() => {
  //   const uniqueTypes = new Set(
  //     amazonProducts.products.map((product) => product.productType)
  //   );
  //   return ["All", ...uniqueTypes];
  // }, []);

  // Filter products based on selected product type
  const filteredProducts = useMemo(() => {
    return selectedProductType === "tech"
      ? amazonProducts.products
      : amazonProducts.products.filter(
          (product) => product.productType === selectedProductType
        );
  }, [selectedProductType]);

  return (
    <div className="">
        <div>
          
        <ul className="flex flex-wrap justify-center py-2">
          {navItems.map((item) => (
            <li key={item.id} className="">
              <button
                onClick={() => setActiveSection(item.id)}
                className={`text-white px-3 py-1 rounded ${
                  activeSection === item.id ? 'bg-blue-800' : 'hover:bg-blue-700'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      
        </div>
 

      <div className="container mx-auto px-4 py-8">
        {activeSection === 'introduction' && (
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction to Travel Routers</h2>
            <p className="mb-4">
              Travel routers are compact, portable devices that allow you to create a secure Wi-Fi network while on the go. They're especially useful for digital nomads, frequent travelers, and anyone who needs to maintain a secure internet connection away from home.
            </p>
            <ul className="list-disc pl-6">
              <li>Secure public Wi-Fi connections</li>
              <li>Share a single internet connection among multiple devices</li>
              <li>Create a personal VPN server for enhanced privacy</li>
              <li>Extend Wi-Fi range in hotel rooms or temporary accommodations</li>
            </ul>
          </section>
        )}

        {activeSection === 'routers' && (
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Recommended Travel Routers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((router, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">{router.name}</h3>
                  {/* <p className="mb-4">{router.description}</p> */}
                  <a
                    href={router.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View on Amazon
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'vpn' && (
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">VPN Services</h2>
            <p className="mb-4">
              Using a VPN (Virtual Private Network) with your travel router adds an extra layer of security and privacy to your internet connection. Here are some recommended VPN services:
            </p>
            <div className="space-y-6">
              {vpnServices.map((service, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <ul className="list-disc pl-6 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <p className="mb-4">{service.recommendation}</p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">VPN Performance Comparison</h3>
              <LineChart width={600} height={300} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ExpressVPN" stroke="#8884d8" />
                <Line type="monotone" dataKey="NordVPN" stroke="#82ca9d" />
                <Line type="monotone" dataKey="AzireVPN" stroke="#ffc658" />
              </LineChart>
            </div>
          </section>
        )}

        {activeSection === 'setup' && (
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Setup Guides</h2>
            <p className="mb-4">Setting up your travel router and VPN can seem daunting, but these guides will walk you through the process:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <a href="https://www.expressvpn.com/setup#manual" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  ExpressVPN Manual Setup Guide
                </a>
                 - Follow this guide to set up ExpressVPN on your router manually.
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=oSTA9-bBUIg&t=33s" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  YouTube: Setting up ExpressVPN on Your Router
                </a>
                 - A visual guide to help you set up ExpressVPN on your travel router.
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=LXbDg1v65Qs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  YouTube: Creating a Home VPN Server
                </a>
                 - This video shows you how to create a home VPN server and connect to it using the recommended routers.
              </li>
            </ul>
            <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Setting Up Your Own VPN Server</h3>
              <p>When creating your own home VPN server, follow these steps to verify it's working correctly:</p>
              <ol className="list-decimal pl-6 mt-2">
                <li>Turn off Wi-Fi on your phone</li>
                <li>Download the WireGuard app</li>
                <li>Scan the QR code to add the VPN to your phone</li>
                <li>Try accessing the internet - if successful, your VPN server is working</li>
                <li>Go to <a href="https://www.iplocation.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">iplocation.net</a> to confirm that the IP and location match your home or server location</li>
                <li>Check that your home Internet Service Provider (ISP) is listed under the ISP field</li>
              </ol>
            </div>
          </section>
        )}

        {activeSection === 'resources' && (
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Recommended Gear</h3>
              <div className="border rounded-lg p-4 flex items-center">
                <Camera size={48} className="mr-4" />
                <div>
                  <h4 className="text-lg font-semibold">Portable Monitor</h4>
                  <p className="mb-2">A portable monitor can greatly enhance your productivity while traveling. This recommended model has been tested and used by travelers for several years.</p>
                  <a
                    href="https://amzn.to/47kYkrU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
                  >
                    View on Amazon
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Useful Websites</h3>
              <ul className="list-disc pl-6">
                <li>
                  <a href="https://www.speedtest.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Speedtest.net
                  </a>
                   - Use this site to test your internet speeds. It's particularly useful for verifying VPN performance.
                </li>
                <li>
                  <a href="https://www.iplocation.net/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    IPLocation.net
                  </a>
                   - This site helps you check your IP address location. Use it to confirm your VPN is working correctly.
                </li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === 'work-recommendations' && (
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Work Phone Recommendations</h2>
            <p className="mb-4">When traveling for work or working remotely, it's important to maintain security and separate personal and work activities. Here are some recommendations:</p>
            <ul className="list-disc pl-6">
              <li>Shut off cellular data on your work phone and only connect it to your secure travel router</li>
              <li>Use only your laptop for work-related tasks while traveling to maintain separation between work and personal activities</li>
              <li>If possible, move apps like Okta (for work logins) to your personal phone and leave your work phone at home</li>
              <li>Consider upgrading to an international cell phone plan that provides data coverage worldwide. This allows you to use your personal phone's cellular network as a backup or for quick checks without connecting to potentially unsecured Wi-Fi networks</li>
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default Info;
