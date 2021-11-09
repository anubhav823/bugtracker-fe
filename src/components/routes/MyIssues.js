import { Tile } from "../Tile";
import GetAllUsers from "../../service/GetAllUsers"

export function MyIssues() {
    return (
        <div className='my-issue'>
            <GetAllUsers />
            <Tile />
        </div>
    )
}