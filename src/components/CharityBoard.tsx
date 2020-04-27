import React from 'react';

import CharityTile from './CharityTile';

const charityData = [
    {
        name: 'Fake Name',
        description: 'Fake Description',
        type: '',
        image: '',
        url: 'example.com',
        contact: 'test@test.com',
        notes: 'Hello',
        archived: false
    },
    {
        name: 'Fake Name #2',
        description: 'Fake Description #2',
        type: '',
        image: '',
        url: 'example.com',
        contact: 'test@test.com',
        notes: 'Hello',
        archived: false
    },
]

const CharityBoard = (props: any) => {


    return (
        <div>
            <div>Charity Board</div>
            <div className='tile-container'>
                {
                    charityData.map(organization => {
                        return <CharityTile organization={organization}/>;
                    })
                }
            </div>
        </div>
    );
}

export default CharityBoard;