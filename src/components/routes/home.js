import { DeleteIssues } from "../DeleteIssues"
import React from "react"
export function Home() {
    console.log('Home')
    return (
        <div className='home'>
            <DeleteIssues />
        </div>
    )
}