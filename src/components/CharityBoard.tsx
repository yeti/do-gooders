import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';

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
];

const CharityBoard = (props: any) => {
    
    const [charityData, setCharityData] = useState([]);

    useEffect(() => {
        const query = `{
            organizations(stage: PUBLISHED, where: {archived: false}) {
              id
              name
              notes
              type
              url
              contact
              description {
                markdown
              }
              image {
                url
              }
            }
          }`
          
          request('https://api-us-west-2.graphcms.com/v2/ck9g8q8ub07ra01wa6mz55xtl/master', query).then(data => {
                // console.log(data)
                setCharityData(data.organizations)
            }
          );
    });


    return (
        <div>
            <div>Charity Board</div>
            <div className='tile-container'>
                {
                    charityData.map((organization, index) => {
                        return <CharityTile key={index} organization={organization}/>;
                    })
                }
            </div>
        </div>
    );
}

export default CharityBoard;