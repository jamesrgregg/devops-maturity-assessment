import act from 'react';

    function AssessmentResult({ result }) {
      return (
        <div className="mt-8 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold">Assessment Result</h2>
          <p className="mt-2 text-gray-700">
            Maturity Level: <strong>{result}</strong>
          </p>
        </div>
      );
    }

    export default AssessmentResult;
