import './home.css';
import social from './social.png';
import playlist from './playlist.png';
import stats from './stats.png';
import {PrimaryInfo} from '../util/util';

function Home() {
    return (
        <div>
            <PrimaryInfo text="Unleash the power of your playlist."/>
            <div className='landing-info'>
                <LandingTile image={stats} text="See in-depth stats about all your listening habits."/>
                <LandingTile image={playlist} text="Get custom playlists recommended based on your stats."/>
                <LandingTile image={social} text="Share your fun facts with all your friends any time."/>
            </div>
        </div>
    )
}

function LandingTile(props) {
    return (
        <div className="landing-tile">
            <img src={props.image} alt="Image not found." className="landing-image"/>
            <div className="landing-tile-text">
              {props.text}
            </div>
        </div>
    )
}

export default Home;
