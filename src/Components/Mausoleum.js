import React from 'react'

export function Mausoleum(props) {
    return (
        <section className="wonder-page">
            <h2>Mausoleum at Halicarnassus</h2>

            <p>
                The Mausoleum at Halicarnassus was a grand tomb built for
                Mausolus, a Persian satrap, and his wife Artemisia II, around
                350 BC in what is now Bodrum, Turkey. It stood about 45 meters
                (148 feet) tall and combined Greek, Egyptian, and Lycian design.
            </p>

            <div className="image-container">
                <img
                    src="./mausoleum.jpg"
                    alt="Mausoleum at Halicarnassus"
                />
            </div>  

            <p>
                So impressive was the structure that "mausoleum" became the word
                for monumental tombs. Though destroyed by earthquakes, its
                legacy lives on in history and architecture.
            </p>
        </section>
    )
}
