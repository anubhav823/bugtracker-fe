import { DeleteIssues } from "../DeleteIssues"

export function Home() {
    console.log('Home')
    return (
        <div className='home'>
            <DeleteIssues />
        </div>
    )
}