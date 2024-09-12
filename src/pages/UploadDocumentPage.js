import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Client } from '@botpress/client';

const UploadDocumentPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const client = new Client({
    token: 'bp_pat_osvqpwZZye9pcYSkXxZ2RXHH0AbHwLqUVxOW', // Replace with your actual token
    botId: 'c4dbd48b-7f8d-4364-807f-a2f5aac14e27',
    workspaceId: 'wkspace_01J695K8Q5VFK2KWM6Y5AGA2M1'
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    setLoading(true);
    setUploadStatus('');
    
    // Read the content of the selected file
    const fileReader = new FileReader();
    fileReader.onload = async (e) => {
      const fileContent = e.target.result;
      
      try {
        // Upload the file to Botpress
        const { file } = await client.uploadFile({
          key: `kb-2f0a7ea639/${selectedFile.name}`, // Adjust the key according to your requirements
          accessPolicies: [],
          content: fileContent,
          index: true,
          tags: {
            source: 'knowledge-base',
            kbId: 'kb-2f0a7ea639', // Replace with your actual knowledge base ID
            title: selectedFile.name
          }
        });
        
        setUploadStatus(`File "${file.name}" uploaded successfully.`);
        
        // Redirect to ChatbotPage after successful upload
        navigate('/chatbot'); // Navigate to the chatbot page
      } catch (error) {
        setUploadStatus('Error uploading file.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    // Read the file as text
    fileReader.readAsText(selectedFile);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Upload Document</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-4"
            accept=".txt,.pdf,.docx" // Adjust based on allowed file types
          />
          
          <button
            type="submit"
            className={`px-4 py-2 rounded bg-blue-500 text-white ${loading ? 'opacity-50' : ''}`}
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </form>

        {uploadStatus && <p className="mt-4 text-red-500">{uploadStatus}</p>}
      </div>
    </div>
  );
};

export default UploadDocumentPage;
