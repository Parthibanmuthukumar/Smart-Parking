import  { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Clock, Car } from 'lucide-react';

const SlotBooking = () => {
  const navigate = useNavigate();
  const { locationId } = useParams();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
   
  // Mock data for parking slots
  const slots = Array.from({ length: 20 }, (_, i) => ({
    id: `${i + 1}`,
    status: Math.random() > 0.3 ? 'available' : 'occupied'
  }));

  const handleSlotSelect = (slotId: string) => {
    setSelectedSlot(slotId);
    console.log(locationId)
  };

  const handleBooking = () => {
    if (selectedSlot) {
      navigate(`/payment/${selectedSlot}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">Select Parking Slot</h1>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
            <span>Occupied</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
            <span>Selected</span>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-8">
          {slots.map((slot) => (
            <button
              key={slot.id}
              className={`
                p-4 rounded-lg flex flex-col items-center justify-center
                ${slot.status === 'occupied' ? 'bg-red-100 cursor-not-allowed' : 
                  slot.id === selectedSlot ? 'bg-blue-500 text-white' : 'bg-green-100 hover:bg-green-200'}
              `}
              onClick={() => slot.status === 'available' && handleSlotSelect(slot.id)}
              disabled={slot.status === 'occupied'}
            >
              <Car className="h-6 w-6 mb-2" />
              <span>Slot {slot.id}</span>
            </button>
          ))}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Booking Details</h3>
          <div className="flex items-center justify-between mb-2">
            <span>Selected Slot:</span>
            <span className="font-semibold">{selectedSlot ? `Slot ${selectedSlot}` : 'None'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Duration:</span>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg">
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <option>4 hours</option>
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={handleBooking}
          disabled={!selectedSlot}
          className={`w-full py-3 rounded-lg text-white font-semibold
            ${selectedSlot ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}
          `}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default SlotBooking;