import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CreditCard, Wallet, QrCode } from 'lucide-react';


const Payment = () => {
  const navigate = useNavigate();
  const { slotId } = useParams();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'wallet'>('card');
  const [showQR, setShowQR] = useState(false);
  const [vehicleNumber, setVehicleNumber] = useState('');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically process the payment
    setShowQR(true);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        {!showQR ? (
          <>
            <h1 className="text-3xl font-bold mb-8">Payment Details</h1>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Vehicle Information</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Vehicle Number"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  className={`p-4 rounded-lg border flex items-center justify-center space-x-2
                    ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CreditCard className="h-6 w-6" />
                  <span>Card Payment</span>
                </button>
                <button
                  className={`p-4 rounded-lg border flex items-center justify-center space-x-2
                    ${paymentMethod === 'wallet' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                  onClick={() => setPaymentMethod('wallet')}
                >
                  <Wallet className="h-6 w-6" />
                  <span>Wallet</span>
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Slot Number</span>
                  <span className="font-semibold">Slot {slotId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span className="font-semibold">2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount</span>
                  <span className="font-semibold">₹80</span>
                </div>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Pay Now
            </button>
          </>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              <QrCode className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
              <p className="text-gray-600">Use this QR code for entry and exit</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg inline-block mb-6">

            </div>
            
            <p className="text-sm text-gray-600 mb-6">
              A copy of this QR code has been sent to your email
            </p>
            
            <button
              onClick={() => navigate('/profile')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Booking History
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;