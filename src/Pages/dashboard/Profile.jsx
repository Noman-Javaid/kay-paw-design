import React, { useState } from 'react';
import Header from './Header';

const Profile = () => {
  const [profile, setProfile] = useState({
    photo: "https://placehold.co/100x100",
    name: "ALI",
    surname: "SHAHBAZ",
    email: "example1234@gmail.com",
    password: "090078601",
    phone: "(+1) 44 4224 8495"
  });

  const [showPassword, setShowPassword] = useState(false);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile(prevProfile => ({ ...prevProfile, photo: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setProfile(prevProfile => ({ ...prevProfile, photo: "https://placehold.co/100x100" }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile(prevProfile => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(profile);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (

    <div>
      <Header pageName={"Profile"} />
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center mt-8 rounded-lg border border-neutral-6 shadow-sm">
          <div className='p-9 w-full'>
            <div className="flex items-center mb-6">
              <img src={profile.photo} className="w-32 h-32 rounded-full object-cover" />
              <div className='space-x-5'>
                <input type="file" id='fileInput' className="hidden" onChange={handlePhotoChange} />
                <label htmlFor='fileInput' className="bg-transparent border border-neutral-5 text-neutral px-4 py-2 rounded-full cursor-pointer">
                  Change photo
                </label>
                <button type="button" onClick={handleRemovePhoto} className="text-neutral py-2">Remove</button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="block text-neutral font-semibold">Name</label>
                <input type="text" name="name" value={profile.name} onChange={handleChange} className="w-full mt-2 py-3 px-4 border border-neutral-5 rounded-lg" />
              </div>
              <div>
                <label className="block text-neutral font-semibold">Surname</label>
                <input type="text" name="surname" value={profile.surname} onChange={handleChange} className="w-full mt-2 py-3 px-4 border border-neutral-5 rounded-lg" />
              </div>
              <div>
                <label className="block text-neutral font-semibold">Email</label>
                <input type="email" name="email" value={profile.email} onChange={handleChange} className="w-full mt-2 py-3 px-4 border border-neutral-5 rounded-lg" />
              </div>
              <div>
                <label className="block text-neutral font-semibold">Password</label>
                <div className="relative">
                  <input type={showPassword ? "text" : "password"} name="password" value={profile.password} onChange={handleChange} className="w-full mt-2 py-3 px-4 border border-neutral-5 rounded-lg pr-16" />
                  <button type="button" onClick={togglePassword} className="absolute right-4 top-5">
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-neutral font-semibold">Phone</label>
                <input type="text" name="phone" value={profile.phone} onChange={handleChange} className="w-full mt-2 py-3 px-4 border border-neutral-5 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-7">
          <button type="submit" className="bg-darkBlue text-white px-10 py-2 rounded-full">Save</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
