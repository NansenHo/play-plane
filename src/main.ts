// import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import { createRenderer } from "vue";
import { Application, Container, Text, Sprite, Texture } from "pixi.js";

const game = new Application({
  width: 500,
  height: 500,
});

document.body.append(game.view);

const { createApp } = createRenderer<Container, Container>({
  createElement(type) {
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
        break;
      default:
        throw new Error(`This type (${type}) does not exist`);
        break;
    }
    return element;
  },
  insert(el, parent) {
    if (el && parent) {
      parent.addChild(el);
    }
  },
  remove(el) {
    if (el && el.parent) {
      el.parent.removeChild(el);
    }
  },
  createText(text) {
    return new Text(text);
  },
  patchProp(el, key, prevValue, nextValue) {
    switch (key) {
      case "texture":
        (el as Sprite).texture = Texture.from(nextValue);
        break;
      default:
        break;
    }
  },
  createComment(text) {
    return new Text(text);
  },
  setText() {},
  setElementText() {},
  parentNode(node) {
    return node.parent;
  },
  nextSibling() {
    return null;
  },
});

createApp(App).mount(game.stage);
