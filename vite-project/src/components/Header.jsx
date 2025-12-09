import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <div className="gme-logo-header">
          <div className="gme-logo-icon-header">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#DC2626"/>
              <path d="M20 10L25 18H33L27 24L30 32L20 26L10 32L13 24L7 18H15L20 10Z" fill="white" transform="rotate(-45 20 20)"/>
            </svg>
          </div>
          <span className="gme-logo-text-header">GME</span>
        </div>
      </div>

      <div className="header-center">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search transaction"
            className="search-input"
          />
          <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 19L14.65 14.65" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="header-right">
        <div className="header-item">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM9 5H11V7H9V5ZM9 9H11V15H9V9Z" fill="#4A5568"/>
          </svg>
          <span className="header-text">English</span>
        </div>

        <div className="header-item notification-bell">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2C6.68629 2 4 4.68629 4 8V13L2 15V16H18V15L16 13V8C16 4.68629 13.3137 2 10 2Z" fill="#4A5568"/>
            <path d="M10 18C8.89543 18 8 17.1046 8 16H12C12 17.1046 11.1046 18 10 18Z" fill="#4A5568"/>
          </svg>
          <span className="notification-badge">21</span>
        </div>

        <div className="header-item profile-picture">
          <div className="avatar">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#E2E8F0"/>
              <path d="M16 10C17.6569 10 19 11.3431 19 13C19 14.6569 17.6569 16 16 16C14.3431 16 13 14.6569 13 13C13 11.3431 14.3431 10 16 10Z" fill="#4A5568"/>
              <path d="M16 18C12.6863 18 10 20.6863 10 24H22C22 20.6863 19.3137 18 16 18Z" fill="#4A5568"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

