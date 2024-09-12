import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChooseDataPage from './pages/ChooseDataPage';
import UploadDocumentPage from './pages/UploadDocumentPage';
import ChatbotPage from './pages/ChatbotPage';
import ProvideURL from './pages/ProvideURL';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center pt-40">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/choose-data" element={<ChooseDataPage />} />
          <Route path="/upload-document" element={<UploadDocumentPage />} />
          <Route path="/provide-url" element={<ProvideURL />} /> {/* Corrected */}
          <Route path="/chatbot" element={<ChatbotPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
