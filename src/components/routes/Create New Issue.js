import './../styles.css'
export function CreateNewIssue() {
    return (
        <div className='new-issue'>
            <form className='new-issue-form'>
                Issue type: <input type='text'></input>
                Summary: <input type='text'></input>
                Story points: <input type='text'></input>
                Assignee: <input type='text'></input>
                Reporter: <input type='text'></input>
                Sprint: <input type='text'></input>
                Status: <input type='text'></input>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}