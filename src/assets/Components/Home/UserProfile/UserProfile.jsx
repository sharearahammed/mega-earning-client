import React, { useState } from "react";
import { TbDeviceFloppy } from "react-icons/tb";
import useAuth from "../../Hook/useAuth";

const UserProfile = () => {

    const [darkMode, setDarkMode] = useState(false);
    const {user} = useAuth();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  React.useEffect(() => {
    TbDeviceFloppy('.link', {
      placement: 'bottom',
    });
  }, []);
    return (
        <div>
            <body className={`font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover ${darkMode ? 'text-gray-100' : 'text-gray-900'}`} style={{ backgroundImage: "url('https://source.unsplash.com/1L71sPT5XKc')" }}>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto py-6 lg:my-0">
        <div id="profile" className={`w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} opacity-75 mx-6 lg:mx-0`}>
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="flex lg:hidden rounded-full shadow-xl mx-auto mt-5 h-48 w-48 bg-cover bg-center"><img src={user?.photoURL} alt="" /></div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user?.displayName}</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              {user?.email}
            </p>
            <p className="pt-8 text-sm">Create ID: <br /> {user?.metadata.creationTime}</p>
            <div className="pt-12 pb-8">
              <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">Get In Touch</button>
            </div>
            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <a className="link" href="https://www.facebook.com/Sharear.Ahammed.10" data-tippy-content="@facebook_handle">
                <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Facebook</title>
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                </svg>
              </a>
              <a className="link" href="#" data-tippy-content="@twitter_handle">
                <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Twitter</title>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.173-1.559-3.591-1.559-2.717 0-4.924 2.206-4.924 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.631 1.953 2.445 3.377 4.6 3.418-1.68 1.318-3.808 2.105-6.102 2.105-.396 0-.788-.023-1.175-.069 2.189 1.404 4.768 2.221 7.548 2.221 9.054 0 14.002-7.497 14.002-13.986 0-.21 0-.423-.015-.637.962-.695 1.8-1.562 2.46-2.549z" />
                </svg>
              </a>
              <a className="link" href="#" data-tippy-content="@github_handle">
                <svg className="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.756-1.334-1.756-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.235 1.84 1.235 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.932 0-1.31.467-2.381 1.235-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.005-.405 1.022.006 2.048.139 3.006.405 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.874.118 3.176.77.84 1.232 1.911 1.232 3.221 0 4.61-2.807 5.629-5.479 5.921.43.371.823 1.1.823 2.215 0 1.599-.015 2.887-.015 3.281 0 .32.218.694.824.576C20.565 21.795 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img src={user?.photoURL} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block h-[300px]" alt="Profile" />
        </div>
      </div>
      <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
        <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; Your Name</a>
        <br />
        <p className="text-gray-500">Template from <a href="https://www.tailwindtoolbox.com" className="no-underline hover:underline">TailwindToolbox</a></p>
        <button onClick={toggleTheme} className="bg-gray-700 text-white px-3 py-1 rounded-full mt-4">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </body>
        </div>
    );
};

export default UserProfile;