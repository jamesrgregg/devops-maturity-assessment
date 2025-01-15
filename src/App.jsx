import React, { useState } from 'react';
    import AssessmentForm from './components/AssessmentForm';
    import AssessmentResult from './components/AssessmentResult';
    import CustomerMetadataForm from './components/CustomerMetadataForm';

    function App() {
      const [result, setResult] = useState(null);
      const [customerData, setCustomerData] = useState(null);

      const assessMaturity = (metrics) => {
        const { deploymentFrequency, leadTimeForChanges, timeToRestoreService, changeFailureRate } = metrics;

        let maturityLevel = 'Low';

        if (deploymentFrequency === 'high' && leadTimeForChanges === 'short' &&
            timeToRestoreService === 'fast' && changeFailureRate === 'low') {
          maturityLevel = 'High';
        } else if (deploymentFrequency === 'medium' || leadTimeForChanges === 'medium') {
          maturityLevel = 'Medium';
        }

        setResult(maturityLevel);
      };

      const handleMetadataSubmit = (metadata) => {
        setCustomerData(metadata);
      };

      return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center mb-8">
            DevOps Maturity Assessment
          </h1>
          <CustomerMetadataForm onSubmit={handleMetadataSubmit} />
          {customerData && (
            <div className="mt-4">
              <h2 className="text-xl font-bold">Customer Metadata</h2>
              <p>Name: {customerData.customerName}</p>
              <p>DevOps Employees: {customerData.devOpsEmployees}</p>
              <p>Additional Info: {customerData.additionalInfo}</p>
            </div>
          )}
          <AssessmentForm onSubmit={assessMaturity} />
          {result && <AssessmentResult result={result} />}
        </div>
      );
    }

    export default App;
