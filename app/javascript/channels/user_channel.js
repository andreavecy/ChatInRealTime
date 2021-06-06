import consumer from "./consumer"

  document.addEventListener("turbolinks:load", function(){

    let userClient = consumer.subscriptions.create("UserChannel", {
      connected() {
        // Called when the subscription is ready for use on the server
      },

      disconnected() {
        // Called when the subscription has been terminated by the server
      },

      received(data) {
        // Called when there's incoming data on the websocket for this channel

        let message = data.message;

        let html = `
          <p> <strong>${data.email}</strong>: ${message}</p>
        `;

        document.querySelector("#chats").innerHTML = html + document.querySelector("#chats").innerHTML;
      }

  });

  document.querySelector("#chat-form").addEventListener("submit", function(ev){
    ev.preventDefault();

    let message = this.querySelector("[type='text']").value;

    console.log(message)
    userClient.send({
      message
    })
    return false;
  });

});
