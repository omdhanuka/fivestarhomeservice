import { Link } from 'react-router-dom';
import { BUSINESS_INFO, STATISTICS } from '../config';

const Home = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello! I want to book a service. Please assist.`;

  const featuredServices = [
    { icon: '⚡', title: 'Electrical Services', desc: 'Appliance & wiring repair' },
    { icon: '🚰', title: 'Plumbing Services', desc: 'Installation & fixes' },
    { icon: '🪵', title: 'Carpentry Services', desc: 'Furniture & repairs' },
    { icon: '🏗️', title: 'Civil Services', desc: 'Minor repair work' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-blue-500 to-secondary text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Complete Home Repair & Maintenance Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              AC, Electrical, Plumbing, Carpentry & Minor Civil Work — Fast and Reliable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                Book Service Now
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-bold text-lg flex items-center justify-center"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-primary mb-2">{STATISTICS.yearsExperience}</div>
              <p className="text-gray-600 text-lg font-semibold">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-primary mb-2">{STATISTICS.happyCustomers}</div>
              <p className="text-gray-600 text-lg font-semibold">Happy Customers</p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-primary mb-2">{STATISTICS.projectsCompleted}</div>
              <p className="text-gray-600 text-lg font-semibold">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* AC Repair & Servicing Featured Block */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl text-blue-500 mr-3">❄️</span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                AC Repair & Servicing
              </h2>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional AC repair, servicing, installation, and maintenance for all brands. Fast doorstep service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg shadow-md p-6 flex items-start">
              <span className="text-3xl mr-4">🛠️</span>
              <div>
                <h3 className="font-bold text-blue-700 mb-2">AC Repair</h3>
                <p className="text-gray-700">All brands AC repair at doorstep</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg shadow-md p-6 flex items-start">
              <span className="text-3xl mr-4">🧹</span>
              <div>
                <h3 className="font-bold text-blue-700 mb-2">AC Servicing</h3>
                <p className="text-gray-700">Full cleaning, maintenance & performance check</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg shadow-md p-6 flex items-start">
              <span className="text-3xl mr-4">⚙️</span>
              <div>
                <h3 className="font-bold text-blue-700 mb-2">AC Installation</h3>
                <p className="text-gray-700">Window & Split AC installation</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg shadow-md p-6 flex items-start">
              <span className="text-3xl mr-4">🧰</span>
              <div>
                <h3 className="font-bold text-blue-700 mb-2">AC Uninstallation</h3>
                <p className="text-gray-700">Safe and careful removal</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg shadow-md p-6 flex items-start">
              <span className="text-3xl mr-4">🧪</span>
              <div>
                <h3 className="font-bold text-blue-700 mb-2">Gas Refilling</h3>
                <p className="text-gray-700">R22 / R32 / R410A gas recharge</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg shadow-md p-6 flex items-start">
              <span className="text-3xl mr-4">🔌</span>
              <div>
                <h3 className="font-bold text-blue-700 mb-2">PCB Repair</h3>
                <p className="text-gray-700">Circuit board repair/replacement</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg shadow-md p-6 flex items-start">
              <span className="text-3xl mr-4">💧</span>
              <div>
                <h3 className="font-bold text-blue-700 mb-2">Leakage Fix</h3>
                <p className="text-gray-700">Water leakage / noise issue fix</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg shadow-md p-6 flex items-start">
              <span className="text-3xl mr-4">🚨</span>
              <div>
                <h3 className="font-bold text-blue-700 mb-2 flex items-center">
                  Emergency AC Repair
                  <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Optional</span>
                </h3>
                <p className="text-gray-700">Urgent AC breakdown service</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow hover:bg-blue-700 transition-colors"
            >
              Book AC Service
            </a>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fast Service</h3>
              <p className="text-gray-600">Quick response and same-day service availability</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🔧</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Team</h3>
              <p className="text-gray-600">Trained and experienced professionals for all repairs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Affordable Rates</h3>
              <p className="text-gray-600">Transparent pricing with no hidden charges</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Help?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Contact us now and get professional service at your doorstep
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
