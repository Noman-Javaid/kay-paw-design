import React, { useEffect, useRef, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required('Your name is required').matches(/^[A-Za-z\s]*$/, 'Please enter a valid name'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  contact: yup.number().required('Contact number is required').typeError('Contact number must be a number').min(1000000000, 'Contact number must be at least 10 digits').max(9999999999, 'Contact number must be at most 10 digits'),
  hour: yup.number().required('Please select a time').typeError("Please select a time"),
  selectedDay: yup.object().required('Please select a day'),
  message: yup.string().required('Please type your message'),
});

const responsiveDate = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 4
  },
};

const getNext15DaysWithMonthAndDay = () => {
  const today = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return Array.from({ length: 15 }, (_, i) => {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    return {
      day: String(nextDay.getDate()).padStart(2, '0'),
      month: months[nextDay.getMonth()],
      weekday: daysOfWeek[nextDay.getDay()],
    };
  });
};

const formatHour = (hour) => {
  return `${hour}:00`;
};

const RequestTour = () => {
  const dateCarouselRef = useRef(null);
  const [selectedDay, setSelectedDay] = useState(null || "");
  const [currentHour, setCurrentHour] = useState(null);

  const { register, handleSubmit, formState: { errors }, setValue, clearErrors } = useForm({
    resolver: yupResolver(schema), mode: 'onChange',
  });

  useEffect(() => {
    const date = new Date();
    setCurrentHour(date.getHours());
  }, []);

  const generateHourOptions = () => {
    return [...Array(24).keys()];
  };

  const handleSelectDay = (day) => {
    setSelectedDay(day);
    setValue('selectedDay', day);
    clearErrors('selectedDay');
  }

  const isToday = (day) => {
    const today = new Date();
    return today.getDate() === parseInt(day.day) && today.getMonth() === new Date().getMonth();
  };

  const daysWithMonthAndDay = getNext15DaysWithMonthAndDay();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-neutral-5 w-full">
      <h2 className="text-base font-semibold mb-4">Request a tour</h2>
      <div className="relative mb-4">
        <div className='flex justify-between items-center'>
          <button className='absolute top-9 -left-3 z-10 border border-neutral rounded-full w-6 h-6' onClick={() => dateCarouselRef.current.previous()}>
            <i className="fas fa-angle-left" />
          </button>
          <button className='absolute top-9 -right-3 z-10 border border-neutral rounded-full w-6 h-6' onClick={() => dateCarouselRef.current.next()}>
            <i className="fas fa-angle-right" />
          </button>
        </div>
        <div>
          <Carousel
            responsive={responsiveDate}
            arrows={false}
            renderButtonGroupOutside={true}
            ref={dateCarouselRef}
          >
            {daysWithMonthAndDay.map((day, index) => (
              <div
                key={index}
                className={`text-center mx-1 px-2 py-3 border rounded-lg ${selectedDay?.day === day.day ? 'border-darkBlue bg-carousel' : ''}
                      ${errors.selectedDay ? "border-red-600" : ""}`}
                onClick={() => handleSelectDay(day)}
              >
                <div className="text-sm font-medium text-neutral-2">{day.weekday}</div>
                <div className="text-lg font-bold">{day.day}</div>
                <div className="text-sm font-medium text-neutral-2">{day.month}</div>
              </div>
            ))}
          </Carousel>
          <p className='text-red-600 text-sm m-1'>{errors.selectedDay?.message}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <select id="hourDropdown" {...register("hour")} className={`w-full px-4 py-2 text-sm text-neutral-2 font-medium focus:outline-none bg-transparent border ${errors.hour ? "border-red-600" : ""} rounded-lg`}>
            <option value="" disabled selected>
              Please select the time
            </option>
            {generateHourOptions().map((hour) => (
              <option key={hour} value={hour} disabled={isToday(selectedDay) && hour < currentHour}>
                {formatHour(hour)}
              </option>
            ))}
          </select>
          <p className='text-red-600 text-sm m-1'>{errors.hour?.message}</p>
        </div>
        <h3 className="text-sm font-semibold mb-3">Your information</h3>
        <div className='mb-2'>
          <input type="text" placeholder="Your Name" {...register('name', { onChange: (e) => e })} className={`w-full px-4 py-2 text-sm text-neutral-2 font-medium focus:outline-none border ${errors.name ? "border-red-600" : ""} rounded-lg`} />
          <p className='text-red-600 text-sm m-1'>{errors.name?.message}</p>
        </div>
        <div className='mb-2'>
          <input type="email" placeholder="Your Email" {...register('email', { onChange: (e) => e })} className={`w-full px-4 py-2 text-sm text-neutral-2 font-medium focus:outline-none border ${errors.email ? "border-red-600" : ""} rounded-lg`} />
          <p className='text-red-600 text-sm m-1'>{errors.email?.message}</p>
        </div>
        <div className='mb-2'>
          <input type="tel" placeholder="Your Phone" {...register('contact', { onChange: (e) => e })} className={`w-full px-4 py-2 text-sm text-neutral-2 font-medium focus:outline-none border ${errors.contact ? "border-red-600" : ""} rounded-lg`} />
          <p className='text-red-600 text-sm m-1'>{errors.contact?.message}</p>
        </div>
        <div className='mb-4'>
          <textarea placeholder="Type your message here" {...register('message', { onChange: (e) => e })} className={`w-full px-4 py-2 text-sm text-neutral-2 font-medium focus:outline-none border ${errors.message ? "border-red-600" : ""} rounded-lg h-24`} />
          <p className='text-red-600 text-sm ms-1'>{errors.message?.message}</p>
        </div>
        <button type='submit' className="w-full py-3 bg-darkBlue text-white text-sm font-medium rounded-full">Request tour</button>
      </form>
    </div>
  )
}

export default RequestTour;
