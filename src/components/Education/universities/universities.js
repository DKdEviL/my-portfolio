import React from 'react';
import './universities.css';
import Card from '../card/card';
import links from '../../../assets/strings';

function Universities() {
    return (
        <Card imageUrl={links.imageUrl.icons.university} headingText="Education">
            <div className="card-item-container">
                <div>
                    <p>My university details here.</p>
                </div>
            </div>
        </Card>
    )
}

export default Universities;