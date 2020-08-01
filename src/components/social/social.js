import React from 'react';
import './social.css';
import links from '../../assets/strings';

function Social(){
    return (
        <div className="social">
            <a href={links.urls.linkedin} target="_blank">
                <img className="icon" src={links.imageUrl.icons.linkedin} />
                <p className="linkText">Deepak .</p>
            </a>
            <a href={links.urls.gmail} target="_blank">
                <img class="icon over" src={links.imageUrl.icons.gmail} />
                <p className="linkText">deepaknardia98</p>
            </a>
            <a href={links.urls.github} target="_blank">
                <img class="icon" src={links.imageUrl.icons.github} />
                <p className="linkText">@DkdEviL</p>
            </a>
            <a href={links.urls.hackerearth} target="_blank">
                <img class="icon over flow" src={links.imageUrl.icons.hackerearth} />
                <p className="linkText">@deepaknardia98</p>
            </a>
            <a href={links.urls.twitter} target="_blank">
                <img class="icon over" src={links.imageUrl.icons.twitter} />
                <p className="linkText">@deepak5198</p>
            </a>
        </div>
    )
}
export default Social;