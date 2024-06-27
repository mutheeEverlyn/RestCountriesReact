import React from 'react';

const Header: React.FC = () => {
  const toggleTheme = () => {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    }
  }, []);

  return (
    <header className="container">
      <div className="content">
        <h2 className="title"><a href="/">Where in the world?</a></h2>
        <p className="theme" onClick={toggleTheme}><i className="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
