import { BUSINESS_INFO, ABOUT_CONTENT } from '../config';

const About = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {ABOUT_CONTENT.description}
            </p>
            <div className="flex items-center justify-center space-x-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary">{BUSINESS_INFO.experience}</p>
                <p className="text-gray-600">Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">1000+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ABOUT_CONTENT.whyChooseUs.map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Service Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {BUSINESS_INFO.serviceAreas.map((area, index) => (
              <span
                key={index}
                className="bg-primary text-white px-4 py-2 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
