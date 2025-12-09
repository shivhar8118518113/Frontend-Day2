import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      {/* Full-width content area */}
      <main className="container-fluid px-0 flex-grow-1 custom-header">
        <Home />   {/* ✅ अब Home में cards भी render होंगे */}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
