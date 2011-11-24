
require 'em-websocket'

EventMachine.run {

  EventMachine::WebSocket.start(:host => "localhost", :port => 8325) do |ws|
    ws.onopen {
      puts "WebSocket connection open"

      # publish message to the client
      ws.send "Hello Client".reverse
    }

    ws.onclose { puts "Connection closed" }
    ws.onmessage { |msg|
      puts "Recieved message: #{msg}"
      ws.send msg.reverse
    }
  end
}