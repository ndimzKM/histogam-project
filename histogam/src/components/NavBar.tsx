//navbar    
import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
    const auth = getAuth();

return (
    <div className="flex justify-between items-center">
       <button className='mx-12 align-left text-blue-900' onClick={() => signOut(auth)}>Sign Out</button>
       </div>
)}

export default NavBar;




