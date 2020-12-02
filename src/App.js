import logo from './logo.svg';
import NewsPreview from './containers/News/NewsPreview';
import './App.css';


// Содержит компоненты-контейнеры и сетку
// Мб получает из стора инфу о авторизации?

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="grid">
          <div className="grid__row">
            <div className="grid__column">
                <NewsPreview />
            </div>
            <div className="grid__column">
                <Promo />
            </div>

          </div>
          <div className="grid__row">
          <div className="grid__column">
            <FastLinksList />
            <SearchPanel />
            <Banner />
          </div>
          </div>
          <div className="grid__row">
            <div className="grid__column">
              <Weather />
              <Popular />
            </div>
            <div className="grid__column">
              <Map />
              <TV />
            </div>
            <div className="grid__column">
              <Translation />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
