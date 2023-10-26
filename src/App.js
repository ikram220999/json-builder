import { useState } from "react";
import beautify from "json-beautify";
import "./App.css";
import hljs from "highlight.js";

function App() {
  const input = {
    glossary: {
      title: "example glossary",
      GlossDiv: {
        title: "S",
        GlossList: {
          GlossEntry: {
            ID: "SGML",
            SortAs: "SGML",
            GlossTerm: "Standard Generalized Markup Language",
            Acronym: "SGML",
            Abbrev: "ISO 8879:1986",
            GlossDef: {
              para: "A meta-markup language, used to create markup languages such as DocBook.",
              GlossSeeAlso: ["GML", "XML"],
            },
            GlossSee: "markup",
          },
        },
      },
    },
  };

  const docs = document.getElementById("json");
  console.log("do");
  // docs.innerHTML(prettyPrintJson.toHtml(input))
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <strong className="text-3xl">Json Builder</strong>
        </div>

        <hr className="m-4"></hr>
        <div className="flex flex-col justify-center items-center">
          <strong>Result</strong>
          <pre
            id="json"
            className="bg-gray-800 text-white p-5 w-fit rounded-lg m-auto"
          >
            <div className="flex justify-between text-white ">
                Result
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
            </div>
            <hr className="mt-2"></hr>
            <div
              dangerouslySetInnerHTML={{
                __html: hljs.highlight(beautify(input, null, 2, 80), {
                  language: "json",
                }).value,
              }}
            />
          </pre>
        </div>
      </div>
    </>
  );
}

export default App;
