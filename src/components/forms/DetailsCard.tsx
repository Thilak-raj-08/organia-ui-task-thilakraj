'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('../ui/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
      <span className="text-gray-500">Loading map...</span>
    </div>
  ),
});

interface DetailsCardProps {
  title: string;
  cardNumber: number;
}

const DetailsCard = ({ title, cardNumber }: DetailsCardProps) => {
  const defaultLocations = {
    1: { lat: 9.6615, lng: 80.0255, city: '' },
    2: { lat: 6.9271, lng: 79.8612, city: '' },
  };

  const defaultLocation =
    defaultLocations[cardNumber as keyof typeof defaultLocations] || defaultLocations[1];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactPerson: '',
    contactNumber: '',
    latitude: defaultLocation.lat.toFixed(6),
    longitude: defaultLocation.lng.toFixed(6),
    province: '',
    district: '',
    city: defaultLocation.city,
    street: '',
    addressNote: '',
  });

  const handleLocationSelect = (lat: number, lng: number) => {
    setFormData({
      ...formData,
      latitude: lat.toFixed(6),
      longitude: lng.toFixed(6),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#0f2a4b] overflow-hidden flex-1 shadow-sm">
      <div className="bg-[#0f2a4b] text-white px-4 py-2 text-sm font-semibold">
        {title}
      </div>

      <div className="p-5 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Person Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              placeholder="Enter contact person name"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="+94"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
        </div>

        <div className="my-2">
          <MapComponent
            onLocationSelect={handleLocationSelect}
            defaultLat={defaultLocation.lat}
            defaultLng={defaultLocation.lng}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
            <input
              type="text"
              name="latitude"
              value={formData.latitude}
              readOnly
              placeholder="0.000000"
              className="w-full px-4 py-2 border border-gray-300 rounded-full bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
            <input
              type="text"
              name="longitude"
              value={formData.longitude}
              readOnly
              placeholder="0.000000"
              className="w-full px-4 py-2 border border-gray-300 rounded-full bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Province <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              placeholder="Select the province"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              District <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="Enter district"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Street / Lane <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Enter street name"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address Note <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="addressNote"
              value={formData.addressNote}
              onChange={handleChange}
              placeholder="Enter address note"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
