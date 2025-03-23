import { useNavigate } from 'react-router-dom';
import { Car, MapPin, QrCode, CreditCard } from 'lucide-react';

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-xl font-bold text-center mb-8 text-blue-800">
          Welcome to SmartPark
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl">
            <Car className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Parking</h3>
            <p className="text-gray-600 text-center">
              Find and book parking spots in high-traffic areas with ease
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl">
            <MapPin className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Availability</h3>
            <p className="text-gray-600 text-center">
              View real-time parking slot availability in your desired location
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl">
            <QrCode className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">QR Access</h3>
            <p className="text-gray-600 text-center">
              Contactless entry and exit with QR code verification
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl">
            <CreditCard className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Payments</h3>
            <p className="text-gray-600 text-center">
              Multiple payment options including wallet and online payments
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/register')}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transform transition hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;