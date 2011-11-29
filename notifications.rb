
require 'em-websocket'

EventMachine.run {

  connection = nil;

  EM.add_periodic_timer(5) {
    if (connection)
      connection.send Time.now.to_s
    end
  }

  EventMachine::WebSocket.start(:host => "localhost", :port => 8325) do |ws|
    connection = ws
    ws.onopen {
      puts "WebSocket connection open"
      ws.send "Hellooo"
    }
    ws.onclose {
      connection = nil;
      puts "Connection closed"
    }
    ws.onmessage { |msg|
      puts "Recieved message: #{msg}"
      ws.send msg.reverse
    }
  end
}