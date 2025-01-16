import React, { useState } from 'react';

const users = [
  { name: "James Wltcwicky", email: "example123@gmail.com", phone: "+441314253536", joinDate: "26/04/2020", status: "Active" },
  { name: "James Wltcwicky", email: "example123@gmail.com", phone: "+441314253536", joinDate: "26/04/2020", status: "Suspend" },
  { name: "James Wltcwicky", email: "example123@gmail.com", phone: "+441314253536", joinDate: "26/04/2020", status: "Active" },
  { name: "James Wltcwicky", email: "example123@gmail.com", phone: "+441314253536", joinDate: "26/04/2020", status: "Suspend" },
  { name: "James Wltcwicky", email: "example123@gmail.com", phone: "+441314253536", joinDate: "26/04/2020", status: "Active" },
  { name: "James Wltcwicky", email: "example123@gmail.com", phone: "+441314253536", joinDate: "26/04/2020", status: "Active" },
  { name: "James Wltcwicky", email: "example123@gmail.com", phone: "+441314253536", joinDate: "26/04/2020", status: "Active" },
  { name: "James Wltcwicky", email: "example123@gmail.com", phone: "+441314253536", joinDate: "26/04/2020", status: "Active" },
  { name: "James Wltcwicky", email: "example123@gmail.com", phone: "+441314253536", joinDate: "26/04/2020", status: "Active" },
  { name: "James Wltcwicky", email: "example123@gmail.com", phone: "+441314253536", joinDate: "26/04/2020", status: "Active" },
  { name: "James Wltcwicky", email: "example123@gmail.com", phone: "+441314253536", joinDate: "26/04/2020", status: "Active" },
  { name: "James Wltcwicky", email: "example123@gmail.com", phone: "+441314253536", joinDate: "26/04/2020", status: "Active" },
];

const Customers = () => {
  const [statusFilter, setStatusFilter] = useState("All");

  return (
    <div className="container-fluid p-5">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
        <div className="flex border-b">
          <button className={`px-4 py-1 font-medium text-sm ${statusFilter === "All" ? "text-neutral border-b-2 border-neutral" : "text-neutral-3"}`} onClick={() => setStatusFilter("All")}>All</button>
          <button className={`px-4 py-1 font-medium text-sm ${statusFilter === "Active" ? "text-neutral border-b-2 border-neutral" : "text-neutral-3"}`} onClick={() => setStatusFilter("Active")}>Active</button>
          <button className={`px-4 py-1 font-medium text-sm ${statusFilter === "Suspend" ? "text-neutral border-b-2 border-neutral" : "text-neutral-3"}`} onClick={() => setStatusFilter("Suspend")}>Suspend</button>
        </div>
        <div className="w-full max-w-xs flex justify-between items-center border border-neutral-5 rounded-lg text-neutral-3 px-3 gap-3">
          <input type="text" placeholder="Search" className="w-full py-2 font-medium rounded-lg focus:outline-none" />
          <i class="fa-solid fa-magnifying-glass" />
        </div>
      </div>
      <div className="border border-neutral-6 rounded-lg overflow-x-auto p-2">
        <table className="w-full bg-white">
          <thead className='text-left'>
            <tr className='bg-neutral-6 text-neutral-2 text-sm'>
              <th className="py-3 px-4 rounded-l-lg">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Phone no.</th>
              <th className="py-3 px-4">Join Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 rounded-r-lg"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className='border-b text-neutral text-sm'>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">{user.phone}</td>
                <td className="py-3 px-4">{user.joinDate}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${user.status === "Active" ? "bg-alert2 bg-opacity-10 text-alert2" : "bg-alert1 bg-opacity-10 text-alert1"}`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-2 px-4"><i class="fa-solid fa-ellipsis" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Customers;
