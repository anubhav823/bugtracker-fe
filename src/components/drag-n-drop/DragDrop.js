import { Component } from "react";
import './../../App.css'
import { Tile } from './Tile'
class DragDrop extends Component {
    state = {
        tasks: []
    }
    componentDidMount() {
        fetch("http://localhost:8081/stories").then((res) => res.json())
            .then((json) => {
                this.setState({
                    tasks: json,
                    DataisLoaded: true
                });
            })
    }
    onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }
    handleSubmit(event, task) {
        event.preventDefault();
        fetch('http://localhost:8081/story', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'storyid': task.storyid,
                'heading': task.heading,
                'description': task.description,
                'storyPoints': task.story_points,
                'assignee': task.assignee,
                'reporter': task.reporter,
                'status': task.status
            })
        });
    }
    onDrop = (ev, cat) => {
        let id = ev.dataTransfer.getData("id");
        console.log("id ondrop " + id)
        let tasks = this.state.tasks.filter((task) => {
            if (task.storyid === id) {
                task.status = cat;
                this.handleSubmit(ev, task)
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
    }

    render() {
        var issues = {
            TO_DO: [],
            IN_PROGRESS: [],
            FINISHED: []
        }

        this.state.tasks.forEach((t) => {
            issues[t.status].push(
                { t }
            );
            console.log(issues)
        });
        return (
            <div className="container-drag">
                <h2 className="header">Issues</h2>
                <div className="todo"
                    onDragOver={(e) => this.onDragOver(e)}
                    onDrop={(e) => this.onDrop(e, "TO_DO")}>
                    <span className="task-header">To Do</span>
                    {issues['TO_DO'].map((item) => (
                        <ol key={item.storyid} >
                            <Tile item={item} />
                        </ol>
                    ))}
                </div>
                <div className="wip"
                    onDragOver={(e) => this.onDragOver(e)}
                    onDrop={(e) => this.onDrop(e, "IN_PROGRESS")}>
                    <span className="task-header">In Progress</span>
                    {issues['IN_PROGRESS'].map((item) => (
                        <ol key={item.storyid} >
                            <Tile item={item} />
                        </ol>
                    ))}
                </div>
                <div className="droppable"
                    onDragOver={(e) => this.onDragOver(e)}
                    onDrop={(e) => this.onDrop(e, "FINISHED")}>
                    <span className="task-header">Finished</span>

                    {issues['FINISHED'].map((item) => (
                        <ol key={item.storyid} >
                            <Tile item={item} />
                        </ol>
                    ))}
                </div>
            </div>
        );
    }
}
export default DragDrop;