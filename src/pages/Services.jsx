import ServiceCard from '../components/ServiceCard';

const Services = () => {
  // AC Services (Primary Business)
  const acServices = [
    {
      title: 'AC Repair',
      description: 'All brands AC repair at doorstep',
      icon: '🛠️'
    },
    {
      title: 'AC Servicing',
      description: 'Full cleaning, maintenance & performance check',
      icon: '🧹'
    },
    {
      title: 'AC Installation',
      description: 'Window & Split AC installation',
      icon: '⚙️'
    },
    {
      title: 'AC Uninstallation',
      description: 'Safe and careful removal',
      icon: '🧰'
    },
    {
      title: 'Gas Refilling',
      description: 'R22 / R32 / R410A gas recharge',
      icon: '🧪'
    },
    {
      title: 'PCB Repair',
      description: 'Circuit board repair/replacement',
      icon: '🔌'
    },
    {
      title: 'Leakage Fix',
      description: 'Water leakage / noise issue fix',
      icon: '💧'
    }
  ];

  const serviceCategories = [
    {
      category: 'Electrical Services',
      icon: '⚡',
      services: [
        {
          title: 'Appliance Repairing',
          description: 'Expert repair for all electrical appliances',
          icon: '🔧'
        },
        {
          title: 'Wiring & Repairing',
          description: 'Professional installation and repair of wiring systems',
          icon: '⚡'
        }
      ]
    },
    {
      category: 'Plumbing Services',
      icon: '🚰',
      services: [
        {
          title: 'New Plumbing',
          description: 'New pipe and fitting installations',
          icon: '🚰'
        },
        {
          title: 'Repair Old Plumbing Issues',
          description: 'Quick fixes for leaks, blockages, and plumbing issues',
          icon: '🛠️'
        }
      ]
    },
    {
      category: 'Carpentry Services',
      icon: '🪵',
      services: [
        {
          title: 'New Carpentry',
          description: 'Custom furniture and wooden installations',
          icon: '🪚'
        },
        {
          title: 'Old Carpentry Fixes',
          description: 'Restoration and repair of wooden structures',
          icon: '🔨'
        }
      ]
    },
    {
      category: 'Civil Small Works',
      icon: '🏗️',
      services: [
        {
          title: 'Minor Repair Tasks',
          description: 'Small repairs for walls, ceilings, and floors',
          icon: '🧱'
        },
        {
          title: 'Small Construction Fixes',
          description: 'Quick construction fixes and finishing work',
          icon: '⚒️'
        }
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            AC Repair & Servicing is our main business. We also offer complete home repair and maintenance services.
          </p>
        </div>

        {/* AC Services Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <span className="text-4xl mr-4 text-blue-500">❄️</span>
            <div>
              <h2 className="text-3xl font-bold text-blue-700">
                AC Services (Primary Business)
              </h2>
              <div className="h-1 w-20 bg-blue-500 mt-2"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {acServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="border-t border-gray-300 my-8"></div>
        </div>

        {/* Other Service Categories */}
        {serviceCategories.map((categoryData, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center mb-8">
              <span className="text-4xl mr-4">{categoryData.icon}</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {categoryData.category}
                </h2>
                <div className="h-1 w-20 bg-primary mt-2"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {categoryData.services.map((service, serviceIndex) => (
                <ServiceCard
                  key={serviceIndex}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
            {index < serviceCategories.length - 1 && (
              <div className="border-t border-gray-300 my-8"></div>
            )}
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg p-8 text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Our Services?
          </h3>
          <p className="text-white mb-6 text-lg">
            Contact us now for quick and reliable service
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
