import List from './components/List/List'
import ListItem from './components/List/List'

function TV (props) {
// Компонент-контейнер.
// Содержит заголовок
// Содержит запрос к серверу, получает список тв и отправляет компоненту, который их рендерит.
// Содержит функцию рендера элементов списка, отправляет ее в props.children.

    return (
        <>
        <ListItem />
        <List data={links} >
            {items=>items.map((item,index)=><TVItem key={index} > {item} </TVItem>)}
        </List>    
        </>
    );
}


export default TV;