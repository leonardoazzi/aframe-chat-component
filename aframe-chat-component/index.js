AFRAME.registerComponent('chat', {
  schema: {
    text: {type: "string", default: ""}
	},
    init: function () {
      console.log('init chat!');
    },

    update: function () {

      let mensagem = this.data.text;

      if(mensagem != ""){
        console.log(mensagem)
      }

    }

});