'use client'
import React, { useState } from 'react';

const Dashboard: React.FC = () => {
  const [selectedDiagnosis, setSelectedDiagnosis] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/4 bg-gray-800 md:h-full p-4">
        <h2 className="mb-4">What to write here?</h2>
        <div>
          <label htmlFor="diagnosis" className="block mb-2 text-sm font-medium text-white dark:text-white">Select Diagnosis</label>
          <select 
            id="diagnosis" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setSelectedDiagnosis(e.target.value)}
          >
            <option disabled selected>Choose a Diagnosis</option>
            <option value="Fracture">Fracture</option>
            <option value="Brain Hemorrhage">Brain Hemorrhage</option>
            <option value="Cystic Fibrosis">Cystic Fibrosis</option>
            <option value="Migraines">Migraines</option>
          </select>
        </div>
        <div>
          <label htmlFor="aiModel" className="block mt-4 mb-2 text-sm font-medium text-white dark:text-white">Select AI models</label>
          <select 
            id="aiModel" 
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${selectedDiagnosis ? '' : 'disabled'}`}
            disabled={!selectedDiagnosis}
          >
            <option disabled selected>Choose an AI model</option>
            <option value="Model1">Model 1</option>
            <option value="Model2">Model 2</option>
            <option value="Model3">Model 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="dicomFile" className="block mt-4 mb-2 text-sm font-medium text-white dark:text-white">Upload DICOM Image, NIfTI File, or ZIP Folder</label>
          <input 
            type="file" 
            id="dicomFile" 
            accept=".dcm,.nii,.nii.gz,.zip" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex flex-wrap justify-center">
				<button type="button" className="px-5 py-1 mt-4 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50">Scan</button>
			</div>
      </div>
      <div className="w-full md:w-3/4 bg-gray-300 md:h-full p-4">
        <h2 className="mb-4">Results</h2>
       
      </div>
    </div>
  );
};

export default Dashboard;
