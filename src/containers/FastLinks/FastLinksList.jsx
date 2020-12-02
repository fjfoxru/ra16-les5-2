import List from './components/List/List'

function FastLinksList (props) {
// Компонент-контейнер.
// Содержит запрос к серверу, получает список самых актуальных новостных колонок и отправляет их компоненту, который их рендерит.
// Содержит функцию рендера элементов списка, отправляет ее в props.children.

    return (
        <>
        <List data={links} >
            {items=>items.map((item,index)=><ListItem key={index} > {item} </ListItem>)}
        </List>    
        </>
    );
}


export default FastLinksList;