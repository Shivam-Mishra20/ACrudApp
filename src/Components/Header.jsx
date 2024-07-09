import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CgMenuRound } from 'react-icons/cg';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('signupData'));
    setCurrentUser(loggedInUser);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('signupData');
    localStorage.removeItem('loged')
    setCurrentUser('DataApp')
    navigate('/login');

  };

  return (
    <div>
      <nav className='w-full flex items-center justify-between px-3 h-16'
        style={{
          backgroundColor: '#21D4FD',
          backgroundImage: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
        }}
      >
        <div>
          <span className='text-purple-900 text-2xl font-semibold font-mono'>
            {currentUser ? currentUser[0].username : " DataAppp"}
          </span>
        </div>

        <div className='flex items-center justify-center'>
          <div className={`text-white ${isOpen ? 'w-[200px] flex items-center justify-center min-h-screen bg-purple-400 z-20 absolute top-16 right-0' : ''} items-center`}>
            <ul className={`md:flex items-center justify-center ${isOpen ? 'flex-col gap-4 text-center' : 'hidden sm:flex'}`}>
              <li className={`list-none px-3 ${isOpen && "py-4 hover:text-black hover:translate-y-2"}`}>
                <Link to="/create">Home</Link>
              </li>
              <li className={`list-none px-3 ${isOpen && "py-4 hover:text-black hover:translate-y-2"}`}>
                <Link to="/read">DataCollection</Link>
              </li>
              <li className={`list-none px-3 ${isOpen && "py-4 hover:text-black hover:translate-y-2"}`}>
                <Link to="/update">Update</Link>
              </li>
            </ul>
          </div>
          <div className=' flex items-center gap-1 justify-between'>
            <div className={` `}>
              <button className='text-gray-100 mx-2 rounded-lg hover:text-green-500 px-3 py-2 bg-gray border-white border' onClick={handleLogout}>
                Logout
              </button>
            </div>
            <div className='text-white sm:hidden'>
              {!isOpen ? (
                <button onClick={toggleMenu} className='focus:outline-none'>
                  <CgMenuRound size={32} />
                </button>
              ) : (
                <button onClick={toggleMenu} className='focus:outline-none'>
                  <IoMdCloseCircleOutline size={32} />
                </button>
              )}
            </div>

          </div>

        </div>


      </nav>
    </div>
  );
};

export default Header;
