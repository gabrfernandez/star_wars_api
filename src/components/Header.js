import React from 'react'
import { Link } from '@reach/router';

function Header() {
    return (
        <div class="header">
            <Link to="/" class="link"><h1>Star Wars API</h1></Link>
        </div>
    )
}

export default Header
