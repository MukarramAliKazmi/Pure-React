const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', { key: 1 }, props.name),
        React.createElement('p', { key: 2 }, props.occupation),
    ]);
};

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', { className: 'title', key: 3 }, 'react IS rendered'),
        React.createElement(Person, { name: 'Mukarram', occupation: 'programmer', key: 4 }, null),
        React.createElement(Person, { name: 'Ali', occupation: 'developer', key: 5 }, null),
        React.createElement(Person, { name: 'Kazmi', occupation: 'engineer', key: 6 }, null),
    ]);
};

// ReactDOM.render(React.createElement(App), document.getElementById('root'));
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));