import {defineStore} from "pinia"
import {ref} from "vue"
import {socket} from "@/api/socket.js"

export const notificationStore = defineStore("notification",()=>{
    
    const list = ref([]);   

    function notifyWorker(sender, receiver){
        console.log("sending request")
        socket.emit("notify",{sender, receiver, message:`${sender} wants to hire you`});
    }


    socket.on("new_notif",(data)=>{

        console.log("new notfication for you");
        list.value.push(data);
    
    })

    return{list, notifyWorker}
})