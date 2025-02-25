import React, { useState } from 'react';
import Header from './Header';

const ManageTours = () => {
  const [statusFilter, setStatusFilter] = useState("Upcoming Tours");

  return (
    <div>
      <Header pageName={"Manage Tours"} />
      <div className="bg-white rounded mt-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex border-b w-64">
            <button
              onClick={() => setStatusFilter("Upcoming Tours")}
              className={`flex-1 px-3 py-1 text-sm ${statusFilter === "Upcoming Tours"
                ? "border-b-2 border-neutral text-neutral"
                : "text-neutral-3"
                } focus:outline-none`}
            >
              Upcoming Tours
            </button>
            <button
              onClick={() => setStatusFilter("Past Tours")}
              className={`flex-1 px-3 py-1 text-sm ${statusFilter === "Past Tours"
                ? "border-b-2 border-neutral text-neutral"
                : "text-neutral-3"
                } focus:outline-none`}
            >
              Past Tours
            </button>
          </div>
          <div className="flex items-center">
            <div className='border rounded-full p-1 space-x-2 mr-6'>
              <button className="px-4 py-1 focus:bg-darkBlue focus:text-white rounded-full">My Tours</button>
              <button className="px-4 py-1 focus:bg-darkBlue focus:text-white rounded-full">Requests</button>
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
                <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-700">Confirmed</span>
              </div>
              <div>
                <i className="fas fa-ellipsis-h ml-4 text-gray-500"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageTours;
