import { Wallet, Clock, Car } from 'lucide-react';

const Profile = () => {
  const mockBookings = [
    {
      id: 1,
      location: "Central Mall Parking",
      slot: "A12",
      date: "2024-03-15",
      duration: "2 hours",
      status: "Completed"
    },
    // Add more mock bookings as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-12 w-12 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-gray-600">john@example.com</p>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Wallet className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Wallet Balance</span>
                </div>
                <span className="font-semibold">₹500</span>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add Money
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Booking History</h2>
            
            <div className="space-y-4">
              {mockBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="border rounded-lg p-4 hover:border-blue-500 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{booking.location}</h3>
                      <p className="text-gray-600">Slot {booking.slot}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {booking.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{booking.date} • {booking.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;