import {io} from "socket.io-client";

export const socket = io(`${import.meta.env.VITE_NOTIFICATION_SERVER_URL}`,{ autoConnect: false});


socket.on("connect",()=>{

    console.log("connected to server");

});

socket.on("disconnect",()=>{
    console.log("disconnected")
})

socket.on("new_notif",(data)=>{

    console.log("new notfication for you",data);

})


socket.on("connect_error",(err)=>{

    console.log(err.message);

})