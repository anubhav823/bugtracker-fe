import './../styles.css'
import React from 'react'
export const Tile = ({ item }) => <div className='tile' draggable>
    <div className='id'>
    <strong>Id:</strong> {item.storyid}
    </div>
    <div className='summary'>
    <strong>Heading:</strong> {item.heading}
    </div>
    <hr />
    {/* <div className='description'>
        <strong>Description:</strong> 
            {item.t.description}
    </div> */}
    <div className='assignee'>
    <strong>Assignee:</strong> {item.assignee}
    </div>
    <div className='reporter'>
    <strong>Reporter:</strong> {item.reporter}
    </div>
    <div className='points'>
        <strong>Story Points:</strong> {item.storyPoints}
    </div>
    <div className='status'>
    <strong> Reporter:</strong> {item.status}
    </div>
</div>