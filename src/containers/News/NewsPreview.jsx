function NewsPreview () {
// Компонент-контейнер.
// Содержит компонент даты.
// Содержит контейнер-компонент быстрых ссылок.
// Содержит запрос к серверу, получает список новостей и отправляет компоненту, который их рендерит.
// Содержит функцию рендера элементов списка, отправляет ее в props.children.

    return (
        <>
        <div class="grid_row">
            <FastLinksList />
            <DateNow />
        </div>
        <div class="grid_row">
        <List data={links} >
            {items=>items.map((item,index)=><NewsItem key={index} > {item} </NewsItem>)}
        </List> 
        </div>
        </>

    );
}


export default NewsPreview;