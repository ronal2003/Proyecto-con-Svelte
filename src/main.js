import './app.css'
// @ts-ignore
import App from './App.svelte'

const app = new App({
  target: document.body,
  // target: "#mi-contenedor",
  props: {
    texto: "Hola, mundo",
    colorFondo: "azul"
  }
});

export default app;
