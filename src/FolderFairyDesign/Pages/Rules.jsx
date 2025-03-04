import React, { useState } from 'react'
import DashboardHeader from '../Layouts/DashboardHeader';

const Rules = () => {
  const [ruleName, setRuleName] = useState("John Doe automation");
  const [dataSource, setDataSource] = useState("Amanda's computer");
  const [title, setTitle] = useState("Title");
  const [contain, setContain] = useState("Contains");
  const [text, setText] = useState("Text");
  const [action, setAction] = useState("Move");
  const [destination, setDestination] = useState("Destination Folder");
  const [tag, setTag] = useState("");
  const [notification, setNotification] = useState("Send Notification to");
  const [schedule, setSchedule] = useState("");
  const [specificTime, setSpecificTime] = useState("Select Time");
  const [interval, setInterval] = useState({ interval: "Select Interval", time: "12:00" });
  const [immediately, setImmediately] = useState("")


  const options = ["Amanda's computer", "1", "2"];
  const titleOptions = ["Title", "1", "2"];
  const containOptions = ["Contain", "1", "2"];
  const textOptions = ["Text", "1", "2"];
  const actionOptions = ["Move", "1", "2"];
  const destinationOptions = ["Destination Folder", "1", "2"];
  const notificationOptions = ["Send Notification to", "1", "2"];
  const specificTimeOptions = ["12:00", "01:00", "02:00"];
  const intervalOptions = ["Daily", "Weekly", "Monthly"];
  const timeOptions = ["12:00", "01:00", "02:00"];


  const [toggleDropDowns, setToggleDropdowns] = useState({
    dataSource: false,
    title: false,
    contains: false,
    text: false,
    action: false,
    to: false,
    notification: false,
    specificTime: false,
    interval: false,
    time: false,
    immediately: false,
  });

  const handleSelect = (name) => () => {
    setToggleDropdowns(() => {
      const newDropdowns = {
        dataSource: false,
        title: false,
        contains: false,
        text: false,
        action: false,
        to: false,
        notification: false,
        specificTime: false,
        interval: false,
        time: false,
        immediately: false,
      };
      toggleDropDowns[name] ? newDropdowns[name] = false : newDropdowns[name] = true;
      return newDropdowns;
    });
  };

  const handleIntervalChange = (option) => {
    setInterval((prev) => ({ ...prev, interval: option }));
  };

  const handleTimeChange = (option) => {
    setInterval((prev) => ({ ...prev, time: option }));
  };

  return (
    <div className='flex flex-col'>
      <div className='sticky top-0 z-20'>
        <DashboardHeader />
      </div>
      <div className="flex flex-col pl-8 pr-8 xl:pr-40 2xl:pr-80 py-12 gap-8" style={{ fontFamily: "inter" }}>
        <div className="flex flex-col items-center w-full gap-12">
          <div className="bg-white p-8 rounded-lg border border-LightGray w-full">
            <div className="flex flex-col gap-2">
              <label className="block text-Charcoal text-sm font-bold">Rule Name</label>
              <input type="text" value={ruleName} onChange={(e) => setRuleName(e.target.value)} className="w-full p-4 border border-LightGray rounded-lg focus:outline-none" />
            </div>
          </div>
          <div className='-mt-12 -mb-[4.4rem] z-10 flex flex-col items-center'>
            <div className="h-10 w-px bg-PeriwinkleBlue" />
            <span className='px-[3.1rem] py-2 bg-LavenderMist border border-PeriwinkleBlue rounded-xl'>If</span>
          </div>
          <div className="bg-white p-8 rounded-lg border border-LightGray w-full">
            <div className="flex flex-col gap-2">
              <label className="block text-Charcoal text-sm font-bold">Data Source</label>
              <div className='relative'>
                <div className="w-full p-4 border text-MediumGray border-LightGray rounded-lg cursor-pointer focus:outline-none " onClick={handleSelect("dataSource")}>
                  {dataSource}
                  <img src='/FolderFairy/RulesPageIcons/arrowDown.svg' className={`float-right mt-1 ${toggleDropDowns.dataSource ? 'transform rotate-180' : ''}`} />
                </div>
                {toggleDropDowns.dataSource && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-LightGray rounded-lg">
                    {options.map((option, index) => (
                      <div key={index} className={`px-4 py-2 cursor-pointer ${dataSource === option ? 'bg-BlueViolet text-white' : ''} hover:bg-AliceBlue hover:text-black`}
                        onClick={() => {
                          setDataSource(option);
                          handleSelect("dataSource")();
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='-mt-12 -mb-[4.4rem] z-10 flex flex-col items-center'>
            <div className="h-10 w-px bg-PeriwinkleBlue" />
            <span className='px-10 py-2 bg-LavenderMist border border-PeriwinkleBlue rounded-xl'>And</span>
          </div>
          <div className="flex flex-col bg-white p-8 rounded-lg border border-LightGray w-full gap-8">
            <div className='flex flex-col gap-2'>
              <label className="block text-Charcoal text-sm font-bold">Refine the rule by adding multiple conditions</label>
              <div className='grid grid-cols-12 items-center gap-2'>
                <div className='relative col-span-4'>
                  <div className="w-full p-4 border text-MediumGray border-LightGray rounded-lg cursor-pointer focus:outline-none " onClick={handleSelect("title")}>
                    {title}
                    <img src='/FolderFairy/RulesPageIcons/arrowDown.svg' className={`float-right mt-1 ${toggleDropDowns.title ? 'transform rotate-180' : ''}`} />
                  </div>
                  {toggleDropDowns.title && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-LightGray rounded-lg">
                      {titleOptions.map((option, index) => (
                        <div key={index} className={`px-4 py-2 cursor-pointer ${title === option ? 'bg-BlueViolet text-white' : ''} hover:bg-AliceBlue hover:text-black`}
                          onClick={() => {
                            setTitle(option)
                            handleSelect("title")();
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className='relative col-span-4'>
                  <div className="w-full p-4 border text-MediumGray border-LightGray rounded-lg cursor-pointer focus:outline-none " onClick={handleSelect("contains")}>
                    {contain}
                    <img src='/FolderFairy/RulesPageIcons/arrowDown.svg' className={`float-right mt-1 ${toggleDropDowns.contains ? 'transform rotate-180' : ''}`} />
                  </div>
                  {toggleDropDowns.contains && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-LightGray rounded-lg">
                      {containOptions.map((option, index) => (
                        <div key={index} className={`px-4 py-2 cursor-pointer ${contain === option ? 'bg-BlueViolet text-white' : ''} hover:bg-AliceBlue hover:text-black`}
                          onClick={() => {
                            setContain(option)
                            handleSelect("contains")();
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className='relative col-span-4'>
                  <div className="w-full p-4 border text-MediumGray border-LightGray rounded-lg cursor-pointer focus:outline-none " onClick={handleSelect("text")}>
                    {text}
                    <img src='/FolderFairy/RulesPageIcons/arrowDown.svg' className={`float-right mt-1 ${toggleDropDowns.text ? 'transform rotate-180' : ''}`} />
                  </div>
                  {toggleDropDowns.text && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-LightGray rounded-lg">
                      {textOptions.map((option, index) => (
                        <div key={index} className={`px-4 py-2 cursor-pointer ${text === option ? 'bg-BlueViolet text-white' : ''} hover:bg-AliceBlue hover:text-black`}
                          onClick={() => {
                            setText(option)
                            handleSelect("text")();
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button className='flex items-center p-4 text-sm border border-LightGray rounded-lg w-[9.5rem]'>+ Add a condition</button>
          </div>
          <div className='-mt-12 -mb-[4.4rem] z-10 flex flex-col items-center'>
            <div className="h-10 w-px bg-PeriwinkleBlue" />
            <span className='px-9 py-2 bg-LavenderMist border border-PeriwinkleBlue rounded-xl'>Then</span>
          </div>
          <div className="bg-white p-8 rounded-lg border border-LightGray w-full">
            <div className="flex gap-12">
              <div className='flex flex-col w-full gap-2'>
                <label className="block text-gray-700 text-sm font-bold">Take this action once the condition is met</label>
                <div className="flex flex-col gap-3">
                  <div className='grid grid-cols-4 items-center gap-2'>
                    <label>Action</label>
                    <div className='relative col-span-3'>
                      <div className="w-full p-4 border text-MediumGray border-LightGray rounded-lg cursor-pointer focus:outline-none " onClick={handleSelect("action")}>
                        {action}
                        <img src='/FolderFairy/RulesPageIcons/arrowDown.svg' className={`float-right mt-1 ${toggleDropDowns.action ? 'transform rotate-180' : ''}`} />
                      </div>
                      {toggleDropDowns.action && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-LightGray rounded-lg">
                          {actionOptions.map((option, index) => (
                            <div key={index} className={`px-4 py-2 cursor-pointer ${action === option ? 'bg-BlueViolet text-white' : ''} hover:bg-AliceBlue hover:text-black`}
                              onClick={() => {
                                setAction(option)
                                handleSelect("action")();
                              }}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='grid grid-cols-4 items-center  gap-2'>
                    <span>Add Tag</span>
                    <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} className="w-full col-span-3  p-4 border border-LightGray rounded-lg" placeholder="Add Tag" />
                  </div>
                  <div className='grid grid-cols-4 items-center gap-2'>
                    <label className='text-Charcoal'>Notification</label>
                    <div className='relative col-span-3'>
                      <div className="w-full p-4 border text-MediumGray border-LightGray rounded-lg cursor-pointer focus:outline-none " onClick={handleSelect("notification")}>
                        {notification}
                        <img src='/FolderFairy/RulesPageIcons/arrowDown.svg' className={`float-right mt-1 ${toggleDropDowns.notification ? 'transform rotate-180' : ''}`} />
                      </div>
                      {toggleDropDowns.notification && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-LightGray rounded-lg">
                          {notificationOptions.map((option, index) => (
                            <div key={index} className={`px-4 py-2 cursor-pointer ${notification === option ? 'bg-BlueViolet text-white' : ''} hover:bg-AliceBlue hover:text-black`}
                              onClick={() => {
                                setNotification(option)
                                handleSelect("notification")();
                              }}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <label className="text-gray-700 text-sm font-bold " style={{ visibility: "hidden" }}>Take this action once the condition is met</label>
                <div className='grid grid-cols-12 items-center w-full gap-2'>
                  <span>To</span>
                  <div className='relative col-span-11'>
                    <div className="w-full p-4 border text-MediumGray border-LightGray rounded-lg cursor-pointer focus:outline-none " onClick={handleSelect("to")}>
                      {destination}
                      <img src='/FolderFairy/RulesPageIcons/arrowDown.svg' className={`float-right mt-1 ${toggleDropDowns.to ? 'transform rotate-180' : ''}`} />
                    </div>
                    {toggleDropDowns.to && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-LightGray rounded-lg">
                        {destinationOptions.map((option, index) => (
                          <div key={index} className={`px-4 py-2 cursor-pointer ${destination === option ? 'bg-BlueViolet text-white' : ''} hover:bg-AliceBlue hover:text-black`}
                            onClick={() => {
                              setDestination(option);
                              handleSelect("to")();
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg border border-LightGray">
          <div className="flex flex-col gap-2">
            <label className="block text-Charcoal text-sm font-bold mb-1">Schedule Rule</label>
            <div className="flex flex-col gap-2">
              <div className='flex items-center gap-2'>
                <input type="radio" name="schedule" value="specificTime" onChange={(e) => setSchedule(e.target.value)} />
                <span>Run rule at a specific time:</span>
              </div>
              <div className='grid grid-cols-12'>
                {schedule === "specificTime" && <div className='relative col-span-3'>
                  <div className="w-full p-4 border text-MediumGray border-LightGray rounded-lg cursor-pointer focus:outline-none " onClick={handleSelect("specificTime")}>
                    {specificTime}
                    <img src='/FolderFairy/RulesPageIcons/arrowDown.svg' className={`float-right mt-1 ${toggleDropDowns.specificTime ? 'transform rotate-180' : ''}`} />
                  </div>
                  {toggleDropDowns.specificTime && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-LightGray rounded-lg">
                      {specificTimeOptions.map((option, index) => (
                        <div key={index} className={`px-4 py-2 cursor-pointer ${notification === option ? 'bg-BlueViolet text-white' : ''} hover:bg-AliceBlue hover:text-black`}
                          onClick={() => {
                            setSpecificTime(option)
                            handleSelect("specificTime")();
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className='flex items-center gap-2'>
                <input type="radio" name="schedule" value="interval" onChange={(e) => setSchedule(e.target.value)} />
                <span>Run rule at an interval:</span>
              </div>
              <div className='grid grid-cols-12 gap-3'>
                {schedule === "interval" && <div className='relative col-span-3'>
                  <div className="w-full p-4 border text-MediumGray border-LightGray rounded-lg cursor-pointer focus:outline-none " onClick={handleSelect("interval")}>
                    {interval.interval}
                    <img src='/FolderFairy/RulesPageIcons/arrowDown.svg' className={`float-right mt-1 ${toggleDropDowns.interval ? 'transform rotate-180' : ''}`} />
                  </div>
                  {toggleDropDowns.interval && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-LightGray rounded-lg">
                      {intervalOptions.map((option, index) => (
                        <div key={index} className={`px-4 py-2 cursor-pointer ${interval.interval === option ? 'bg-BlueViolet text-white' : ''} hover:bg-AliceBlue hover:text-black`}
                          onClick={() => {
                            handleIntervalChange(option)
                            handleSelect("interval")();
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>}
                {schedule === "interval" && <div className='relative col-span-3'>
                  <div className="w-full p-4 border text-MediumGray border-LightGray rounded-lg cursor-pointer focus:outline-none " onClick={handleSelect("time")}>
                    {interval.time}
                    <img src='/FolderFairy/RulesPageIcons/arrowDown.svg' className={`float-right mt-1 ${toggleDropDowns.time ? 'transform rotate-180' : ''}`} />
                  </div>
                  {toggleDropDowns.time && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-LightGray rounded-lg">
                      {timeOptions.map((option, index) => (
                        <div key={index} className={`px-4 py-2 cursor-pointer ${interval.time === option ? 'bg-BlueViolet text-white' : ''} hover:bg-AliceBlue hover:text-black`}
                          onClick={() => {
                            handleTimeChange(option)
                            handleSelect("time")();
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>}
              </div>

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
