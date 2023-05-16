import React from "react";
import { differenceInDays, formatDistanceToNow } from 'date-fns'
import { tr } from "date-fns/locale"

const Task = ({ taskObj, onComplete }) => {
   
  const time = formatDistanceToNow(new Date(taskObj.deadline),  {
    addSuffix: true,
    locale: tr,
  });

  console.log("differenceInDays", differenceInDays(new Date(taskObj.deadline), new Date()));

  const closeToDeadline = differenceInDays(new Date(taskObj.deadline), new Date()) <= 3;

  return (
    <div className="p-6 bg-white rounded leading-normal mt-4 shadow-md">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim: { " " }
        <span className={closeToDeadline ? "bg-[#ffd9d4] rounded-sm inline-block py-[3px] px-2" : "bg-[#d2d5fd] rounded-sm inline-block py-[3px] px-2"} >{time}</span></div>
      <p className="pt-2 pr-0 pb-3 text-sm text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block py-1 px-3 mr-1 mb-1.5 text-sm border border-solid rounded-full border-gray-200" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button className="block px-3 py-2 ml-auto bg-[#fecc91] shadow-sm rounded border-0 cursor-pointer" onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
