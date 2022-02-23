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
        callBot(mensagem);
      }

    }

  });

  export async function callBot(message){
      queryBot({ inputs: {question: ""
    }}).then((response) => {
      console.log(response);
    
    });
  }

  export async function queryBot(data) {
    // const response = await fetch(
    //     "https://api-inference.huggingface.co/models/pierreguillou/bert-base-cased-squad-v1.1-portuguese",
    //     {
    //         headers: { Authorization: `Bearer ${"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"}` },
    //         method: "POST",
    //         body: JSON.stringify(data),
    //     }
    // );
    // const result = await response.json();
    // return result;

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

    fetch('http://127.0.0.1:8000/DB', {
        method: 'POST',
            mode: "no-cors",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "question": "o que é a DB?"
        })
    })
    .then(function(response) {
        console.log(response.json())
        return response.json();
    })
    .then(function(data) {
        console.log('Request succeeded with JSON response', data);
    })
    .catch(function(error) {
        console.log('Request failed', error);
    });

  }