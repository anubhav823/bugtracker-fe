import React from "react";
import { Tile } from "../components/drag-n-drop/Tile";
class GetAllIssues extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch("http://localhost:8081/stories").then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div>;

        return (
            <div className="tiles"> {
                    items.map((item) => (
                        <ol key={item.storyid} >
                            <Tile item={item}/>
                        </ol>
                    ))
                }
            </div>
        );
    }
}
export default GetAllIssues;