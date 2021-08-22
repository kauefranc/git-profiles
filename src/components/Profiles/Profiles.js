import React from 'react';
import './Profiles.css';

const Profile = ({ userData, userRepo}) => {
    return(
        <div className="Profile">

                <div className="img-wrapper">
                    <img src={userData.avatar_url} alt=""/>
                </div>

                <div className="profile-data">
                    <a href={`https://github.com/${userData.login}`} target="_blank"> <h1>{userData.name}</h1> </a>
                        <div className="profile-data-content">
                            <div>
                            {userData.followers>=0 && <h2>{userData.followers} followers</h2>}
                            {userData.following >=0 &&<h2>{userData.following} following</h2>}
                            {userData.public_repos >=0 && <h2>{userData.public_repos} repositories</h2>}
                            </div>
                        </div>
                </div>

                <div className="profile-repo">
                {userData.public_repos >=0 && <h1>Repositories:</h1>}
                    {userRepo.map(repo => (
                        
                            <div className="item">
                              <a href={repo.html_url} className="header" target="_blank">
                                {repo.name}
                                </a>
                            </div>
                     ))}
                </div>

            </div>
    );
}

export default Profile;