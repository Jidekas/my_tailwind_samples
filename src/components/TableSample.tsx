//import React from "react";

import DropdownSample from "./DropdownSample";
import ModalSample from "./ModalSample";
import { ButtonSmall } from "./Button";
import { useState } from "react";

const TableSample = () => {
  const [showModal, setShowModai] = useState(false);

  const handleShow = () => {
    setShowModai(!showModal);
  };
  return (
    <>
      <div className="p-5 h-screen bg-gray-100">
        <h1 className="text-xl mb-2">Your Orders</h1>

        <div className="overflow-auto rounded-lg shadow hidden md:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  NO.
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Details
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Date
                </th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                  Total
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    10001
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  King New fit Office chair, mesh + PU, black
                </td>

                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    Deliverd
                  </span>
                </td>

                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  16/10/2021
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  N12000
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="p-3 text-sm text-gray-700">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    10002
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700">
                  King New fit Office chair, mesh + PU, black
                </td>
                <td className="p-3 text-sm text-gray-700">
                  {" "}
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                    Shipped
                  </span>
                </td>
                <td className="p-3 text-sm text-gray-700">16/10/2021</td>
                <td className="p-3 text-sm text-gray-700">N12000</td>
              </tr>

              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700">
                  <a
                    href="#"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    10003
                  </a>
                </td>
                <td className="p-3 text-sm text-gray-700">
                  King New fit Office chair, mesh + PU, black
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                    Cancelled
                  </span>
                </td>
                <td className="p-3 text-sm text-gray-700">16/10/2021</td>
                <td className="p-3 text-sm text-gray-700">N12000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 space-y-4 md:hidden">
          <div className="bg-white space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">
                  #10001
                </a>
              </div>
              <div className="text-gray-500 ">10/10/2021</div>
              <div className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                Deliverd
              </div>
            </div>
            <div className="text-sm text-gray-700">
              {" "}
              King New fit Office chair, mesh + PU, black
            </div>
            <div className="text-sm font-medium text-black">N12000</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:hidden">
          <div className="bg-white space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">
                  #10002
                </a>
              </div>
              <div className="text-gray-500 ">10/10/2021</div>
              <div className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                Deliverd
              </div>
            </div>
            <div className="text-sm text-gray-700">
              {" "}
              King New fit Office chair, mesh + PU, yellow
            </div>
            <div className="text-sm font-medium text-black">N12000</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:hidden">
          <div className="bg-white space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <a href="#" className="text-blue-500 font-bold hover:underline">
                  #10003
                </a>
              </div>
              <div className="text-gray-500 ">10/10/2021</div>
              <div className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                Cancelled
              </div>
            </div>
            <div className="text-sm text-gray-700">
              {" "}
              King New fit Office chair, mesh + PU, black
            </div>
            <div className="text-sm font-medium text-black">N12000</div>
          </div>
        </div>
      </div>

      <div className="h-screen grid place-items-center bg-gradient-to-r from-sky-600 to-indigo-600">
        <DropdownSample />
      </div>

      <div className="h-screen grid place-items-center bg-gradient-to-r from-pink-400 to-yellow-200">
        <ButtonSmall children="Open" onClick={() => setShowModai(!showModal)} />
        <ModalSample visible={showModal} onClose={handleShow} />
      </div>
    </>
  );
};

export default TableSample;
