## Nomad Soul
Conversação virtual com um avatar-bot alimentado por modelo NLP BERT (Português Brasileiro). Ambiente em [A-Frame](https://aframe.io). Modified from @brianpeiris' [aframe-textarea-component](https://github.com/brianpeiris/aframe-textarea-component)

![chitt-chat](https://www.researchgate.net/profile/Hwan-Gue-Cho/publication/228778244/figure/fig6/AS:667613441036292@1536182856433/There-are-six-avatars-in-a-virtual-room-a-One-cop-is-watching-that-five-agents-in-the_Q320.jpg)


### Configuração
Utilizar solução de servidor local. Exemplo: five-server.


Instalar: 

`npm i -g five-server@latest`


Rodar: 

`five-server --port=8000`

### Chamada de API

Utilizar e modificar funções no componente [chat.js](components/chat.js)

### Uso em A-Frame

Use diretamente incluindo os arquivos de browser.

```html
<head>
  <title>My Chitty Chat A-Frame</title>
  <script src="https://aframe.io/releases/1.0.0/aframe.min.js"></script>
  <script type="module" src="./aframe-chat-component/index.js"></script>
  <script src="./aframe-textarea-component/index.js"></script>
</head>

<body>
  <a-scene>
    <a-entity chat textarea></a-entity>
  </a-scene>
</body>
```

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
