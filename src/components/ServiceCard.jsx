const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
