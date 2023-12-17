import {defineStore} from "pinia"
import {ref, reactive} from "vue"
import {socket} from "@/api/socket.js"

export const useAuthStore = defineStore("auth",()=>{

    const user = ref( JSON.parse( localStorage.getItem('user') ) );
    const logedIn = ref(false);

    if(user.value){
        logedIn.value = true;
        socket.auth = {
            email: user.value.email
        }
        socket.connect();
    }

    function setAuth(userDetails){

        socket.auth = {
            email:userDetails.email,
            password:userDetails.password
        }

        logedIn.value = true;
        user.value = userDetails;

        localStorage.setItem('user',JSON.stringify(userDetails));
        socket.connect();

    }

    function resetAuth(){

        user.value = null;
        logedIn.value = false;

        localStorage.removeItem('user');
        socket.disconnect();

    }

    return{user, logedIn, setAuth, resetAuth}
})