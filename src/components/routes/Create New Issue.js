import React, { Component } from 'react'
import './../styles.css'
export class CreateNewIssue extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8081/story', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'storyid': this.issueId.value,
                'heading': this.heading.value,
                'description': this.description.value,
                'storyPoints': this.story_points.value,
                'assignee': this.assignee.value,
                'reporter': this.reporter.value,
                'status': this.status.value
            })
        });
    }

    render() {
        return (
            <div className='new-issue'>
                <form className='new-issue-form'>
                    {/* Issue type: <input type='text' id='issueType'></input> */}
                    Issues Id: <input ref={(ref) => { this.issueId = ref }} type='text' id='issueId'></input>
                    Heading: <input ref={(ref) => { this.heading = ref }} type='text' id='heading'></input>
                    Description: <input ref={(ref) => { this.description = ref }} type='' if='description'></input>
                    Story points: <input ref={(ref) => { this.story_points = ref }} type='number' id='story_points'></input>
                    Assignee: <input ref={(ref) => { this.assignee = ref }} type='text' id='assignee'></input>
                    Reporter: <input ref={(ref) => { this.reporter = ref }} type='text' id='reporter'></input>
                    Status: <input ref={(ref) => { this.status = ref }} type='text' id='status'></input>
                    <button type='submit' onClick={this.handleSubmit}>Create</button>
                </form>
            </div>
        )
    }
}