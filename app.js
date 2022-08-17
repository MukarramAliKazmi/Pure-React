const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation),
    ]);
};

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { class: 'title' }, 'react IS rendered'),
        React.createElement(Person, { name: 'Mukarram', occupation: 'programmer' }, null),
        React.createElement(Person, { name: 'Ali', occupation: 'developer' }, null),
        React.createElement(Person, { name: 'Kazmi', occupation: 'engineer' }, null),
    ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));