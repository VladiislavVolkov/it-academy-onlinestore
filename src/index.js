import './main.scss';
import './App';

const root = document.getElementById('root');
const app = document.createElement('it-app');

// пример с атрибутами
app.setAttribute('atrtest', 'value-test');

root.append(app);
