import { WrenchIcon, Phone, MapPin, Star } from 'lucide-react';

const Mechanics = () => {
  const mockMechanics = [
    {
      id: 1,
      name: "Auto Care Center",
      rating: 4.5,
      distance: "1.2 km",
      phone: "+91 9876543210",
      address: "123 Service Road, City Center",
      services: ["Emergency Repair", "Battery Service", "Towing"]
    },
    {
      id: 2,
      name: "Quick Fix Auto",
      rating: 4.2,
      distance: "2.5 km",
      phone: "+91 9876543211",
      address: "456 Mechanic Street, Industrial Area",
      services: ["Tire Service", "Engine Repair", "Jump Start"]
    },
    // Add more mock mechanics as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Nearby Mechanics</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMechanics.map((mechanic) => (
          <div key={mechanic.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{mechanic.name}</h2>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm">{mechanic.rating}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm">{mechanic.distance}</span>
                  </div>
                </div>
                <WrenchIcon className="h-8 w-8 text-blue-600" />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Phone className="h-4 w-4 text-gray-400 mr-2" />
                  <a href={`tel:${mechanic.phone}`} className="text-blue-600 hover:underline">
                    {mechanic.phone}
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-1" />
                  <span className="text-gray-600">{mechanic.address}</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {mechanic.services.map((service, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t p-4">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mechanics;