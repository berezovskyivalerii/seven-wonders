import React from 'react'

export function TempleOfArtemis(props) {
    return (
        <section className="wonder-page">
            <h2>Temple of Artemis at Ephesus</h2>

            <p>
                Located in present-day Turkey, the Temple of Artemis was a
                massive sanctuary dedicated to the Greek goddess Artemis.
                Rebuilt around 550 BC, it was adorned with over 100 marble
                columns and ornate sculptures.
            </p>

            <div className="image-container">
                <img src="./temple.jpg" alt="Temple of Artemis at Ephesus" />
            </div>

            <p>
                Praised by ancient historians as one of the most beautiful
                structures ever built, the temple was tragically destroyed
                multiple times—by arson, plundering, and time itself. Today,
                only ruins remain.
            </p>
        </section>
    )
}
