import React, { useState } from 'react'
import DashboardHeader from '../Layouts/DashboardHeader';

const Rules = () => {
  const [ruleName, setRuleName] = useState("John Doe automation");
  const [dataSource, setDataSource] = useState("Amanda's computer");
  const [conditions, setConditions] = useState([{ id: 1, field: "Title", operator: "Contains", value: "Text" }]);
  const [action, setAction] = useState("Move");
  const [destination, setDestination] = useState("Destination Folder");
  const [tag, setTag] = useState("");
  const [notification, setNotification] = useState("Send Notification to");
  const [schedule, setSchedule] = useState("");

  const addCondition = () => {
    setConditions([...conditions, { id: conditions.length + 1, field: "Title", operator: "Contains", value: "" }]);
  };

  const removeCondition = (id) => {
    setConditions(conditions.filter(condition => condition.id !== id));
  };

  return (
    <div className='flex flex-col'>
      <div className='sticky top-0 z-10'>
        <DashboardHeader />
      </div>
      <div className="flex flex-col px-8 py-12 gap-8">
        <div className="flex flex-col gap-12">
          <div className="bg-white p-8 rounded-lg border border-LightGray">
            <div className="flex flex-col gap-2">
              <label className="block text-Charcoal text-sm font-bold">Rule Name</label>
              <input type="text" value={ruleName} onChange={(e) => setRuleName(e.target.value)} className="w-full p-4 border border-LightGray rounded-lg" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-LightGray">
            <div className="flex flex-col gap-2">
              <label className="block text-Charcoal text-sm font-bold">Data Source</label>
              <select value={dataSource} onChange={(e) => setDataSource(e.target.value)} className="w-full p-4 border border-LightGray rounded-lg">
                <option>Amanda's computer</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col bg-white p-8 rounded-lg border border-LightGray gap-8">
            <div className='flex flex-col gap-2'>
              <label className="block text-Charcoal text-sm font-bold">Refine the rule by adding multiple conditions</label>
              {conditions.map(condition => (
                <div key={condition.id} className="flex justify-between items-center gap-2">
                  <select value={condition.field} onChange={(e) => {
                    const newConditions = conditions.map(c => c.id === condition.id ? { ...c, field: e.target.value } : c);
                    setConditions(newConditions);
                  }} className="w-full p-4 border border-LightGray rounded-lg">
                    <option>Title</option>
                  </select>
                  <select value={condition.operator} onChange={(e) => {
                    const newConditions = conditions.map(c => c.id === condition.id ? { ...c, operator: e.target.value } : c);
                    setConditions(newConditions);
                  }} className="w-full p-4 border border-LightGray rounded-lg">
                    <option>Contains</option>
                  </select>
                  <input type="text" value={condition.value} onChange={(e) => {
                    const newConditions = conditions.map(c => c.id === condition.id ? { ...c, value: e.target.value } : c);
                    setConditions(newConditions);
                  }} className="w-full p-4 border border-LightGray rounded-lg" placeholder="Text" />
                  <button onClick={() => removeCondition(condition.id)} className="ml-2 text-MediumGray"><i className="fas fa-times" /></button>
                </div>
              ))}
            </div>
            <button onClick={addCondition} className='flex items-center p-4 border border-LightGray rounded-lg w-40'>+ Add a condition</button>
          </div>

          <div className="bg-white p-8 rounded-lg border border-LightGray">
            <div className="flex flex-col gap-2">
              <div className='flex flex-col w-full gap-2'>
                <label className="block text-gray-700 text-sm font-bold">Take this action once the condition is met</label>
                <div className="flex justify-between items-center gap-5">
                  <div className='flex justify-between items-center w-full gap-2'>
                    <span>Action</span>
                    <select value={action} onChange={(e) => setAction(e.target.value)} className="w-full p-4 border border-LightGray rounded-lg">
                      <option>Move</option>
                    </select>
                  </div>
                  <div className='flex justify-between items-center w-full gap-2'>
                    <span>To</span>
                    <select value={destination} onChange={(e) => setDestination(e.target.value)} className="w-full p-4 border border-LightGray rounded-lg">
                      <option>Destination Folder</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className='flex justify-between items-center w-full gap-2'>
                  <span>Add Tag</span>
                  <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} className="w-full p-4 border border-LightGray rounded-lg" placeholder="Add Tag" />
                </div>
                <div className='flex justify-between items-center w-full gap-2'>
                  <span>Notification</span>
                  <select value={notification} onChange={(e) => setNotification(e.target.value)} className="w-full p-4 border border-LightGray rounded-lg">
                    <option>Send Notification to</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-LightGray">
          <div className="flex flex-col gap-2">
            <label className="block text-Charcoal text-sm font-bold mb-1">Schedule Rule</label>
            <div className="flex items-center gap-2">
              <input type="radio" name="schedule" value="specific_time" onChange={(e) => setSchedule(e.target.value)} />
              <span>Run rule at a specific time:</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="schedule" value="interval" onChange={(e) => setSchedule(e.target.value)} />
              <span>Run rule at an interval:</span>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="schedule" value="immediately" onChange={(e) => setSchedule(e.target.value)} />
              <span>Run rule immediately when a file is added</span>
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-4">
          <button className="bg-BlueViolet text-white font-medium px-5 py-3 rounded-lg">Create Rule</button>
          <button className="border border-LightGray font-medium px-5 py-3 rounded-lg">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Rules;
