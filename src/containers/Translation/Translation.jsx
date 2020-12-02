import List from './components/List/List'
import ListItem from './components/List/List'

function Translation (props) {
// Компонент-контейнер.
// Содержит заголовок
// Содержит запрос к серверу, получает список трансляций и отправляет компоненту, который их рендерит.
// Содержит функцию рендера элементов списка, отправляет ее в props.children.

    return (
        <>
        <ListItem />
        <List data={links} >
            {items=>items.map((item,index)=><TranslationItem key={index} > {item} </TranslationItem>)}
        </List>    
        </>
    );
}


export default Translation;