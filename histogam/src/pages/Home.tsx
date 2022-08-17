import * as React from 'react';
import '../styles/styles.scss';

import { getAuth, signOut } from 'firebase/auth';
import NavBar from '../components/NavBar';

export interface IHomePageProps {}


 const Home: React.FunctionComponent<IHomePageProps> = (props) => {

    const auth = getAuth();

    return (
       
        <main className="home">
            <button className="ctrl-btn">
<i className='bx bx-chevron-left' ></i>
            </button>
            <section className="main">
                <section className="post-image"></section>
                <section className="post-info">
                    <div className="user flex items-center">
                        <div className="avatar w-10 h-10 rounded-full"></div>
                        <span className="username">fatajoman</span>
                        <span>following</span>
                    </div>
                    <p>
                        A family (unknown) celebrating Gambia's Independence in
                        Uppsala, Sweden in 1965. 📸Gambia Historical Photography
                    </p>
                    <Comment />
                    <Comment />
                    <Comment />
                    <MakeComment />
                </section>
            </section>
            <button className="ctrl-btn">
<i className='bx bx-chevron-right' ></i>
            </button>
            <NavBar />
        </main>

        
    );
}

const MakeComment = () => {
    return (
        <div className="make-comment">
            <div className="flex items-center justify-between">
                <div className="first-icons flex items-center">
                    <i className='bx bx-heart'></i>
                    <i className='bx bx-message-rounded' ></i>
                    <i className='bx bx-send' ></i>
                </div>
                <i className='bx bx-bookmark' ></i>
            </div>
            <span className="likes block font-bold">343,051 likes</span>
            <span className="time">16 hours ago</span>
            <form>
                <div className="flex items-center">
                    <i className='bx bx-smile' ></i>
                    <input placeholder="Add a comment" />
                </div>
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

const Comment = () => {
    return (
        <div className="comment">
            <div className="user flex items-center">
                <div className="avatar w-10 h-10 rounded-full"></div>
                <span>leanda_harley</span>
                <span>awesome profile</span>
            </div>
            <div className="actions">
                <span>10h</span>
                <span>36 likes</span>
                <span>Reply</span>
            </div>
        </div>
    );
};

export default Home;