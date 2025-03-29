import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'

export function MainComponent(props) {
    return (
        <section>
            <header>
                <h1>Explore the Seven Wonders of the World!</h1>
                <p>
                    Journey through the marvels of ancient engineering and
                    timeless beauty.
                </p>
            </header>

            <Navigation />

            <Outlet />

            <footer>
                <p>© 2025 Seven Wonders Project. All rights reserved.</p>
                <p>
                    Inspired by the timeless wonders that continue to amaze the
                    world.
                </p>
            </footer>
        </section>
    )
}
