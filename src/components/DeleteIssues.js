import { Component } from 'react'
export class DeleteIssues extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    // componentDidMount() {
    //     fetch('http://localhost:8081/' + this.issueId.value).then((res) => res.json())
    //         .then((json) => {
    //             this.setState({
    //                 items: json,
    //                 DataisLoaded: true
    //             });
    //         })
    // }
    // render() {
    //     const { DataisLoaded, items } = this.state;
    //     if (!DataisLoaded) return <div>
    //         <h1> Please wait some time.... </h1> </div>;

    //     return (
    //         <div className="tiles"> {
    //             items.map((item) => (
    //                 <ol key={item.storyid} >
    //                     <Tile item={item} />
    //                 </ol>
    //             ))
    //         }
    //         </div>
    //     );
    // }
    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:8081/story/'+this.issueId.value, {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
        });
    }

    render() {
        console.log('delete')
        return (
            <div className='new-issue'>
                <form className='new-issue-form'>
                    Issues Id: <input ref={(ref) => { this.issueId = ref }} type='text' id='issueId'></input>
                    <button type='submit' onClick={this.handleSubmit}>Delete</button>
                </form>
            </div>
        )
    }
}