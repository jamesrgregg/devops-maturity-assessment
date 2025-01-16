import React, { useState } from 'react';

    function CustomerMetadataForm({ onSubmit }) {
      const [metadata, setMetadata] = useState({
        customerName: '',
        devOpsEmployees: '',
        additionalInfo: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setMetadata((prevMetadata) => ({
          ...prevMetadata,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(metadata);
      };

      return (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={metadata.customerName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="devOpsEmployees" className="block text-sm font-medium text-gray-700">
              Number of DevOps Employees
            </label>
            <input
              type="number"
              id="devOpsEmployees"
              name="devOpsEmployees"
              value={metadata.devOpsEmployees}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={metadata.additionalInfo}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Submit Metadata
          </button>
        </form>
      );
    }

    export default CustomerMetadataForm;
