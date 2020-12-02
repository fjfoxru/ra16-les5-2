function LinkItem (props) {
    // В props: icon, текст, ссылка, доп. текст

    return (
        <a href={props.item.url}>{props.item.name}</a>
    );
}




export default LinkItem;