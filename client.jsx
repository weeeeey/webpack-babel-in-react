const React = require('react');

const { createRoot } = require('react-dom/client');

//필요한 것만 가져와
const WordRelay = require('./WordRelay');

const root = createRoot(document.querySelector('#root'));

root.render(<WordRelay />);
