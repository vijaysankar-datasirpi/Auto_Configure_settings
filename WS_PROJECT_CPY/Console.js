let socket = new WebSocket("ws://127.0.0.1:8000/ws/subscribe/");

socket.send(JSON.stringify({"action": "subscribe", "topic_id": "abc"}));
socket.send(JSON.stringify({"action": "usubscribe", "topic_id": "abc"}));

socket.send(JSON.stringify({
    "action": "Msg",
    "topic_id": "abc",
    "post": "Breaking news from Topic 1!"
}));

socket.onmessage = (e) => {
    console.log(e.data);
};