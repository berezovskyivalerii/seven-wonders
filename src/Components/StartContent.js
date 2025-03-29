import React from 'react'

export function StartContent(props) {
    return (
        <section className="wonder-page">
            <h2>The Seven Wonders of the Ancient World</h2>
            <p>
                The Seven Wonders of the Ancient World are legendary monuments
                celebrated for their architectural brilliance, artistic beauty,
                and historical significance. Built by ancient civilizations
                across the Mediterranean and Middle East, these wonders stood as
                symbols of human ingenuity and creativity. From the towering
                Great Pyramid of Giza to the mystical Hanging Gardens of
                Babylon, each wonder tells a story of ambition, culture, and the
                desire to leave a mark on history. Though most have vanished
                with time, their legacy continues to inspire awe and admiration
                around the world.
            </p>
            <div className="image-container">
                <img src="./start.png" alt="Graphic" />
            </div>
            <p id="description">
                Timeline, and map of the Seven Wonders. Dates in bold green and
                dark red are of their construction and destruction,
                respectively.
            </p>

            <p>
                While the entries have varied over the centuries, the seven
                traditional wonders are the Great Pyramid of Giza, the Colossus
                of Rhodes, the Lighthouse of Alexandria, the Mausoleum at
                Halicarnassus, the Temple of Artemis, the Statue of Zeus at
                Olympia, and the Hanging Gardens of Babylon. Using modern-day
                countries, two of the wonders were located in Greece, two in
                Turkey, two in Egypt, and one in Iraq. Of the seven wonders,
                only the Pyramid of Giza, which is also by far the oldest of the
                wonders, remains standing, while the others have been destroyed
                over the centuries. There is scholarly debate over the exact
                nature of the Hanging Gardens, and there is doubt as to whether
                they existed at all.
            </p>
        </section>
    )
}
