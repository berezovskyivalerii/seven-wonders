import React from 'react'

export function GreatPyramid(props) {
    return (
        <section className="wonder-page">
            <h2>Great Pyramid of Giza</h2>

            <p>
                The Great Pyramid of Giza is the oldest and only surviving
                Wonder of the Ancient World. Built around 2560 BC in Egypt for
                Pharaoh Khufu, it originally stood at 146.6 meters (481 feet)
                tall. Its precision and scale remain unmatched, even by modern
                standards.
            </p>

            <div className="image-container">
                <img src="./great-pyramid.jpg" alt="Great Pyramid of Giza" />
            </div>

            <p>
                Made from over 2 million limestone blocks, the pyramid served as
                a tomb and a testament to ancient Egyptian engineering. It has
                endured for over 4,500 years, inspiring awe and mystery across
                generations.
            </p>
        </section>
    )
}
