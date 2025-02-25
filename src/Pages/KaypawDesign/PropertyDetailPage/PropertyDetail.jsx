import React, { useRef, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RequestTour from './RequestTour';

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

const images = [
  { src: "/house.jpeg", alt: "House" },
  { src: "/house1.jpg", alt: "House 1" },
  { src: "/house3.jpg", alt: "House 2" },
  { src: "/house1.jpg", alt: "House 1" },
  { src: "/house3.jpg", alt: "House 2" },
  { src: "/house1.jpg", alt: "House 1" },
  { src: "/house2.png", alt: "House 2" },
  { src: "/house3.jpg", alt: "House 3" }
];

const responsiveMobile = {
  mobile: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  }
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 564, min: 0 },
    items: 1
  }
};

const ArrowButtons = ({ carouselRef }) => {
  return (
    <div className="flex gap-4">
      <button onClick={() => carouselRef.current.previous()} aria-label="Previous Slide" className="border border-black w-9 h-9 rounded-full">
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button onClick={() => carouselRef.current.next()} aria-label="Next Slide" className="border border-black w-9 h-9 rounded-full">
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  )
}

const PropertyDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const carouselRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <i className="fas fa-bars" />
            </button>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="flex items-center border border-neutral-5 py-3 px-3 lg:py-2 lg:px-4 rounded-full">
              <i className="fas fa-home m-0 lg:mr-2 text-darkBlue" />
              <span className='hidden lg:inline'>My Properties</span>
            </a>
            <a href="#" className="flex items-center border border-neutral-5 py-3 px-3 lg:py-2 lg:px-4 rounded-full">
              <i className="fas fa-home m-0 lg:mr-2" />
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
              <i className="fas fa-home mr-2" /> My Properties
            </button>
            <button className="flex items-center w-full px-4 py-2 border rounded-lg text-neutral border-neutral-6 hover:bg-darkBlue hover:text-white">
              <i className="fas fa-plus-circle mr-2" /> Post Listing
            </button>
            <div className='flex items-center border border-neutral-6 rounded-lg hover:bg-darkBlue hover:text-white px-4 py-2'>
              <img src="https://placehold.co/40x40" alt="User profile picture" className="w-4 h-4 mr-2 rounded-full" />
              <span>Profile</span>
            </div>
          </div>)}
      </header>

      <main>
        <div className='px-8 md:px-16 lg:px:24 xl:px-32'>
          <div className='flex justify-between mt-4'>
            <div className='flex items-center text-neutral text-sm font-medium'>
              <i className="fa-solid fa-arrow-left mr-2" />
              <span>Back to search</span>
            </div>
            <div className="flex items-center text-neutral-2 text-sm font-medium gap-4 mt-4">
              <button className="flex items-center">
                <i className="fa-solid fa-share mr-2" />
                <span>Share</span>
              </button>
              <button className="flex items-center">
                <i className="fa-regular fa-heart mr-2" />
                <span>Favourite</span>
              </button>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl my-2 overflow-hidden">
            <div>
              <img src="/house.jpeg" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.slice(1, 5).map((image, index) => (
                <div key={index} className="relative">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  {index === 3 && images.length > 5 && (
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer text-white font-semibold"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <p>{`See All ${images.length} Images`}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="block md:hidden">
            <Carousel responsive={responsiveMobile} arrows={false} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
              {images.map((image, index) => (
                <div key={index} className='flex justify-center mx-1' onClick={() => setIsModalOpen(true)}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-60 object-cover rounded-lg"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50">
              <Carousel responsive={responsiveMobile}>
                {images.map((image, index) => (
                  <div key={index} className='flex justify-center items-center h-screen w-screen'>
                    <div className='w-4/5 h-auto'>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Carousel>
              <button
                className="absolute top-4 right-4 z-30 text-white text-2xl hover:scale-105 transition-all"
                onClick={() => setIsModalOpen(false)}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          )}

          <div className='flex w-full'>
            <div className='w-full md:w-[75%] h-auto'>
              <div className="flex flex-wrap md:flex-nowrap justify-between items-end border-b border-neutral-5 py-4">
                <div className='space-y-2'>
                  <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-darkBlue">For Sale</span>
                  <h2 className="text-3xl font-bold">$350,000</h2>
                  <i className="fas fa-map-marker-alt mr-1" /> 579 Baumgardner Rd, Willow Street, PA 17584
                </div>
                <div className="flex text-neutral gap-6 h-auto mt-2">
                  <div className='flex flex-col items-center gap-4'>
                    <i className="fas fa-bed text-xl" />
                    <span className='font-medium text-sm'>2 Bedrooms</span>
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <i className="fas fa-bath text-xl" />
                    <span className='font-medium text-sm'>2 Bathroom</span>
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <i className="fas fa-ruler-combined text-xl" />
                    <span className='font-medium text-sm'>2000 sqft</span>
                  </div>
                </div>
              </div>

              <div className="border-b border-neutral-5 py-5">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <div className='text-sm text-neutral font-normal'>
                  <p>Features Of Property:</p>
                  <p>5 Bed Rooms With Attached Baths.</p>
                  <p>6 Bath Rooms with Shower Cabin And 3 Bath Rooms Also Have Jacuzzi TUB.</p>
                  <p>1 Powder Room.</p>
                  <p>3 Kitchens</p>
                  {showDescription && <div>
                    <p>5 Bed Rooms With Attached Baths.</p>
                    <p>6 Bath Rooms with Shower Cabin And 3 Bath Rooms Also Have Jacuzzi TUB.</p>
                    <p>1 Powder Room.</p>
                    <p>3 Kitchens</p>
                  </div>}
                </div>
                <button onClick={() => setShowDescription(!showDescription)} className="text-sm text-darkBlue font-semibold mt-2">Show more <i className="fa-solid fa-chevron-down" /></button>
              </div>

              <div className='block pt-6 sm:hidden'>
                <RequestTour />
              </div>

              {/* <div className="border-b border-neutral-5 py-5">
                <h2 className="text-xl font-semibold mb-5">Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Interior Details</h3>
                    <ul className="list-none space-y-2 text-sm">
                      <li><i className="fas fa-check-circle text-darkBlue mr-2" />Bedrooms: 1</li>
                      <li><i className="fas fa-check-circle text-darkBlue mr-2" />Bathrooms: 1</li>
                      <li><i className="fas fa-check-circle text-darkBlue mr-2" />Full bathrooms: 1</li>
                      <li><i className="fas fa-check-circle text-darkBlue mr-2" />Main level bathrooms: 1</li>
                      <li><i className="fas fa-check-circle text-darkBlue mr-2" />Main level bedrooms: 1</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Interior Details</h3>
                    <ul className="list-none space-y-2 text-sm">
                      <li><i className="fas fa-check-circle text-darkBlue mr-2" />Floor Plan - Traditional, Kitchen - Galley, Dining Area</li>
                      <li><i className="fas fa-check-circle text-darkBlue mr-2" />Flooring: Wood Floors</li>
                      <li><i className="fas fa-check-circle text-darkBlue mr-2" />Has basement: No</li>
                      <li><i className="fas fa-check-circle text-darkBlue mr-2" />Has fireplace: No</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Heating</h3>
                    <ul className="list-none space-y-2 text-sm">
                      <li><i className="fas fa-check-circle text-darkBlue mr-2" />Forced Air, Electric</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Interior area</h3>
                    <ul className="list-none space-y-2 text-sm">
                      <li><i className="fas fa-check-circle text-darkBlue mr-2" />Total interior livable area: 550 sqft</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Cooling</h3>
                    <ul className="list-none space-y-2 text-sm">
                      <li><i className="fas fa-check-circle text-darkBlue mr-2" />Central A/C, Electric</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-3">Appliances</h3>
                    <ul className="list-none space-y-2 text-sm">
                      <li><i className="fas fa-check-circle text-darkBlue mr-2" />Included: Oven/Range - Gas, Refrigerator, Other Water Heater</li>
                    </ul>
                  </div>
                </div>
                <button className="text-sm text-darkBlue font-semibold mt-4">Show more <i className="fas fa-chevron-down" /></button>
              </div> */}

              <div className="border-b border-neutral-5 py-5">
                <h1 className="text-xl font-semibold mb-4">Location on map</h1>
                <div className="w-full h-60 md:h-96">
                  <iframe className="w-full h-full rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627977975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6d4b0b1a!2sStreetsboro%20Middle%20School!5e0!3m2!1sen!2sus!4v1633021234567!5m2!1sen!2sus"></iframe>
                </div>
              </div>

              <div className="py-5">
                <div className="flex justify-between items-center pb-2">
                  <h2 className="text-xl font-semibold mb-4">Similar homes</h2>
                  <div className="hidden sm:flex gap-4">
                    <ArrowButtons carouselRef={carouselRef} />
                  </div>
                </div>
                <Carousel
                  responsive={responsive}
                  keyBoardControl={true}
                  infinite={true}
                  arrows={false}
                  renderButtonGroupOutside={true}
                  ref={carouselRef}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                >
                  {homes.map(home => (
                    <div key={home.id} className='mx-2'>
                      <div className="relative">
                        <img src={home.image} alt={`House ${home.id}`} className="w-full h-auto rounded-2xl object-cover" />
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
                </Carousel>
              </div>
            </div>


            <div className='md:w-[25%] sm:py-4 sm:pl-10'>
              <div className="hidden md:block sticky top-24">
                <RequestTour />
              </div>
            </div>
          </div>
          <div className='hidden py-20 sm:block'></div>
        </div>
      </main>

      <footer className="bg-footer">
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
              <li className="text-neutral"><i className="fas fa-map-marker-alt mr-2" />451 Wall Street, UK, London</li>
              <li className="text-neutral"><i className="fas fa-phone mr-2" />Phone: (064) 332-1233</li>
              <li className="text-neutral"><i className="fas fa-envelope mr-2" />info@maison.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <div className="relative mb-4 p-1 shadow-sm border-2 border-neutral-6 rounded-full w-full">
              <input type="email" placeholder="Enter email address" className="w-80 block px-6 py-2 border-none focus:outline-none rounded-full" />
              <button className="absolute right-1 bottom-1 px-3 py-2 bg-darkBlue text-white rounded-full"><i className="fas fa-arrow-right" /></button>
            </div>
            <div className="flex space-x-2">
              <a href="#" className="text-neutral-2 flex justify-center items-center border-2 rounded-full w-8 h-8"><i className="fab fa-facebook-f" /></a>
              <a href="#" className="text-neutral-2 flex justify-center items-center border-2 rounded-full w-8 h-8"><i className="fab fa-instagram" /></a>
              <a href="#" className="text-neutral-2 flex justify-center items-center border-2 rounded-full w-8 h-8"><i className="fab fa-twitter" /></a>
              <a href="#" className="text-neutral-2 flex justify-center items-center border-2 rounded-full w-8 h-8"><i className="fab fa-telegram" /></a>
            </div>
          </div>
        </div>
        <div className="bg-darkBlue text-white text-center py-4">
          The Maison © 2024 All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default PropertyDetail;
