import React, { useState } from 'react';
import Header from './Header';

const MyProperties = () => {
  const [statusFilter, setStatusFilter] = useState("All");

  return (
    <div>
      <Header pageName={"My Properties"} />
      <div className="bg-white rounded mt-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex border-b w-80">
            <button
              onClick={() => setStatusFilter("All")}
              className={`flex-1 px-3 py-1 text-sm ${statusFilter === "All"
                ? "border-b-2 border-neutral text-neutral"
                : "text-neutral-3"
                } focus:outline-none`}
            >
              All
            </button>
            <button
              onClick={() => setStatusFilter("Active")}
              className={`flex-1 px-3 py-1 text-sm ${statusFilter === "Active"
                ? "border-b-2 border-neutral text-neutral"
                : "text-neutral-3"
                } focus:outline-none`}
            >
              Active
            </button>
            <button
              onClick={() => setStatusFilter("Pending")}
              className={`flex-1 px-3 py-1 text-sm ${statusFilter === "Pending"
                ? "border-b-2 border-neutral text-neutral"
                : "text-neutral-3"
                } focus:outline-none`}
            >
              Pending
            </button>
            <button
              onClick={() => setStatusFilter("Rejected")}
              className={`flex-1 px-3 py-1 text-sm ${statusFilter === "Rejected"
                ? "border-b-2 border-neutral text-neutral"
                : "text-neutral-3"
                } focus:outline-none`}
            >
              Rejected
            </button>
          </div>
          <div className="flex items-center">
            <div className='border rounded-full p-1 space-x-4 mr-6'>
              <button className="px-5 py-1 focus:bg-darkBlue focus:text-white rounded-full">All</button>
              <button className="px-4 py-1 focus:bg-darkBlue focus:text-white rounded-full">For Sale</button>
              <button className="px-4 py-1 focus:bg-darkBlue focus:text-white rounded-full">For Rent</button>
            </div>
            <div className="flex items-center space-x-2">
              <span>Sort by:</span>
              <div className="relative">
                <select className="flex items-center px-4 py-2 border rounded-full appearance-none outline-none bg-transparent w-40">
                  <option>Newest</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3">
                  <i className="fa fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-1 border rounded-lg">
          <div className="grid grid-cols-5 p-4 bg-gray-100 rounded-lg space-x-48">
            <div className="font-semibold">Property</div>
            <div className="font-semibold text-center">Posted Date</div>
            <div className="font-semibold text-center">Views</div>
            <div className="font-semibold text-center">Status</div>
          </div>
          <div className="rounded-lg">
            <div className="grid grid-cols-5 items-center p-4 border-b space-x-48">
              <div className="flex items-center">
                <img src="https://placehold.co/100x100" alt="Property image" className="w-32 h-32 rounded-md" />
                <div className="ml-4">
                  <div className="flex items-center mb-2">
                    <span className="px-3 py-1 text-sm font-semibold text-white rounded-full bg-darkBlue">For Sale</span>
                  </div>
                  <h2 className="text-2xl font-bold">$350,000</h2>
                  <div className="flex items-center text-neutral-3 whitespace-nowrap">
                    <i className="fas fa-bed mr-1"></i> 2 Bedrooms
                    <i className="fas fa-bath mx-2"></i> 2 Bathroom
                    <i className="fas fa-ruler-combined mx-2"></i> 2000 sqft
                  </div>
                  <div className="flex items-center whitespace-nowrap">
                    <i className="fas fa-map-marker-alt mr-1"></i> 579 Baumgardner Rd, Willow Street, PA 17584
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className='text-sm'>14 Nov, 2024</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-sm">1,240</div>
              </div>
              <div className="flex items-center justify-center">
                <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-700">Active</span>
              </div>
              <div>
                <i className="fas fa-ellipsis-h ml-4 text-gray-500"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-8 py-4 my-4">
          <button className="text-neutral">Previous</button>
          <button className="text-neutral">1</button>
          <button className="bg-darkBlue text-white rounded-full w-10 h-10 flex items-center justify-center">2</button>
          <button className="text-neutral">3</button>
          <span className="text-neutral">...</span>
          <button className="text-neutral">Next</button>
        </div>
      </div>
    </div>
  )
}

export default MyProperties;

