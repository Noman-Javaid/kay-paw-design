import React from 'react';
import Header from './Header';

const PostListing = () => {
  return (
    <div>
      <Header pageName={"Add new listing"} />
      <div className="flex justify-center items-center mt-8 rounded-lg border border-neutral-6 shadow-sm">
        <div className="p-9 w-full">
          <h2 className="text-2xl font-semibold mb-5 text-neutral">Type & Price</h2>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-neutral">Select Purpose</label>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 border border-darkBlue text-darkBlue rounded-full">
                <i className="fas fa-home mr-2"></i> Sell
              </button>
              <button className="flex items-center px-4 py-2 border rounded-full">
                <i className="fas fa-home mr-2"></i> Rent
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold text-neutral">Select Property Type*</label>
              <div className="relative">
                <select className="appearance-none w-full bg-transparent border py-3 px-4 rounded-lg focus:outline-none">
                  <option>House</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-5">
                  <i className="fa fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div>
              <label className="block mb-2 font-semibold text-neutral">Price*</label>
              <input type="text" className="w-full bg-transparent border py-3 px-4 rounded-lg focus:outline-none" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 rounded-lg border border-neutral-6 shadow-sm">
        <div className="p-9 w-full">
          <h2 className="text-2xl font-semibold text-neutral mb-6">Listing Details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-2 font-semibold text-neutral">Size in sqft*</label>
                <input type="text" className="w-full border border-neutral-5 rounded-md py-3 px-4 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm mb-2 font-semibold text-neutral">Bedrooms*</label>
                <div className="relative">
                  <select className="appearance-none w-full bg-transparent border border-neutral-5 rounded-md py-3 px-4 focus:outline-none">
                    <option>2</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-5">
                    <i className="fa fa-chevron-down"></i>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2 font-semibold text-neutral">Bathrooms*</label>
                <div className="relative">
                  <select className="appearance-none w-full bg-transparent border border-neutral-5 rounded-md py-3 px-4 focus:outline-none">
                    <option>3</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-5">
                    <i className="fa fa-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2 font-semibold text-neutral">Description*</label>
              <textarea className="w-full border border-neutral-5 rounded-md py-3 px-4 focus:outline-none" rows="8" placeholder="Write about property"></textarea>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 rounded-lg border border-neutral-6 shadow-sm">
        <div className="p-9 w-full">
          <h2 className="text-2xl font-semibold text-neutral mb-6">Address & Phone</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-semibold text-neutral">Street Address*</label>
              <input type="text" className="w-full bg-transparent border py-3 px-4 rounded-lg focus:outline-none" />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-neutral">Phone*</label>
              <input type="text" className="w-full bg-transparent border py-3 px-4 rounded-lg focus:outline-none" />
            </div>
          </div>
          <div className="mt-4">
            <img src="/map.svg" className="w-full" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PostListing;
