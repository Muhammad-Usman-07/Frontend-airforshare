import React from 'react'

const Footer = () => {
  return (
    // <!-- Footer -->
<footer className="bg-black text-white py-2">
  <div className="container mx-auto px-0 md:px-1 flex flex-col md:flex-row items-center justify-between">
    
    {/* <!-- Footer Info --> */}
    <div className="mb-2 md:mb-0">
      {/* <h2 className="text-2xl font-bold mb-2">Your Name</h2> */}
      <p className="text-sm">© 2024 Muhammad Usman. All rights reserved.</p>
    </div>
    
    {/* <!-- Social Media Icons --> */}
    <div className="flex space-x-6">
      <a href="https://www.linkedin.com/in/m-usman-89068b294" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM9 19H6V9h3v10zm-1.5-11.5c-1 0-1.5-.75-1.5-1.5s.5-1.5 1.5-1.5 1.5.75 1.5 1.5-.5 1.5-1.5 1.5zm12 11.5h-3v-5.5c0-1.5-.5-2.5-1.5-2.5-1.5 0-2 1-2 2.5v5.5h-3V9h3v1.5c.5-1 1.5-2 3-2 2 0 4 1.5 4 4.5v6z"></path>
        </svg>
      </a>
      <a href="https://github.com/Muhammad-Usman-07" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.15 6.84 9.47.5.09.68-.22.68-.49v-1.9c-2.84.62-3.44-1.37-3.44-1.37-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.53 2.35 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.1-4.55-4.91 0-1.08.39-1.95 1.02-2.63-.1-.25-.44-1.27.1-2.66 0 0 .83-.27 2.73 1.03A9.507 9.507 0 0 1 12 4.1c.84.003 1.68.11 2.48.32 1.88-1.3 2.7-1.03 2.7-1.03.54 1.39.2 2.41.1 2.66.63.68 1.02 1.55 1.02 2.63 0 3.81-2.33 4.66-4.56 4.91.36.31.68.92.68 1.85v2.73c0 .28.18.58.68.49C21.13 20.15 24 16.41 24 12c0-5.52-4.48-10-10-10z"></path>
        </svg>
      </a>
      <a href="https://x.com/usman_07_07" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3c-.882.39-1.83.65-2.82.77 1.02-.61 1.8-1.57 2.17-2.72-.95.56-2.01.97-3.13 1.19C18.34 1.77 17.23 1 16 1c-2.34 0-4.24 1.9-4.24 4.24 0 .33.04.66.1.97-3.53-.18-6.67-1.87-8.77-4.44-.37.63-.58 1.37-.58 2.15 0 1.48.76 2.79 1.91 3.55-.7-.02-1.36-.21-1.93-.53v.05c0 2.08 1.48 3.8 3.45 4.19-.36.1-.74.16-1.12.16-.28 0-.55-.03-.82-.07.55 1.72 2.12 2.97 3.98 3.01-1.46 1.15-3.29 1.83-5.28 1.83-.34 0-.67-.02-1-.06 1.85 1.19 4.05 1.89 6.4 1.89 7.68 0 11.89-6.36 11.89-11.89 0-.18-.01-.35-.02-.53.82-.59 1.53-1.32 2.09-2.16z"></path>
        </svg>
      </a>
      {/* <!-- Add more social media links as needed --> */}
    </div>
  </div>
</footer>

  )
}

export default Footer
