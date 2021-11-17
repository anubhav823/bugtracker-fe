import GetAllIssues from "../../service/GetAllIssues"

export function MyIssues() {
    return (
        <div className='my-issue'>
            {/* <GetAllUsers /> */}
            {/* <Tile /> */}
            <GetAllIssues/>
        </div>
    )
}