class UserChannel < ApplicationCable::Channel
  def subscribed
     stream_from "user_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(data)
    ActionCable.server.broadcast("user_channel", {message: data["message"], email: current_user.email});
  end
end
