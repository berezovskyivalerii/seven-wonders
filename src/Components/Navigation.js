import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation(props) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="/great-pyramids">Great Pyramid of Giza</Link>
                </li>
                <li>
                    <Link to="/hanging-gardens">
                        Hanging Gardens of Babylon
                    </Link>
                </li>
                <li>
                    <Link to="/statue-zeus">Statue of Zeus at Olympia</Link>
                </li>
                <li>
                    <Link to="/temple-artemis">
                        Temple of Artemis at Ephesus
                    </Link>
                </li>
                <li>
                    <Link to="/mausoleum">Mausoleum at Halicarnassus</Link>
                </li>
                <li>
                    <Link to="/colossus">Colossus of Rhodes</Link>
                </li>
                <li>
                    <Link to="/lighthouse">Lighthouse of Alexandria</Link>
                </li>
            </ul>
        </nav>
    )
}
