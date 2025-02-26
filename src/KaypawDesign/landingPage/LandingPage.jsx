import React, { useEffect, useRef, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [
  { id: 1, url: 'https://via.placeholder.com/100x300/FF5733/FFFFFF?text=Image+1', title: 'Residential', discription: '2 Listing' },
  { id: 2, url: 'https://via.placeholder.com/100x300/33CFFF/FFFFFF?text=Image+2', title: 'Apartments', discription: '2 Listing' },
  { id: 3, url: 'https://via.placeholder.com/100x300/9B59B6/FFFFFF?text=Image+3', title: 'Townhomes', discription: '2 Listing' },
  { id: 4, url: 'https://via.placeholder.com/100x300/FF33D4/FFFFFF?text=Image+4', title: 'Multi Family House', discription: '2 Listing' },
  { id: 5, url: 'https://via.placeholder.com/100x300/332347/FFFFFF?text=Image+5', title: 'Residential', discription: '2 Listing' }
]

const cities = [
  { name: "New York, NY", img: "https://placehold.co/300x300?text=New+York" },
  { name: "San Francisco, CA", img: "https://placehold.co/300x300?text=San+Francisco" },
  { name: "Atlanta, GA", img: "https://placehold.co/300x300?text=Atlanta" },
  { name: "Chicago, IL", img: "https://placehold.co/300x300?text=Chicago" },
  { name: "Toronto, ON", img: "https://placehold.co/300x300?text=Toronto" },
  { name: "Vancouver, BC", img: "https://placehold.co/300x300?text=Vancouver" },
  { name: "Los Angeles, CA", img: "https://placehold.co/300x300?text=Los+Angeles" },
  { name: "Dallas, TX", img: "https://placehold.co/300x300?text=Dallas" },
  { name: "Ottawa, ON", img: "https://placehold.co/300x300?text=Ottawa" },
  { name: "Montreal, QC", img: "https://placehold.co/300x300?text=Montreal" },
  { name: "Austin, TX", img: "https://placehold.co/300x300?text=Austin" },
  { name: "Boston, MA", img: "https://placehold.co/300x300?text=Boston" },
  { name: "Miami, FL", img: "https://placehold.co/300x300?text=Miami" },
  { name: "Phoenix, AZ", img: "https://placehold.co/300x300?text=Phoenix" },
  { name: "Houston, TX", img: "https://placehold.co/300x300?text=Houston" },
];

const BlogCard = ({ date, imageUrl, title, description }) => (
  <div className="rounded-lg overflow-hidden">
    <div className='relative'>
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-xl" />
      <div className="absolute top-4 left-4 bg-white text-neutral px-3 py-1 rounded-full text-sm">{date}</div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-neutral">{description}</p>
    </div>
  </div>
);

const testimonials = [
  {
    name: 'Mika Gilmore',
    date: '12 June, 2024',
    text: 'The WP Estate team did an outstanding job helping me buy and create my first real estate website.',
    stars: 5,
    imageUrl: 'https://placehold.co/50x50',
  },
  {
    name: 'John Doe',
    date: '15 June, 2024',
    text: 'A fantastic experience! I now have a professional real estate website that I can proudly show my clients.',
    stars: 4,
    imageUrl: 'https://placehold.co/50x50',
  },
  {
    name: 'Sara Lee',
    date: '18 June, 2024',
    text: 'Amazing support and great results! The team helped me every step of the way.',
    stars: 5,
    imageUrl: 'https://placehold.co/50x50',
  },
];

const ArrowButtons = ({ carouselRef }) => {
  return (
    <div className="flex gap-4">
      <button onClick={() => carouselRef.current.previous()} aria-label="Previous Slide" className="border border-black px-4 py-2 rounded-full">
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button onClick={() => carouselRef.current.next()} aria-label="Next Slide" className="border border-black px-4 py-2 rounded-full">
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  )
}

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const carouselRef = useRef(null)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

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
  return (
    <div className="w-full">
      <header className="py-4 px-8 md:px-16 border-b border-neutral-6 sticky top-0 bg-white z-50">
        <div className='flex justify-between items-center '>
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
        <div className='flex flex-col items-center gap-6 py-10 px-8 sm:px-16 border-b border-neutral-6'>
          <div className="flex gap-3 border border-neutral rounded-full p-1">
            <button className="px-8 py-2 bg-darkBlue text-white rounded-full">Buy</button>
            <button className="px-8 py-2 rounded-full">Rent</button>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-auto rounded-lg justify-center items-center border border-neutral-6 md:rounded-full shadow-sm p-2">
            <input type="text"
              placeholder="Enter an address, city or zip code"
              className="pl-6 py-2 text-sm text-neutral-2 font-medium rounded-full focus:outline-none w-full md:w-60 mb-2 md:mb-0"
            />
            <div className="border-b md:border-l w-full md:w-auto border-neutral-5 md:h-6 md:ml-12 mb-2 md:mb-0"></div>
            <select
              className="px-4 py-2 bg-transparent text-sm text-neutral-2 font-medium focus:outline-none w-full md:w-36 mb-2 md:mb-0"
            >
              <option>Buy or Rent</option>
              <option>Buy</option>
              <option>Rent</option>
            </select>
            <div className="border-b md:border-l w-full md:w-auto border-neutral-5 md:h-6 md:ml-12 mb-2 md:mb-0"></div>
            <select
              className="px-4 py-2 bg-transparent text-sm text-neutral-2 font-medium focus:outline-none w-full md:w-36 mb-2 md:mb-0"
            >
              <option>All Types</option>
              <option>2</option>
              <option>3</option>
            </select>
            <div className="border-b w-full md:w-auto border-neutral-5 md:h-6 md:ml-12 mb-2 md:mb-0"></div>
            <button className="bg-darkBlue py-2 px-3 text-white rounded-lg md:rounded-full w-full md:w-auto ">
              <i className="fas fa-search mr-2 md:m-0"></i>
              <span className='md:hidden'>Search</span>
            </button>
          </div>
        </div>


        <div className="flex justify-center items-center pt-14 pb-10 px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            <span className="text-black">BEST LISTINGS </span>
            <span className="text-darkBlue">FOR YOU</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 sm:px-16 md:px-24 lg:px-32">
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
        <div className='flex justify-center items-center pt-8 pb-12'>
          <button className='border border-black py-2 px-8 rounded-full'>See All Listings</button>
        </div>

        <div className="relative bg-carousel py-20 px-8 sm:px-16 md:px-24 lg:px-32">
          <div className="flex items-center pb-8">
            <h2 className="flex-1 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
              EXPLORE PROPERTIES TO
              <span className="text-darkBlue"> BUY </span>
              OR
              <span className="text-darkBlue"> RENT</span>
            </h2>
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
            autoPlaySpeed={2000}
            centerMode={true}
          >
            {images.map((image) => (
              <div key={image.id} className='m-2'>
                <img src={image.url} alt={`Slide ${image.id}`} className="w-72 h-96 object-cover rounded-2xl" />
                <div className='space-y-1'>
                  <h3 className='font-semibold text-lg mt-2'>{image.title}</h3>
                  <p className='text-sm text-neutral'>{image.discription}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="py-20 px-8 sm:px-16 md:px-24 lg:px-32">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">POPULAR CITIES</h1>
          <p className="text-center text-neutral mb-8 mt-2">Discover houses and apartments for rent in our most popular locations.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {cities.map((city, index) => (
              <div key={index} className="text-center">
                <img src={city.img} alt={city.name} className="w-full h-56 object-cover rounded-xl mb-2" />
                <p className="text-lg font-semibold">{city.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-neutral py-20 px-8 sm:px-16 md:px-24 lg:px-32">
          {/* <div className="hidden  sm:flex justify-center sm:justify-end gap-4 pb-6">
            <button aria-label="Previous Slide" className="border border-white text-white px-4 py-2 rounded-full">
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button aria-label="Next Slide" className="border border-white text-white px-4 py-2 rounded-full">
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div> */}
          <div className="flex flex-wrap lg:flex-row justify-between items-center">
            <div className="max-w-full sm:max-w-md md:max-w-lg text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">What Our Clients Say About Maison</h2>
              <p className="text-sm sm:text-lg text-neutral-6 mb-6">
                Founded in 2012, Maison is your trusted real estate marketplace, connecting buyers, sellers, and renters with their dream properties seamlessly.
              </p>
              <button className="px-8 py-2 border border-white text-white rounded-full mb-6">About us</button>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg max-w-xs w-full">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.imageUrl}
                      alt={`Client photo of ${testimonial.name}`}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-neutral-2">{testimonial.date}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-neutral-2 text-sm">{testimonial.text}</p>
                  <div className="text-yellow-500">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center py-20 bg-carousel">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 px-8">READ FROM OUR BLOG</h2>
          <p className="text-neutral mb-8 px-8">Read about what is happening in the real estate market</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-8 sm:px-16 md:px-24 lg:px-32">
            <BlogCard
              date="12 June, 2024"
              imageUrl="https://placehold.co/600x400?text=House+1"
              title="Why live in Denver?"
              description="New York County as a whole covers a total area of 33.77 square miles (87..."
            />
            <BlogCard
              date="12 June, 2024"
              imageUrl="https://placehold.co/600x400?text=House+2"
              title="Why live in Denver?"
              description="New York County as a whole covers a total area of 33.77 square miles (87..."
            />
            <BlogCard
              date="12 June, 2024"
              imageUrl="https://placehold.co/600x400?text=House+3"
              title="Why live in Denver?"
              description="New York County as a whole covers a total area of 33.77 square miles (87..."
            />
            <BlogCard
              date="12 June, 2024"
              imageUrl="https://placehold.co/600x400?text=House+4"
              title="Why live in Denver?"
              description="New York County as a whole covers a total area of 33.77 square miles (87..."
            />
            <BlogCard
              date="12 June, 2024"
              imageUrl="https://placehold.co/600x400?text=House+5"
              title="Why live in Denver?"
              description="New York County as a whole covers a total area of 33.77 square miles (87..."
            />
          </div>
        </div>
      </main>
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
              <input type="email" placeholder="Enter email address" className="block px-6 py-2 border-none focus:outline-none" />
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
    </div>
  )
}

export default LandingPage;
