import List from './components/List/List'
import ListItem from './components/List/List'

function Map (props) {
// Компонент-контейнер.
// Содержит заголовок
// Содержит запрос к серверу, получает список расписания и отправляет компоненту, который их рендерит.
// Содержит функцию рендера элементов списка, отправляет ее в props.children.

    return (
        <>
        <ListItem />
        <List data={links} >
            {items=>items.map((item,index)=><ListItem key={index} > {item} </ListItem>)}
        </List>    
        </>
    );
}


export default Map;