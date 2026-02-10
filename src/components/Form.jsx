import { useRef, useState } from "react";
import UserInput from "./UserInput";

export default function Form({ onCreate, onSelect }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const handleCleanFields = function () {
    // Clean input fields
    title.current.value = "";
    description.current.value = "";
    date.current.value = "";
  };

  const handleChangeProjectInfo = function () {
    // Verify that inputs are not empty
    if (
      title.current.value === "" ||
      description.current.value === "" ||
      date.current.value === ""
    )
      return;

    // Create project
    const userProjectInfo = {
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
      id: Math.random(),
      tasks: [],
    };

    handleCleanFields();

    onCreate(userProjectInfo);
  };

  return (
    <>
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={() => onSelect("home")}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleChangeProjectInfo}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div className="w-[35rem] mt-16">
        <UserInput label="Title" type="text" ref={title} />
        <UserInput label="Description" textarea ref={description} />
        <UserInput label="Due Date" type="date" ref={date} />
      </div>
    </>
  );
}
