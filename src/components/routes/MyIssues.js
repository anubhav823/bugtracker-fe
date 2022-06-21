import GetAllIssues from "../../service/GetAllIssues"
import React from 'react'
export function MyIssues() {
    return (
        <div className='my-issue'>
            {/* <GetAllUsers /> */}
            <GetAllIssues/>
        </div>
    )
}