import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
const prevButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const colorValue = document.getElementById('value');
const randomButton = document.getElementById('random');
const container = document.getElementById('container');

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  const { index, colors } = state;
  const cli = colors.length -1;
  const increase = index >= cli ? 0 : index + 1;
  const decrease = index <= 0 ? cli : index - 1;
    switch (action.type) {
      case 'INCREMENT':
      return { colors, index: increase };
      case 'DECREMENT':
        return { colors, index: decrease };
      case 'RANDOM':
        return { colors: [...colors, criarCor() ], index: colors.length };
      default:
        break;
    }
  return state;
}

const store = createStore(reducer, composeWithDevTools());

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RANDOM = 'RANDOM'

nextButton.addEventListener('click', () => {
  store.dispatch({ type: INCREMENT });
})

prevButton.addEventListener('click', () => {
  store.dispatch({ type: DECREMENT });
})

randomButton.addEventListener('click', () => {
  store.dispatch({ type: RANDOM });
})

store.subscribe(() => {
  const { index, colors } = store.getState();
  colorValue.innerText = colors[index];
  container.style.backgroundColor = colors[index];
})