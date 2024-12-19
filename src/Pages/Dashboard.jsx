import React from 'react';
import Header from './Header';

const Dashboard = () => {

  return (
    <div>
      <Header pageName={"Dashboard"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        <div className="px-4 rounded-lg border border-neutral-5 shadow-sm py-6 flex items-center">
          <div className="bg-darkBlue bg-opacity-5 text-darkBlue rounded-full p-3 mr-4">
            <img src="/myProperties.svg" className='w-6 h-6 text-darkBlue' />
          </div>
          <div>
            <div className="text-darkBlue text-2xl font-semibold">14</div>
            <div>Active Listing</div>
          </div>
        </div>
        <div className="px-4 rounded-lg border border-neutral-5 shadow-sm py-6 flex items-center">
          <div className="bg-darkBlue bg-opacity-5 rounded-full p-3 mr-4">
            <i className="fas fa-home fa-xl text-darkBlue"></i>
          </div>
          <div>
            <div className="text-darkBlue text-2xl font-semibold">09</div>
            <div>For Sale</div>
          </div>
        </div>
        <div className="px-4 rounded-lg border border-neutral-5 shadow-sm py-6 flex items-center">
          <div className="bg-darkBlue bg-opacity-5 rounded-full p-3 mr-4">
            <i className="fas fa-home fa-xl text-darkBlue"></i>
          </div>
          <div>
            <div className="text-darkBlue text-2xl font-semibold">05</div>
            <div>For Rent</div>
          </div>
        </div>
        <div className="px-4 rounded-lg border border-neutral-5 shadow-sm py-6 flex items-center">
          <div className="bg-darkBlue bg-opacity-5 rounded-full p-3 mr-4">
            <i className="fas fa-home fa-xl text-darkBlue"></i>
          </div>
          <div>
            <div className="text-darkBlue text-2xl font-semibold">02</div>
            <div>Pending</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">All Listing</h2>
          <div className="flex items-center">
            <div className='border rounded-full p-1 space-x-4 mr-6'>
              <button className="px-5 py-1 bg-darkBlue text-white rounded-full">All</button>
              <button className="px-4 py-1 rounded-full">For Sale</button>
              <button className="px-4 py-1 rounded-full">For Rent</button>
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
      </div>
    </div>
  );
};

export default Dashboard;
