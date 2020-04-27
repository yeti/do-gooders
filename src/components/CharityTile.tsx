import React from 'react';

import './CharityTile.css';

const CharityTile = ({organization}: any) => {

    return (
        <div className='tile'>
            <div>{organization.name}</div>
        </div>
    );
}

export default CharityTile;