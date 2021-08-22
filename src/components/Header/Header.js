import React, { useEffect, useState } from 'react';
import Profile from '../Profiles/Profiles';
import './Header.css';

const Header = () => {

    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState([
        { id: '0', name: 'Username', avatar_url:"https://wallpaperaccess.com/full/3415007.jpg", followers: 2}


    ]);
    const [userRepo, setUserRepo] = useState([]);


    

    const submitHandler = async e => {
        e.preventDefault();
    
        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        console.log(profileJson);
    
        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        console.log(repoJson);
    
        if (profileJson) {
          setUserData(profileJson);
          setUserRepo(repoJson);
          
        } 
      };

    return(
        <>
        <div className="Header-wrapper">

            {/* HEADER */}
            <div className="Header">
                
                <a href="https://github.com" class="main-header-link">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt="Octacat"/>
                </a>
                    <input placeholder="Username..." value={username} onChange={e => setUsername(e.target.value)}/>
                    <button onClick={submitHandler}>Search</button>
                
            </div>
        </div>

        <Profile userData={userData} userRepo={userRepo}/>
        </>
    );
};

export default Header;