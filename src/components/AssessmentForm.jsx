import React, { useState } from 'react';

    function AssessmentForm({ onSubmit }) {
      const [metrics, setMetrics] = useState({
        deploymentFrequency: '',
        leadTimeForChanges: '',
        timeToRestoreService: '',
        changeFailureRate: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setMetrics((prevMetrics) => ({
          ...prevMetrics,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(metrics);
      };

      return (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Deployment Frequency
            </label>
            <input
              type="text"
              name="deploymentFrequency"
              value={metrics.deploymentFrequency}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Lead Time for Changes
            </label>
            <input
              type="text"
              name="leadTimeForChanges"
              value={metrics.leadTimeForChanges}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Time to Restore Service
            </label>
            <input
              type="text"
              name="timeToRestoreService"
              value={metrics.timeToRestoreService}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Change Failure Rate
            </label>
            <input
              type="text"
              name="changeFailureRate"
              value={metrics.changeFailureRate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Assess Maturity
          </button>
        </form>
      );
    }

    export default AssessmentForm;
