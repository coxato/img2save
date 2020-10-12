import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/themeColor';
//style
import './style/about.css';

const colors = {
    backgroundColor: { light: '#fff', dark: '#2a3132' },
    fontColor: { light: '#000', dark: '#f1f1f2' },
    anchorColor: { light: '#3d99b7', dark: '#c774c2' }
}

const About = () => {
    const { theme } = useContext(ThemeContext);
    const { backgroundColor, fontColor, anchorColor } = colors;

    return(
    <div className="about-container" style={{background: backgroundColor[theme] }}>
        <div className="about-content" style={{color: fontColor[theme]}}>
        
            <p className="font-normal family-helvetica">
            img2save is a website for download images,
            Basically you are looking for a photo that you like and downloads,
            that's all.
            <br/>
            I use 3 different photo services, which are {' '} 
            <a style={{color: anchorColor[theme]}} href="https://unsplash.com/" target="_blank"rel="noopener noreferrer">unsplash</a> ,
            <a style={{color: anchorColor[theme]}} href="https://pixabay.com/" target="_blank"rel="noopener noreferrer">pixabay</a> ,
            and <a style={{color: anchorColor[theme]}} href="https://flickr.com/" target="_blank"rel="noopener noreferrer">flickr</a>.
            All this powered by his <a style={{color: anchorColor[theme]}} href="https://en.wikipedia.org/wiki/Web_API" target="_blank"rel="noopener noreferrer">API's</a>
            </p>

            <h1 className="font-big family-verdana center">how is build this website</h1>
            <p className="font-normal family-helvetica">
                this website is create with <a style={{color: anchorColor[theme]}} href="https://reactjs.org/" target="_blank"rel="noopener noreferrer">React</a>,
                a JavaScript library. React is a good tool for create user interfaces, also exist {' '}
                <a style={{color: anchorColor[theme]}} href="https://vuejs.org/" target="_blank"rel="noopener noreferrer">Vue</a> and <a style={{color: anchorColor[theme]}} href="https://angularjs.org/" target="_blank"rel="noopener noreferrer">Angular</a>,
                but is this case, I use React.
                By other hand the images are taken from <a style={{color: anchorColor[theme]}} href="https://en.wikipedia.org/wiki/Web_API" target="_blank"rel="noopener noreferrer">API's</a>
                <br/>
                here is the:
                <br/>
            </p> 
                <ul className="font-small">
                    <li><a style={{color: anchorColor[theme]}} href="https://unsplash.com/developers" target="_blank"rel="noopener noreferrer">unsplash API</a></li>
                    <li><a style={{color: anchorColor[theme]}} href="https://pixabay.com/api/docs/" target="_blank"rel="noopener noreferrer">pixabay API</a></li>
                    <li><a style={{color: anchorColor[theme]}} href="https://www.flickr.com/services/api/" target="_blank"rel="noopener noreferrer">flickr API</a></li>
                </ul> 

            <h1 className="font-big family-verdana center">Who made this website?</h1>
            <p className="font-normal family-helvetica">
                Hi, I'm Carlos Martínez a frontend developer, I make this website because I was learning React in {' '}
                <a style={{color: anchorColor[theme]}} href="https://platzi.com/r/cems/" target="_blank"rel="noopener noreferrer">platzi</a> an online school
                for learn programming and design. So for practice I create this website, It's a bit simple, but whenever you learn something new you should practice ok?  
                <br/>
                if you want to see the code look the github repository <a style={{color: anchorColor[theme]}} href="https://github.com/carlosEdua/img2save" target="_blank"rel="noopener noreferrer">here</a>
            </p>
        </div>
    </div>
)}

export default About;