import { BUSINESS_INFO } from '../config';

const About = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your trusted partner for all home repair and maintenance needs
          </p>
        </div>

        {/* Business Description */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {BUSINESS_INFO.description}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With years of experience in the industry, we have built a reputation for providing fast,
            reliable, and affordable repair services across all categories. Our team of skilled
            professionals is dedicated to solving your problems efficiently.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Electrical Services</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Electrical appliance repairing</li>
                <li>✓ Electrical wiring & repairing</li>
                <li>✓ Panel installation & repairs</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-4xl mb-4">🚰</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Plumbing Services</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Plumbing installation</li>
                <li>✓ Fixing old plumbing problems</li>
                <li>✓ Leak & blockage fixes</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-4xl mb-4">🪵</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Carpentry Services</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ New carpentry work</li>
                <li>✓ Old carpentry repair</li>
                <li>✓ Custom furniture installations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Civil Services</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Minor civil repair work</li>
                <li>✓ Small construction fixes</li>
                <li>✓ Finishing work</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Fast & Reliable</h3>
              <p>Quick response time and professional service delivery</p>
            </div>
            <div>
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p>Skilled professionals with years of experience</p>
            </div>
            <div>
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Affordable</h3>
              <p>Competitive pricing with transparent quotes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
