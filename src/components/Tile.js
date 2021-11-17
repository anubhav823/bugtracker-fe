import './styles.css'
export const Tile = ({ item }) => <div className='tile'>
    <div className='summary'>
        Heading: {item.heading}
    </div>
    <hr />
    <div className='description'>
        Description: {item.description}
    </div>
    <div className='assignee'>
        Assignee: {item.assignee}
    </div>
    <div className='reporter'>
        Reporter: {item.reporter}
    </div>
    <div className='points'>
        Reporter: {item.storypoints}
    </div>
    <div className='status'>
        Reporter: {item.status}
    </div>
</div>
// export default Tile;
// export function Tile() {
//     return (

//     )
// }