import React from 'react';
import './quote.css'

function quote() {
    return (
        <figure className="quote">
            <blockquote>
                <cite>
                    "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world."
                </cite>
            </blockquote>
            <figcaption>
                &mdash; Harriet Tubman
            </figcaption>
        </figure>
    )
}

export default quote;