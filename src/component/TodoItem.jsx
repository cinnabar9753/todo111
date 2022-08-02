import './TodoItem.css'
function TodoItem(props){
    const {context} = props;
    return(
        <div className='item'>
            {context}
        </div>
    )
}

export default TodoItem;