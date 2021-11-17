import { Component } from "react";
import './../../App.css'
class DragDrop extends Component {
    state = {
        tasks: [
            // {name:"Learn Angular",category:"todo", bgcolor: "yellow"},
            // {name:"React", category:"wip", bgcolor:"pink"},
            // {name:"Vue", category:"complete", bgcolor:"skyblue"},
            // {name:"Vue1", category:"complete", bgcolor:"skyblue"},
            // {name:"Vue2", category:"complete", bgcolor:"skyblue"},
            // {name:"Vue3", category:"complete", bgcolor:"skyblue"}
          ]
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
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name === id) {
               task.category = cat;
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
            TO_DO:[],
            IN_PROGRESS: [],
            FINISHED: []
        }

        this.state.tasks.forEach ((t) => {
            // console.log("t "+t.status)
            issues[t.status].push(
                <div key={t.storyid} 
                    onDragStart = {(e) => this.onDragStart(e, t.storyid)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">DRAG & DROP DEMO</h2>
                <div className="todo"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "todo")}}>
                    <span className="task-header">TODO</span>
                    {issues.TO_DO}
                </div>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">WIP</span>
                    {issues.IN_PROGRESS}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">COMPLETED</span>
                     {issues.FINISHED}
                </div>


            </div>
        );
    }
}
export default DragDrop;