import React from 'react'

export function Lighthouse(props) {
    return (
        <section className="wonder-page">
            <h2>Lighthouse of Alexandria (Pharos of Alexandria)</h2>

            <p>
                Built on the island of Pharos around 280 BC, the Lighthouse of
                Alexandria guided sailors safely into the busy port of
                Alexandria, Egypt. Estimated to be 100–130 meters (330–430 feet)
                tall, it was one of the tallest structures of the ancient world.
            </p>

            <div className="image-container">
                <img
                    src="./lighthouse.webp"
                    alt="Lighthouse of Alexandria (Pharos of Alexandria)"
                />
            </div>

            <p>
                Its light, produced by fire and reflected by mirrors, could be
                seen for miles. Though eventually destroyed by earthquakes, it
                set the standard for all future lighthouses.
            </p>
        </section>
    )
}
