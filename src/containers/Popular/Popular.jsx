import List from './components/List/List'
import ListItem from './components/List/List'

function popular (props) {
// Компонент-контейнер.
// Содержит заголовок
// Содержит запрос к серверу, получает список популярного и отправляет компоненту, который их рендерит.
// Содержит функцию рендера элементов списка, отправляет ее в props.children.

    return (
        <>
        <ListItem />
        <List data={links} >
            {items=>items.map((item,index)=><PopularItem key={index} > {item} </PopularItem>)}
        </List>    
        </>
    );
}


export default popular;