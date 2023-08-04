const message = () => { return "I am in turning point of life!!!"}

function Sample(props) {
    return <p>New Life New Beginnings {message()} {props.props} {props.children} </p>;
}

export default Sample