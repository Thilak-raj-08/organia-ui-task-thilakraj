'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SubDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    totalValue: '',
    description: '',
    quantity: '',
    number: '',
    weight: '',
    height: '',
    length: '',
    width: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#0f2a4b] overflow-hidden shadow-sm">
      <div className="bg-[#0f2a4b] text-white px-4 py-2 text-sm font-semibold">
        Sub Details
      </div>

      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
            <div className="relative">
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b] appearance-none bg-white"
              >
                <option value="">Select type</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Total Value</label>
            <input
              type="text"
              name="totalValue"
              value={formData.totalValue}
              onChange={handleChange}
              placeholder="Enter total value"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Enter number"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Weight (Kg)</label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Enter weight"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Height (m2)</label>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="Enter height"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Length (m)</label>
            <input
              type="text"
              name="length"
              value={formData.length}
              onChange={handleChange}
              placeholder="Enter length"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Width</label>
            <input
              type="text"
              name="width"
              value={formData.width}
              onChange={handleChange}
              placeholder="Enter width"
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f2a4b]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubDetails;
