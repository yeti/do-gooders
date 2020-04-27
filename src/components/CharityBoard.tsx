import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';

import CharityTile from './CharityTile';

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