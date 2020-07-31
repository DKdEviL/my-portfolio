import React from 'react';
import './social.css';
import links from '../../assets/strings';

function Social(){
    return (
        <div class="social">
            <a href={links.urls.linkedin} target="_blank">
                <img class="icon" src={links.imageUrl.icons.linkedin} />
                <p>Deepak .</p>
            </a>
            <a href={links.urls.gmail} target="_blank">
                <img class="icon over" src={links.imageUrl.icons.gmail} />
                <p>deepaknardia98</p>
            </a>
            <a href={links.urls.github} target="_blank">
                <img class="icon" src={links.imageUrl.icons.github} />
                <p>@DkdEviL</p>
            </a>
            <a href={links.urls.hackerearth} target="_blank">
                <img class="icon over flow" src={links.imageUrl.icons.hackerearth} />
                <p>@deepaknardia98</p>
            </a>
            <a href={links.urls.twitter} target="_blank">
                <img class="icon over" src={links.imageUrl.icons.twitter} />
                <p>@deepak5198</p>
            </a>
        </div>
    )
}
export default Social;