import './aboutMe.css';
import Halo from '../../Assets/halo.png';
import skillsBorder from '../../Assets/skillsBorder.svg';
import skillsGrid from '../../Assets/skillsGrid.svg';
import SkillSlider from '../../components/SkillsSlider/SkillsSlider';
function AboutMe(){
    return (
        <div className="main">
            <div className="myImg">
                <img src={Halo}/>
            </div>
            <div className="content">
                <h1>Eyad Ibrahim</h1>
                <span>Welcome to by personal website.</span>
                <p>I have created this website to feel like a game/sci-fi interface. All text inside tries to reflect this. <br/> You will find ‘achievements’ or ‘quests’ that show the progress in my professional life and are related to what I am working on.</p>
                <a href="#">Explore CV [Enter]</a>
            </div>
            <div className="skillsSlider">
                <img src={skillsBorder}/>
                <img src={skillsGrid}/>
                <SkillSlider/>
            </div>
        </div>
    );
}

export default AboutMe;