// Navigation component receives currentPage and handlePageChange as props
function Navigation({ currentPage, handlePageChange }) {
   
    return (
        <nav class="navbar">
            <ul>
                {/* About Me link */}
                <li>
                    <a 
                        href="#AboutMe" 
                        onClick={() => handlePageChange('AboutMe')}
                        // Add 'activeLink' class if currentPage is 'AboutMe'
                        className={currentPage === 'AboutMe' ? 'activeLink' : ''}
                    >
                        About Me
                    </a>
                </li>
                {/* Portfolio link */}
                <li>
                    <a 
                        href="#Portfolio" 
                        onClick={() => handlePageChange('Portfolio')}
                        // Add 'activeLink' class if currentPage is 'Portfolio'
                        className={currentPage === 'Portfolio' ? 'activeLink' : ''}
                    >
                        Portfolio
                    </a>
                </li>
                {/* Contact link */}
                <li>
                    <a 
                        href="#Contact" 
                        onClick={() => handlePageChange('Contact')}
                        // Add 'activeLink' class if currentPage is 'Contact'
                        className={currentPage === 'Contact' ? 'activeLink' : ''}
                    >
                        Contact
                    </a>
                </li>
                {/* Resume link */}
                <li>
                    <a 
                        href="#Resume" 
                        onClick={() => handlePageChange('Resume')}
                        // Add 'activeLink' class if currentPage is 'Resume'
                        className={currentPage === 'Resume' ? 'activeLink' : ''}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    ); 
}

export default Navigation;