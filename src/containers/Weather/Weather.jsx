import List from './components/List/List'
import ListItem from './components/List/List'

function TV (props) {
// Компонент-контейнер.
// Содержит заголовок
// Содержит запрос к серверу, получает погоду и отправляет компоненту WeatherImg.
// Отображает разметку погоды

    return (
        <>
        <ListItem />
        <WeatherImg /> 
        <p>{{data}}</p>
        </>
    );
}


export default TV;