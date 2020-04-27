import React from 'react';

import './CharityTile.css';

const CharityTile = ({organization}: any) => {

    return (
        <a href={organization.url}>
            <div className='tile'>
                <div>{organization.name}</div>
                <div>{organization.description.markdown}</div>
            </div>
        </a>
    );
}

export default CharityTile;