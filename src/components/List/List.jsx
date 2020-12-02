import LinkItem from './ListItem';

function LinkList (props) {
    // В props: массив ссылок и названий.
    // Рендерит с помощью функций из props.children или стандартного LinkItem.
    // В папке custom функции рендеринга для разных элементов. Не переиспользуемые, с уникальной разметкой.

    return (
        <>
        {props.data.map(item => <LinkItem />)}
        </>
    );
}


export default LinkList;