// Enable pusher logging - don't include this in production

Pusher.logToConsole = true;
pusherKey = "bb539c16be7316740026";
pusherCluster = "us3";

var pusher = new Pusher(pusherKey, {
  cluster: pusherCluster,
});

var channel = pusher.subscribe("temperature");
channel.bind("sauna/temperature", function (data) {});
