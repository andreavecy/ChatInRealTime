import consumer from "./consumer"

document.addEventListener("turbolinks:load", function(){
  console.log("Cargo la pagina")

  let roomClient = consumer.subscriptions.create("RoomChannel", {
    connected() {
      // Called when the subscription is ready for use on the server
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      // Called when there's incoming data on the websocket for this channel
      console.log(data);
    }
  });

  document.querySelector("#pinger").addEventListener("click", function(){
    console.log("Enviando Mensaje")
    //enviar mensaje al servidor ws
    roomClient.send({
      message: prompt("Escribe el Mensaje")
    })

  });


})


