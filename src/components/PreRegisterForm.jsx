import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const PreRegisterForm = () => {
  const [children, setChildren] = useState([{ index: 0 }]);
  const [parentGuardians, setParentGuardians] = useState([{ index: 0 }]);

  const addChild = () => {
    setChildren([...children, { index: children.length }]);
  };

  const addParentGuardian = () => {
    setParentGuardians([...parentGuardians, { index: parentGuardians.length }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data and submit to the backend
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {children.map((child, idx) => (
        <div key={idx} className="space-y-4">
          <h2 className="text-xl font-bold">Child {idx + 1}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor={`childName${idx}`} className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id={`childName${idx}`}
                name={`childName${idx}`}
                className="mt-1 block w-full"
                required
              />
            </div>
            <div>
              <label htmlFor={`childDOB${idx}`} className="block text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                id={`childDOB${idx}`}
                name={`childDOB${idx}`}
                className="mt-1 block w-full"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor={`childGender${idx}`} className="block text-sm font-medium">Gender</label>
            <select
              id={`childGender${idx}`}
              name={`childGender${idx}`}
              className="mt-1 block w-full"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor={`childStartDate${idx}`} className="block text-sm font-medium">Start Date</label>
            <input
              type="date"
              id={`childStartDate${idx}`}
              name={`childStartDate${idx}`}
              className="mt-1 block w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Expected Days (Mon-Fri)</label>
            <div className="grid grid-cols-2 gap-4 mt-1">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                <div key={i} className="space-y-1">
                  <label htmlFor={`${day}${idx}Morning`} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      id={`${day}${idx}Morning`}
                      name={`${day}${idx}Morning`}
                      className="mr-1"
                    />
                    {day} Morning
                  </label>
                  <label htmlFor={`${day}${idx}Afternoon`} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      id={`${day}${idx}Afternoon`}
                      name={`${day}${idx}Afternoon`}
                      className="mr-1"
                    />
                    {day} Afternoon
                  </label>
                  <label htmlFor={`${day}${idx}FullDay`} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      id={`${day}${idx}FullDay`}
                      name={`${day}${idx}FullDay`}
                      className="mr-1"
                    />
                    {day} Full Day
                  </label>
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
      </div>
    
      <hr className="my-6" />
    
      {parentGuardians.map((parentGuardian, idx) => (
        <div key={idx} className="space-y-4">
          <h2 className="text-xl font-bold">Parent/Guardian {idx + 1}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor={`parentName${idx}`} className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id={`parentName${idx}`}
                name={`parentName${idx}`}
                className="mt-1 block w-full"
                required
              />
            </div>
            <div>
              <label htmlFor={`parentRelation${idx}`} className="block text-sm font-medium">Relationship</label>
              <input
                type="text"
                id={`parentRelation${idx}`}
                name={`parentRelation${idx}`}
                className="mt-1 block w-full"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor={`parentPhone${idx}`} className="block text-sm font-medium">Telephone</label>
            <input
              type="tel"
              id={`parentPhone${idx}`}
              name={`parentPhone${idx}`}
              className="mt-1 block w-full"
              required
            />
          </div>
          <div>
            <label htmlFor={`parentAddress${idx}`} className="block text-sm font-medium">Address</label>
            <input
              type="text"
              id={`parentAddress${idx}`}
              name={`parentAddress${idx}`}
              className="mt-1 block w-full"
              required
            />
          </div>
        </div>
      ))}
      <div className="flex items-center justify-center">
        <button type="button" onClick={addParentGuardian} className="inline-flex items-center space-x-1">
          <FiPlus />
          <span>Add Another Parent/Guardian</span>
        </button>
      </div>
    
      <div className="flex items-center justify-end mt-6">
        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Submit
        </button>
      </div>
    </form>
    );
};

export default PreRegisterForm
