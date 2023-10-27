import React, { useEffect, useState } from "react";
import beautify from "json-beautify";
import "./App.css";
import hljs from "highlight.js";
import Input from "./Input";

function App() {
  // const [formInput, setFormInput] = useState([
  //   <Input key={1}/>,
  //   <Input key={2}/>
  // ]);
  const [miniInput, setMiniInput] = useState({
    key: null,
    value: null,
  });
  const [miniInputObject, setMiniInputObject] = useState({});

  const [inputNumber, setInputNumber] = useState(0);
  const [inputRefArray, setInputRefArray] = useState(0);
  const [tempInput, setTempInput] = useState(null);
  const [formInput, setFormInput] = useState({
    kambing: "kambing",
    kucing: "kucing",
    arnab: {
      name: "arnab",
    },
  });
  const [ref, setRef] = useState(null);
  const [inputRef, setInputRef] = useState(null);
  const [input, setInput] = useState(null);

  const createArray = () => {
    setTempInput([]);
    setFormInput([]);
    setRef("array");
    setInputRef();
    alert("array created");
  };

  const createObject = () => {
    setTempInput({});
    setFormInput({});
    setRef("object");
    alert("object created");
  };

  const addValue = () => {

    
  
    if (ref == "array") {
      setFormInput((prevInput) => [...prevInput, miniInput.value]);
      
      // document.getElementById("value").focus();
    } else if (ref == "object") {
      setFormInput({
        ...formInput,
        [miniInput.key]: miniInput.value,
      });
      document.getElementById("id").focus();
    }

    setMiniInput({
      key: null,
      value: null,
    })

  };

  const handleChange = (e) => {
    setMiniInput({
      ...miniInput,
      [e.target.name]: e.target.value,
    });

  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addValue();
    }
  };

  const completeValue = () => {};

  const copyJson = () => {
    navigator.clipboard
      .writeText(formInput)
      .then(() => {
        alert("Text copied to clipboard: ", formInput);
      })
      .catch((err) => {
        alert("Unable to copy text to clipboard: ", err);
      });
  };

  return (
    <>
      <div className="w-3/4  m-auto my-5">
        <div className="flex flex-col justify-center items-center">
          <strong className="text-3xl">Json Builder</strong>
        </div>

        <div
          className="flex flex-row h-1/8 p-4 border border-gray-400 rounded-lg mt-10"
          id="form"
        >
          <div className="border rounded-lg border-indigo-400 px-4 bg-indigo-500">
            <button
              className={`bg-white text-gray-700 h-10 py-2 px-3 m-2 rounded-lg`}
              onClick={() => {
                createArray();
              }}
            >
              Array
            </button>
            <button
              className={`bg-white text-gray-700 h-10 py-2 px-3 m-2 rounded-lg`}
              onClick={() => {
                createObject();
              }}
            >
              Object
            </button>
          </div>
          {ref == "array" ? (
            <input
              className="border rounded-md h-10 px-3 m-2 w-60"
              placeholder="value"
              onChange={handleChange}
              value={miniInput.value}
              name="value"
              id="value"
              onKeyPress={handleKeyPress}
            ></input>
          ) : ref == "object" ? (
            <>
              <input
                className="border rounded-md h-10  px-3 m-2 w-60"
                placeholder="key"
                onChange={handleChange}
                value={miniInput.key}
                name="key"
                id="id"
              ></input>
              <input
                className="border rounded-md h-10 px-3 m-2 w-60"
                placeholder="value"
                onChange={handleChange}
                value={miniInput.value}
                name="value"
                id="value"
                onKeyPress={handleKeyPress}
              ></input>
            </>
          ) : null}
          <button
            className={`bg-indigo-500 text-white h-10 py-2 px-3 m-2 rounded-lg`}
            onClick={() => {
              addValue();
            }}
          >
            Add
          </button>
          <button
            className={`bg-indigo-500 text-white h-10 py-2 px-3 m-2 rounded-lg`}
            onClick={() => {
              completeValue();
            }}
          >
            Complete
          </button>
        </div>

        <hr className="m-10"></hr>
        <div className="flex flex-col justify-center items-center h-auto">
          <pre
            id="json"
            className="bg-gray-800 text-white p-5 w-fit rounded-lg m-auto w-full h-full"
          >
            <div className="flex justify-between text-white items-center">
              Result
              <div
                className="bg-gray-200 rounded-lg p-3 mb-2 cursor-pointer"
                onClick={() => copyJson()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 384 512"
                >
                  <path
                    d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 
                    0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 
                    78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 
                    16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 
                    24 0 1 0 0-48 24 24 0 1 0 0 48z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <hr className="mt-2"></hr>
            <div />
            {beautify(formInput, null, 2, 10)}
          </pre>
        </div>
      </div>
    </>
  );
}

export default App;
