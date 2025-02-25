import React from 'react';
import Header from './Header';

const SavedHomes = () => {
  const homes = [
    {
      id: 1,
      status: "For Rent",
      isFavorite: true,
      price: "$200,000",
      details: "2 Bedroom - 1 Bathroom - 2,000 sqft",
      address: "14407 Azure Ln, Streetman, TX 75859",
      image: "/image.png"
    },
    {
      id: 2,
      status: "For Sale",
      isFavorite: false,
      price: "$200,000",
      details: "2 Bedroom - 1 Bathroom - 2,000 sqft",
      address: "14407 Azure Ln, Streetman, TX 75859",
      image: "/image.png"
    },
    {
      id: 3,
      status: "For Sale",
      isFavorite: true,
      price: "$200,000",
      details: "2 Bedroom - 1 Bathroom - 2,000 sqft",
      address: "14407 Azure Ln, Streetman, TX 75859",
      image: "/image.png"
    },
    {
      id: 4,
      status: "For Rent",
      isFavorite: true,
      price: "$200,000",
      details: "2 Bedroom - 1 Bathroom - 2,000 sqft",
      address: "14407 Azure Ln, Streetman, TX 75859",
      image: "/image.png"
    },
    {
      id: 5,
      status: "For Sale",
      isFavorite: false,
      price: "$200,000",
      details: "2 Bedroom - 1 Bathroom - 2,000 sqft",
      address: "14407 Azure Ln, Streetman, TX 75859",
      image: "/image.png"
    },
    {
      id: 6,
      status: "For Sale",
      isFavorite: true,
      price: "$200,000",
      details: "2 Bedroom - 1 Bathroom - 2,000 sqft",
      address: "14407 Azure Ln, Streetman, TX 75859",
      image: "/image.png"
    },
    {
      id: 7,
      status: "For Sale",
      isFavorite: true,
      price: "$200,000",
      details: "2 Bedroom - 1 Bathroom - 2,000 sqft",
      address: "14407 Azure Ln, Streetman, TX 75859",
      image: "/image.png"
    }
  ];
  return (
    <div>
      <Header pageName={"Saved Homes"} />
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-neutral">7 saved homes</h1>
          <div className="flex items-center space-x-2 mr-10 mt-2">
            <div className="relative">
              <select className="flex items-center px-4 py-2 border rounded-full appearance-none outline-none bg-transparent w-48">
                <option>Showing all</option>
                <option>1</option>
                <option>2</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3">
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="text-neutral-2 mb-5 leading-none">5 for sale, 2 for rent</div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {homes.map(home => (
            <div key={home.id}>
              <div className="relative">
                <img src={home.image} alt={`House ${home.id}`} className="w-full h-auto rounded-2xl object-fill" />
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-sm">{home.status}</div>
                <div className="absolute top-4 right-4 bg-transparent text-white rounded-full">
                  {home.isFavorite ? <img src="/heart.svg" className="w-6" /> : <i class="fa-solid fa-heart fa-xl"></i>}
                </div>
              </div>
              <div className="py-2">
                <div className="text-xl font-semibold">{home.price}</div>
                <div className="text-neutral">{home.details}</div>
                <div className="text-neutral flex items-center">
                  <i class="fa-solid fa-location-dot mr-1"></i>
                  {home.address}
                </div>
              </div>
            </div>
          ))}
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

export default SavedHomes;
