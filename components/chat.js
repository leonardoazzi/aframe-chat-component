import corpus from "../pandemia.json" assert { type: "json" };


AFRAME.registerComponent('chat', {
  schema: {
    text: {type: "string", default: ""}
	},
    init: function () {
      console.log('init avatar-bot!');

      const sceneEl = document.querySelector("a-scene");


      const chatPlane = document.createElement('a-plane');
      const chatResponse = document.createElement('a-entity');


      //   console.log(chat)
      chatResponse.setAttribute("id", "chatResponse");
      chatResponse.setAttribute("text", "color: black; value: ")
      chatResponse.setAttribute("position", "0.05 0 0.01")

      chatPlane.setAttribute("id", "chatPlane")
      chatPlane.setAttribute("position", "1 1.5 -1");
      chatPlane.setAttribute("color", "grey")
      chatPlane.setAttribute("height", "0.1")
      chatPlane.setAttribute("width", "1")
      chatPlane.setAttribute("chat")

      //   console.log(chat)

      chatPlane.appendChild(chatResponse);
      sceneEl.appendChild(chatPlane);



    },

    update: function () {
      let mensagem = this.data.text;
      let resposta = "."
      const sceneEl = document.querySelector("a-scene");

      if(mensagem != ""){
        console.log("Mensagem: " + mensagem);
        callBot(mensagem);

      }
    }
    
  });

  export async function callBot(message){

    queryBot({ inputs: {message: message
                        
    }})
    .then((response) => {

      // @TO-DO: adicionar response em um balão no chatlog.
      console.log(response);

      const chatR = document.getElementById("chatResponse")
      const plane = document.getElementById("chatPlan")
      chatR.setAttribute("text", "value: "+response.answer)

      console.log("Resposta: " + response.answer);

    })
    .then(function(data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });

  }

  // --------------------------------------------------------
  // @ANDRE: paramos aqui na nossa última reunião de trabalho
  // --------------------------------------------------------

  export async function queryBot(data) {
    const response = await fetch(
        "https://rasabert.paas.dbserver.com.br/webhooks/rest/webhook",
        {
            headers: { Authorization: "application/json", "Access-Control-Allow-Origin": "*"},
            sender: "test_user",
            method: "POST",
            // mode: "no-cors",
            message: data,
        }
    );
    const result = await response.json();
    console.log(result)
    return result;

    // const response = await fetch(
    //     "http://127.0.0.1:8000/DB",
    //     {
    //         headers: {
    //             'Content-Type': 'application/json' 
    //         },
    //         method: "POST",
    //         mode: "no-cors",
    //         body: {
    //             question: "O que é a DB?"
    //         },
 
    //     }
        
    // );

    // fetch('http://127.0.0.1:8000/DB', {
    //     method: 'POST',
    //         mode: "no-cors",
    //     headers: {
    //         "Content-type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         "question": "o que é a DB?"
    //     })
    // })
    // .then(function(response) {
    //     console.log(response.json())
    //     return response.json();
    // })
    // .then(function(data) {
    //     console.log('Request succeeded with JSON response', data);
    // })
    // .catch(function(error) {
    //     console.log('Request failed', error);
    // });

  }