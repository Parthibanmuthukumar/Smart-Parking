import { useNavigate } from 'react-router-dom';
import { MapPin, Car } from 'lucide-react';

const ParkingLocations = () => {
  const navigate = useNavigate();
  
  const mockLocations = [
    {
      id: 1,
      name: "Central Mall Parking",
      address: "123 Main Street",
      availableSpots: 15,
      totalSpots: 50,
      distance: "0.5 km",
      price: "₹40/hour"
    },
    {
      id: 2,
      name: "City Center Parking",
      address: "456 Market Road",
      availableSpots: 8,
      totalSpots: 30,
      distance: "1.2 km",
      price: "₹30/hour"
    },
    // Add more mock locations as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Available Parking Locations</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for parking locations..."
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockLocations.map((location) => (
          <div
            key={location.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gray-200 relative">
              <img
                src={`https://source.unsplash.com/800x600/?parking,garage&${location.id}`}
                alt={location.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
                {location.price}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
              <p className="text-gray-600 mb-4">{location.address}</p>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Car className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm">
                    {location.availableSpots} / {location.totalSpots} spots
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm">{location.distance}</span>
                </div>
              </div>
              
              <button
                onClick={() => navigate(`/booking/${location.id}`)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Slots
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingLocations;