import React from 'react'

export function HangingGardens(props) {
    return (
        <section className="wonder-page">
            <h2>Hanging Gardens of Babylon</h2>

            <p>
                The Hanging Gardens of Babylon are described as a lush, terraced
                garden built in the ancient city of Babylon (modern-day Iraq).
                Though their exact location and existence are debated, ancient
                writers praised their beauty and complexity.
            </p>

            <div className="image-container">
                <img src="./hanging-gardens.jpg" alt="Hanging Gardens of Babylon" />
            </div>

            <p>
                According to legend, King Nebuchadnezzar II built the gardens
                for his wife, who missed the greenery of her homeland. With
                advanced irrigation systems, the gardens seemed to float in the
                air, earning their name and eternal fame.
            </p>
        </section>
    )
}
