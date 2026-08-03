import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

// Page Views Import
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a1a1b] p-6 flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 items-stretch">
          
          {/* Navigation Sidebar Drawer */}
          <Sidebar />

          {/* Primary Page Canvas Content */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* Header inside routing context if needed */}
              <Header title="Admin Dashboard" description="Overview management panel." />
              
              <main className="min-h-[400px]">
                <Routes>
                  {/* Default redirect to dashboard */}
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </main>
            </div>

            {/* Persistent Footer */}
            <Footer />
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;