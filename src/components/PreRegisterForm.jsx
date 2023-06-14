import React, { useState, useEffect, useRef } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PreRegisterForm = () => {
  const [children, setChildren] = useState([{ index: 0, gender: '' }]);
  const [parentGuardians, setParentGuardians] = useState([{ index: 0, relationship: '' }]);
  const [notes, setNotes] = useState('');

  const addChild = () => {
    setChildren([...children, { index: children.length, gender: '' }]);
  };

  const removeChild = () => {
    if (children.length > 1) {
      setChildren(children.slice(0, -1));
    }
  };

  const addParentGuardian = () => {
    setParentGuardians([...parentGuardians, { index: parentGuardians.length, relationship: '' }]);
  };

  const removeParentGuardian = () => {
    if (parentGuardians.length > 1) {
      setParentGuardians(parentGuardians.slice(0, -1));
    }
  };

  const clearForm = () => {
    setChildren([{ index: 0, gender: '' }]);
    setParentGuardians([{ index: 0, relationship: '' }]);
    setNotes('');
  };

  const handleChildGenderChange = (e, idx) => {
    const newChildren = [...children];
    newChildren[idx].gender = e.target.value;
    setChildren(newChildren);
  };

  const handleParentRelationshipChange = (e, idx) => {
    const newParentGuardians = [...parentGuardians];
    newParentGuardians[idx].relationship = e.target.value;
    setParentGuardians(newParentGuardians);
  };

  // Handling checkbox selection logic.
  const handleCheckboxChange = (e, day, idx) => {
    const isFullDay = e.target.name.includes("FullDay");
    if (isFullDay && e.target.checked) {
      document.getElementById(`${day}${idx}Morning`).checked = false;
      document.getElementById(`${day}${idx}Afternoon`).checked = false;
    } else if (e.target.checked) {
      document.getElementById(`${day}${idx}FullDay`).checked = false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Process form data
    const formData = new FormData(e.target);
    try {
      await axios.post('https://getform.io/f/6074e54b-7967-4143-bf14-ca9373b0c1b8', formData);
      toast.success('Form submitted successfully!');
      clearForm();
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    }
  };

  // List of days updated to include full names and weekend
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="mx-auto max-w-3xl"> {/* Narrowed the form */}
      <ToastContainer />
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Title */}
        <h1 className="text-2xl font-semibold text-center">Pre-Registration Form</h1>

        {children.map((child, idx) => (
          <div key={idx} className="space-y-4 bg-gray-50 p-4 rounded-md border border-gray-300"> {/* Responsive box */}
            <h2 className="text-xl font-bold">Child {idx + 1}</h2>
            <div className="grid grid-cols-3 gap-4"> {/* Adjusted columns for relative sizing */}
              <div className="col-span-2">
                <label htmlFor={`childName${idx}`} className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id={`childName${idx}`}
                  name={`childName${idx}`}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor={`childDOB${idx}`} className="block text-sm font-medium">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id={`childDOB${idx}`}
                  name={`childDOB${idx}`}
                  className="w-3/4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor={`childGender${idx}`} className="block text-sm font-medium">
                Gender
              </label>
              <select
                id={`childGender${idx}`}
                name={`childGender${idx}`}
                className="w-1/4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => handleChildGenderChange(e, idx)}
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {child.gender === 'other' && (
                <input
                  type="text"
                  className="mt-1 block w-1/2"
                  placeholder="Specify Gender"
                  name={`childGenderOther${idx}`}
                  required
                />
              )}
            </div>
              <label htmlFor={`childStartDate${idx}`} className="block text-sm font-medium">
                Start Date
              </label>
              <input
                type="date"
                id={`childStartDate${idx}`}
                name={`childStartDate${idx}`}
                className="w-1/4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            <div>
            </div>
            <div className="space-y-4 py-8">
              <label className="block text-xl font-bold">Expected Days (Mon-Fri)</label>
              <div className="grid grid-cols-7 gap-4 mt-1">
              {daysOfWeek.map((day, i) => (
                <div key={i} className="space-y-1">
                  <h3 className="font-bold">{day}</h3>
                    <div className="flex flex-col">
                      <label htmlFor={`${day}${idx}Morning`} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          id={`${day}${idx}Morning`}
                          name={`${day}${idx}Morning`}
                          className="mr-1"
                          onChange={(e) => handleCheckboxChange(e, day, idx)}
                        />
                        Morning
                      </label>
                      <label htmlFor={`${day}${idx}Afternoon`} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          id={`${day}${idx}Afternoon`}
                          name={`${day}${idx}Afternoon`}
                          className="mr-1"
                          onChange={(e) => handleCheckboxChange(e, day, idx)}
                        />
                        Afternoon
                      </label>
                      <label htmlFor={`${day}${idx}FullDay`} className="inline-flex items-center">
                        <input
                          type="checkbox"
                          id={`${day}${idx}FullDay`}
                          name={`${day}${idx}FullDay`}
                          className="mr-1"
                          onChange={(e) => handleCheckboxChange(e, day, idx)}
                        />
                        Full Day
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center">
          <button type="button" onClick={addChild} className="inline-flex items-center space-x-1">
            <FiPlus />
            <span>Add Another Child</span>
          </button>
          {children.length > 1 && (
            <button
              type="button"
              onClick={removeChild}
              className="inline-flex items-center space-x-1 ml-4"
            >
              <FiMinus />
              <span>Remove Last Child</span>
            </button>
          )}
        </div>

        <hr className="my-6" />

        {parentGuardians.map((parentGuardian, idx) => (
          <div key={idx} className="space-y-4 bg-gray-50 p-4 rounded-md border border-gray-300"> {/* Responsive box */}
            <h2 className="text-xl font-bold">Parent/Guardian {idx + 1}</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor={`parentName${idx}`} className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id={`parentName${idx}`}
                  name={`parentName${idx}`}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div>
                <label htmlFor={`parentRelation${idx}`} className="block text-sm font-medium">
                  Relationship
                </label>
                <select
                  id={`parentRelation${idx}`}
                  name={`parentRelation${idx}`}
                  className="w-3/4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => handleParentRelationshipChange(e, idx)}
                  required
                >
                  <option value="">Select Relationship</option>
                  <option value="Mother">Mother</option>
                  <option value="Father">Father</option>
                  {/* ...other options... */}
                  <option value="other">Other</option>
                </select>
                {parentGuardian.relationship === 'other' && (
                  <input
                    type="text"
                    className="mt-1 block w-full"
                    placeholder="Specify Relationship"
                    name={`parentRelationOther${idx}`}
                    required
                  />
                )}
              </div>
            </div>
            <div>
              <label htmlFor={`parentPhone${idx}`} className="block text-sm font-medium">
                Telephone
              </label>
              <input
                type="tel"
                id={`parentPhone${idx}`}
                name={`parentPhone${idx}`}
                className="w-1/4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div>
              <label htmlFor={`parentAddress${idx}`} className="block text-sm font-medium">
                Address
              </label>
              <input
                type="text"
                id={`parentAddress${idx}`}
                name={`parentAddress${idx}`}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div>
              <label htmlFor={`parentAddress${idx}`} className="block text-sm font-medium">
                Postcode
              </label>
              <input
                type="text"
                id={`parentAddress${idx}`}
                name={`parentAddress${idx}`}
                className="w-1/4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center animated-bg">
          <button
            type="button"
            onClick={addParentGuardian}
            className="inline-flex items-center space-x-1"
          >
            <FiPlus />
            <span>Add Another Parent/Guardian</span>
          </button>
          {parentGuardians.length > 1 && (
            <button
              type="button"
              onClick={removeParentGuardian}
              className="inline-flex items-center space-x-1 ml-4"
            >
              <FiMinus />
              <span>Remove Last Parent/Guardian</span>
            </button>
          )}
        </div>

        <div className="space-y-4">
          <label htmlFor="notes" className="block text-sm font-medium">
            Any notes or questions?
          </label>
          <textarea
            id="notes"
            name="notes"
            rows="3"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-end mt-6">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreRegisterForm;
