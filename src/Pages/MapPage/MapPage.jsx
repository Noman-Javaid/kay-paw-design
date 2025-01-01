import React, { useState } from 'react';

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
  },
  {
    id: 8,
    status: "For Sale",
    isFavorite: true,
    price: "$200,000",
    details: "2 Bedroom - 1 Bathroom - 2,000 sqft",
    address: "14407 Azure Ln, Streetman, TX 75859",
    image: "/image.png"
  },
  {
    id: 9,
    status: "For Sale",
    isFavorite: true,
    price: "$200,000",
    details: "2 Bedroom - 1 Bathroom - 2,000 sqft",
    address: "14407 Azure Ln, Streetman, TX 75859",
    image: "/image.png"
  },
  {
    id: 10,
    status: "For Sale",
    isFavorite: true,
    price: "$200,000",
    details: "2 Bedroom - 1 Bathroom - 2,000 sqft",
    address: "14407 Azure Ln, Streetman, TX 75859",
    image: "/image.png"
  },
  {
    id: 11,
    status: "For Sale",
    isFavorite: true,
    price: "$200,000",
    details: "2 Bedroom - 1 Bathroom - 2,000 sqft",
    address: "14407 Azure Ln, Streetman, TX 75859",
    image: "/image.png"
  },
  {
    id: 12,
    status: "For Sale",
    isFavorite: true,
    price: "$200,000",
    details: "2 Bedroom - 1 Bathroom - 2,000 sqft",
    address: "14407 Azure Ln, Streetman, TX 75859",
    image: "/image.png"
  }
];

const MapPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMap, setShowMap] = useState(true);
  const [filters, setFilters] = useState({
    sale_rent: false,
    price: false,
    bedrooms_bathrooms: false,
    homeType: false,
    more: false,
  });

  const handleSelect = (name) => () => {
    setFilters(() => {
      const newFilters = {
        sale_rent: false,
        price: false,
        bedrooms_bathrooms: false,
        homeType: false,
        more: false,
      };
      filters[name] ? newFilters[name] = false : newFilters[name] = true;
      return newFilters;
    });
  };


  return (
    <div>
      <header className="py-4 px-8 md:px-16 border-b border-neutral-6 sticky top-0 bg-white z-50">
        <div className='flex justify-between items-center'>
          <div className="hidden md:flex gap-10">
            <a href="#" className="text-black font-medium">Buy</a>
            <a href="#" className="text-black font-medium">Rent</a>
            <a href="#" className="text-black font-medium">Sell</a>
            <a href="#" className="text-black font-medium">Blog</a>
          </div>
          <div className="md:ml-28">
            <a href="#"><img src="/logo.svg" alt="KayPaw" className='hover:scale-105 transition-all' /></a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="flex items-center border border-neutral-5 py-3 px-3 lg:py-2 lg:px-4 rounded-full">
              <i className="fas fa-home m-0 lg:mr-2 text-darkBlue"></i>
              <span className='hidden lg:inline'>My Properties</span>
            </a>
            <a href="#" className="flex items-center border border-neutral-5 py-3 px-3 lg:py-2 lg:px-4 rounded-full">
              <i className="fas fa-home m-0 lg:mr-2"></i>
              <span className='hidden lg:inline'>Post Listing</span>
            </a>
            <img src="https://placehold.co/40x40" alt="User" className="w-10 h-10 rounded-full" />
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <a href="#" className="flex items-center w-full px-4 py-2 border rounded-lg text-neutral border-neutral-6 hover:bg-darkBlue hover:text-white">Buy</a>
            <a href="#" className="flex items-center w-full px-4 py-2 border rounded-lg text-neutral border-neutral-6 hover:bg-darkBlue hover:text-white">Rent</a>
            <a href="#" className="flex items-center w-full px-4 py-2 border rounded-lg text-neutral border-neutral-6 hover:bg-darkBlue hover:text-white">Sell</a>
            <a href="#" className="flex items-center w-full px-4 py-2 border rounded-lg text-neutral border-neutral-6 hover:bg-darkBlue hover:text-white">Blog</a>
            <button className="flex items-center w-full px-4 py-2 border rounded-lg text-neutral border-neutral-6 hover:bg-darkBlue hover:text-white">
              <i className="fas fa-home mr-2"></i> My Properties
            </button>
            <button className="flex items-center w-full px-4 py-2 border rounded-lg text-neutral border-neutral-6 hover:bg-darkBlue hover:text-white">
              <i className="fas fa-plus-circle mr-2"></i> Post Listing
            </button>
            <div className='flex items-center border border-neutral-6 rounded-lg hover:bg-darkBlue hover:text-white px-4 py-2'>
              <img src="https://placehold.co/40x40" alt="User profile picture" className="w-4 h-4 mr-2 rounded-full" />
              <span>Profile</span>
            </div>
          </div>)}
      </header>

      <main>
        <div>
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center border-b border-neutral-6 space-x-4 py-4 px-8 md:px-16">
            <div className='flex flex-wrap w-full'>
              <div className="relative border border-neutral-5 rounded-full w-full sm:max-w-sm mb-2 mr-0 sm:mr-2 lg:mb-0">
                <input type="text" placeholder="Streetsboro Middle School, Streets..." className="w-72 sm:w-80 block px-4 2xl:px-6 2xl:py-3 py-2 border-none focus:outline-none rounded-full" />
                <button className="absolute right-1 bottom-1 px-2 py-1 2xl:px-3 2xl:py-2 bg-darkBlue text-white rounded-full"><i className="fas fa-search"></i></button>
              </div>
              <div>
                <div className="relative inline-block w-full sm:w-auto mr-2">
                  <div className='flex justify-between items-center border border-neutral-5 rounded-full px-4 2xl:px-6 mb-2 lg:mb-0'>
                    <button onClick={handleSelect("sale_rent")} className='w-full flex 2xl:py-3 py-2'>For Sale</button>
                    <i className="fas fa-chevron-down ml-5" />
                  </div>
                  {filters.sale_rent && (
                    <div className="absolute left-0 z-50 m-0 lg:mt-3 w-full sm:w-72 sm:max-w-xs rounded-2xl bg-white ring-1 ring-neutral-5 focus:outline-none">
                      <div className="py-4 px-4">
                        <div className='flex justify-between'>
                          <h2 className='font-semibold text-sm'>Sale_Rent</h2>
                          <p className='underline cursor-pointer text-sm text-neutral'>Clear</p>
                        </div>
                        <div className='mt-4 space-y-2'>
                          <button className='flex items-center text-sm font-medium w-full px-4 py-2 border rounded-lg text-neutral border-neutral-6 hover:bg-darkBlue hover:text-white'>For Sale</button>
                          <button className='flex items-center text-sm font-medium w-full px-4 py-2 border rounded-lg text-neutral border-neutral-6 hover:bg-darkBlue hover:text-white'>For Rent</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative inline-block w-full sm:w-auto mr-2">
                  <div className='flex justify-between items-center border border-neutral-5 rounded-full px-4 2xl:px-6 mb-2 lg:mb-0'>
                    <button onClick={handleSelect("price")} className='w-full flex 2xl:py-3 py-2'>Price</button>
                    <i className="fas fa-chevron-down ml-5" />
                  </div>
                  {filters.price && (
                    <div className="absolute left-0 z-50 m-0 lg:mt-3 w-full sm:w-72 sm:max-w-xs rounded-2xl bg-white ring-1 ring-neutral-5 focus:outline-none">
                      <div className="py-4 px-4">
                        <div className='flex justify-between'>
                          <h2 className='font-semibold text-sm'>Price Range</h2>
                          <p className='underline cursor-pointer text-sm text-neutral'>Clear</p>
                        </div>
                        <div className='flex justify-between mt-4'>
                          <div className="flex-1 pr-2">
                            <label htmlFor="mini" className='text-sm font-medium'>Minimum</label>
                            <div className='relative'>
                              <input type="text" id="mini" className="w-full text-sm mt-1 pl-6 pr-2 py-2 border rounded-md focus:outline-none" />
                              <i className="absolute top-4 left-3 fa-solid fa-dollar-sign"></i>
                            </div>
                          </div>
                          <div className="flex-1 pl-2">
                            <label htmlFor="maximum" className='text-sm font-medium'>Maximum</label>
                            <div className='relative'>
                              <input type="text" id="maximum" className="w-full text-sm mt-1 pl-6 pr-2 py-2 border rounded-md focus:outline-none" />
                              <i className="absolute top-4 left-3 fa-solid fa-dollar-sign"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative inline-block w-full sm:w-auto mr-2">
                  <div className='flex justify-between items-center border border-neutral-5 rounded-full px-4 2xl:px-6 mb-2 lg:mb-0'>
                    <button onClick={handleSelect("bedrooms_bathrooms")} className='w-full flex 2xl:py-3 py-2'>Bed & Bath</button>
                    <i className="fas fa-chevron-down ml-5" />
                  </div>
                  {filters.bedrooms_bathrooms && (
                    <div className="absolute left-0 z-50 m-0 lg:mt-3 w-full sm:w-72 sm:max-w-xs rounded-2xl bg-white ring-1 ring-neutral-5 focus:outline-none">
                      <div className="py-4 px-4">
                        <div className='flex justify-between'>
                          <h2 className='font-semibold text-sm'>Beds</h2>
                          <p className='underline cursor-pointer text-sm text-neutral'>Clear</p>
                        </div>
                        <div className='flex justify-between border border-neutral-5 rounded-lg p-2 mt-4'>
                          <input type="radio" id='3424' name='beds' value="Any" className='hidden' />
                          <label htmlFor="3424" className={`border border-darkBlue bg-carousel px-3 py-1 rounded-md text-sm`}>Any</label>
                          <input type="radio" id='5675' name='beds' value="1" className='hidden' />
                          <label htmlFor="5675" className={`border border-neutral-6 px-3 py-1 rounded-md text-sm`}>1</label>
                          <input type="radio" id='3654' name='beds' value="2" className='hidden' />
                          <label htmlFor="3654" className={`border border-neutral-6 px-3 py-1 rounded-md text-sm`}>2</label>
                          <input type="radio" id='8935' name='beds' value="3" className='hidden' />
                          <label htmlFor="8935" className={`border border-neutral-6 px-3 py-1 rounded-md text-sm`}>3</label>
                          <input type="radio" id='5340' name='beds' value="4" className='hidden' />
                          <label htmlFor="5340" className={`border border-neutral-6 px-3 py-1 rounded-md text-sm`}>4</label>
                          <input type="radio" id='5349' name='beds' value="5+" className='hidden' />
                          <label htmlFor="5349" className={`border border-neutral-6 px-3 py-1 rounded-md text-sm`}>5+</label>
                        </div>
                        <h2 className='font-semibold text-sm mt-4'>baths</h2>
                        <div className='flex justify-between border border-neutral-5 rounded-lg p-2 mt-4'>
                          <input type="radio" id='3424' name='baths' value="Any" className='hidden' />
                          <label htmlFor="3424" className={`border border-darkBlue bg-carousel px-3 py-1 rounded-md text-sm`}>Any</label>
                          <input type="radio" id='5675' name='baths' value="1" className='hidden' />
                          <label htmlFor="5675" className={`border border-neutral-6 px-3 py-1 rounded-md text-sm`}>1</label>
                          <input type="radio" id='3654' name='baths' value="2" className='hidden' />
                          <label htmlFor="3654" className={`border border-neutral-6 px-3 py-1 rounded-md text-sm`}>2</label>
                          <input type="radio" id='8935' name='baths' value="3" className='hidden' />
                          <label htmlFor="8935" className={`border border-neutral-6 px-3 py-1 rounded-md text-sm`}>3</label>
                          <input type="radio" id='5340' name='baths' value="4" className='hidden' />
                          <label htmlFor="5340" className={`border border-neutral-6 px-3 py-1 rounded-md text-sm`}>4</label>
                          <input type="radio" id='5349' name='baths' value="5+" className='hidden' />
                          <label htmlFor="5349" className={`border border-neutral-6 px-3 py-1 rounded-md text-sm`}>5+</label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative inline-block w-full sm:w-auto">
                  <div className='flex justify-between items-center border border-neutral-5 rounded-full px-4 2xl:px-6'>
                    <button onClick={handleSelect("homeType")} className='w-full flex 2xl:py-3 py-2'>Home Type</button>
                    <i className="fas fa-chevron-down ml-5" />
                  </div>
                  {filters.homeType && (
                    <div className="absolute left-0 z-50 m-0 lg:mt-3 w-full sm:w-72 sm:max-w-xs rounded-2xl bg-white ring-1 ring-neutral-5 focus:outline-none">
                      <div className="py-4 px-4">
                        <div className='flex justify-between'>
                          <h2 className='font-semibold text-sm'>Types</h2>
                          <p className='underline cursor-pointer text-sm text-neutral'>Clear</p>
                        </div>
                        <div className='mt-4'>
                          <input type='checkbox' id='homeType1' name='homeType1' value="house" />
                          <label htmlFor="homeType1" className='ml-2'>House</label><br />
                          <input type='checkbox' id='homeType2' name='homeType2' value="townhomes" />
                          <label htmlFor="homeType2" className='ml-2'>Townhomes</label><br />
                          <input type='checkbox' id='homeType3' name='homeType3' value="residential" />
                          <label htmlFor="homeType3" className='ml-2'>Residential</label><br />
                          <input type='checkbox' id='homeType4' name='homeType4' value="condos" />
                          <label htmlFor="homeType4" className='ml-2'>Condos</label><br />
                          <input type='checkbox' id='homeType5' name='homeType5' value="multiFalily" />
                          <label htmlFor="homeType5" className='ml-2'>Multi Family</label><br />
                          <input type='checkbox' id='homeType6' name='homeType6' value="apartments" />
                          <label htmlFor="homeType6" className='ml-2'>Apartments</label><br />
                          <input type='checkbox' id='homeType7' name='homeType7' value="townhome" />
                          <label htmlFor="homeType7" className='ml-2'>Townhome</label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-3 border border-neutral rounded-full p-1 mb-4 sm:m-0">
              <button className={`px-4 py-1 2xl:py-2 2xl:px-6 ${!showMap ? "bg-darkBlue text-white" : ""} rounded-full`} onClick={() => setShowMap(false)}>List</button>
              <button className={`px-4 py-1 2xl:py-2 2xl:px-6 ${showMap ? "bg-darkBlue text-white" : ""} rounded-full`} onClick={() => setShowMap(true)}>Map</button>
            </div>
          </div>
          <div className="flex flex-wrap-reverse">
            <div className={`w-full ${showMap ? 'lg:w-[46%]' : 'lg:w-full'} py-8 px-6 lg:pl-16 pb-24`}>
              <div className={` ${!showMap ? "flex justify-between items-center" : ""}`}>
                <h2 className="text-2xl font-semibold mb-2">Homes for sale near Streetsboro Middle School</h2>
                <div className='flex justify-between gap-5'>
                  <p className="text-neutral font-medium mb-2">49 results</p>
                  <p className='text-neutral-3 font-medium'>Sort by
                    <select className='bg-white text-neutral focus:outline-none'>
                      <option>Newest listing</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </p>
                </div>
              </div>
              <div className={`grid sm:grid-cols-2 md:grid-cols-2 ${showMap ? "lg:grid-cols-1 xl:grid-cols-2" : "lg:grid-cols-3 xl:grid-cols-4"} gap-6`}>
                {homes.map(home => (
                  <div key={home.id}>
                    <div className="relative">
                      <img src={home.image} alt={`House ${home.id}`} className="w-full h-auto rounded-2xl object-fill" />
                      <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-full text-sm">{home.status}</div>
                      <div className="absolute top-4 right-4 bg-transparent text-white rounded-full">
                        {home.isFavorite ? <img src="/heart.svg" className="w-6" /> : <i className="fa-solid fa-heart fa-xl"></i>}
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="text-xl font-semibold">{home.price}</div>
                      <div className="text-neutral">{home.details}</div>
                      <div className="text-neutral flex items-center">
                        <i className="fa-solid fa-location-dot mr-1"></i>
                        {home.address}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {showMap && (
              <div className="w-full lg:w-[54%]">
                <iframe className="w-full h-96 lg:h-1/3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627977975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6d4b0b1a!2sStreetsboro%20Middle%20School!5e0!3m2!1sen!2sus!4v1633021234567!5m2!1sen!2sus"></iframe>
              </div>
            )}
          </div>
        </div>

      </main >

      <footer className="bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-8 md:py-10 md:px-16 lg:py-14 lg:px:24 xl:py-20 xl:px-32">
          <div>
            <h3 className="font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral">Miami</a></li>
              <li><a href="#" className="text-neutral">Los Angeles</a></li>
              <li><a href="#" className="text-neutral">Chicago</a></li>
              <li><a href="#" className="text-neutral">New York</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Privacy Policy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral">Terms & Conditions</a></li>
              <li><a href="#" className="text-neutral">Information</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact us</h3>
            <ul className="space-y-2">
              <li className="text-neutral"><i className="fas fa-map-marker-alt mr-2"></i>451 Wall Street, UK, London</li>
              <li className="text-neutral"><i className="fas fa-phone mr-2"></i>Phone: (064) 332-1233</li>
              <li className="text-neutral"><i className="fas fa-envelope mr-2"></i>info@maison.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <div className="relative mb-4 p-1 shadow-sm border-2 border-neutral-6 rounded-full w-full">
              <input type="email" placeholder="Enter email address" className="w-80 block px-6 py-2 border-none focus:outline-none rounded-full" />
              <button className="absolute right-1 bottom-1 px-3 py-2 bg-darkBlue text-white rounded-full"><i className="fas fa-arrow-right"></i></button>
            </div>
            <div className="flex space-x-2">
              <a href="#" className="text-neutral-2 flex justify-center items-center border-2 rounded-full w-8 h-8"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-neutral-2 flex justify-center items-center border-2 rounded-full w-8 h-8"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-neutral-2 flex justify-center items-center border-2 rounded-full w-8 h-8"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-neutral-2 flex justify-center items-center border-2 rounded-full w-8 h-8"><i className="fab fa-telegram"></i></a>
            </div>
          </div>
        </div>
        <div className="bg-darkBlue text-white text-center py-4">
          The Maison © 2024 All Rights Reserved.
        </div>
      </footer>
    </div >
  )
}

export default MapPage;
