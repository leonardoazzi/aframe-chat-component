## aframe-chat-component

<!-- [![Version](http://img.shields.io/npm/v/aframe-textarea-component.svg?style=flat-square)](https://npmjs.org/package/aframe-textarea-component)
[![License](http://img.shields.io/npm/l/aframe-textarea-component.svg?style=flat-square)](https://npmjs.org/package/aframe-textarea-component) -->

A ~~chitty~~ chat component for [A-Frame](https://aframe.io). Modified from @brianpeiris' [aframe-textarea-component](https://github.com/brianpeiris/aframe-textarea-component)

![chitt-chat](https://www.researchgate.net/profile/Hwan-Gue-Cho/publication/228778244/figure/fig6/AS:667613441036292@1536182856433/There-are-six-avatars-in-a-virtual-room-a-One-cop-is-watching-that-five-agents-in-the_Q320.jpg)


### Features 
- Typing area that follows the player camera;
- Chat area (balloons), that shows the sent/received messages;
- GPL v2 so you have to do something for society;
- Talk to yourself in this virtual void.

### Todo

(pull requests are welcome!)

 - NPM package;
 - Support for virtual keyboard (VR);
 - Message timeout;
 - Integrate with Networked A-Frame;
 - Emojis?
 - Minimum design and usability.


### Installation

#### Browser

Use by directly including the browser files:

```html
<head>
  <title>My Chitty Chat A-Frame</title>
  <script src="https://aframe.io/releases/1.0.0/aframe.min.js"></script>
  <script type="module" src="./components/chat.js"></script>
  <script src="./aframe-textarea-component/index.js"></script>
</head>

<body>
  <a-scene>
    <a-entity chat textarea></a-entity>
  </a-scene>
</body>
```

@TODO: npm packaging lol.

### aframe-text-area API

For reference, from [aframe-textarea-component](https://github.com/brianpeiris/aframe-textarea-component)


| Property                  | Description                                       | Default Value |
| --------                  | -----------                                       | ------------- |
| cols                      | number of columns in the textarea                 | 40            |
| rows                      | number of rows in the textarea                    | 20            |
| color                     | color of the text                                 | black         |
| disabled                  | whether the control can receive keyboard inputs   | false         |
| backgroundColor           | color of the background                           | white         |
| disabledBackgroundColor   | color of the background when disabled             | lightgrey     |
| text                      | default text in the textarea                      | ''            |


<!-- If component is accepted to the Registry, uncomment this. -->
<!--
Or with [angle](https://npmjs.com/package/angle/), you can install the proper
version of the component straight into your HTML file, respective to your
version of A-Frame:

```sh
angle install aframe-textarea-component
```
-->

<!-- #### npm

Install via npm:

```bash
npm install aframe-textarea-component
```

Then require and use.

```js
require('aframe');
require('aframe-textarea-component');
``` -->
