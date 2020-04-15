import 'preact/debug';
import 'regenerator-runtime/runtime';
import { h, render } from 'preact';
import App from './components/App.jsx';

const app = document.querySelector('#vapiano');

render(h(App), app);
