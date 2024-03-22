import Header from './Header'; //Importing Header component
import Footer from './Footer'; //Importing Footer component

import AboutMe from './contentPages/AboutMe'; 
import Contact from './contentPages/Contact';
import Portfolio from './contentPages/Portfolio';
import Resume from './contentPages/Resume';

import { useState } from 'react'; //Importing useState hook from React

function Main() { 

    const [currentPage, setCurrentPage] = useState('AboutMe'); // State to track current page

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
          }
          if (currentPage === 'Portfolio') {
            return <Portfolio />;
          }
          if (currentPage === 'Contact') {
            return <Contact />;
          }
          return <Resume />;
    };

     // Function to handle page change
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} /> {/* Header component with props */}
      <main>
        {renderPage()} {/* Render the current page */}
      </main>

      <Footer /> {/* Footer component */}
    </div>
  );
}

export default Main; // Exporting main component