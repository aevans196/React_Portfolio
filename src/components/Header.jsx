// Import the Navigation component from './Navigation'
import Navigation from './Navigation';

// Header component receives currentPage and handlePageChange as props
function Header({ currentPage, handlePageChange }) {
    // Return JSX for the header section
    return (
        <header>
            <h1>Alysa A. Evans</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

        </header>
    );
}

export default Header;