import React from 'react'

export function Colossus(props) {
    return (
        <section className="wonder-page">
            <h2>Colossus of Rhodes</h2>

            <p>
                The Colossus of Rhodes was a giant bronze statue of the sun god
                Helios, erected in the ancient Greek city of Rhodes around 280 BC.
                Standing approximately 33 meters (108 feet) tall, it was one of the
                tallest statues of the ancient world and was considered one of the
                Seven Wonders of the Ancient World.
            </p>

            <div className="image-container">
                <img src="./colossus.png" alt="Colossus of Rhodes" />
            </div>

            <p>
                Built to celebrate Rhodes' victory over an invading army, the statue
                symbolized the strength and unity of the people. Crafted by sculptor
                Chares of Lindos, it stood near the entrance to the harbor, watching
                over the city and its ships.
            </p>

            <p>
                Sadly, the Colossus stood for only 54 years before being toppled by a
                massive earthquake in 226 BC. Although it no longer exists, its
                memory has inspired countless works of art and architecture
                throughout history — including the modern Statue of Liberty.
            </p>
        </section>
    )
}
