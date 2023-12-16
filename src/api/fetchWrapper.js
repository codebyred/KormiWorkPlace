export const fetchWrapper = {
    get:request("GET"),
    post:request("POST"),
}

//if request was async, calling it would make post a promize, not function
function request(method){

    //
    return async (endpoint, userDetails)=>{

        const options = {
            method:method,
            mode: "cors",
            headers:{
                'Content-type':"application/json"
            },    
        }

        if(userDetails){
            options.body = JSON.stringify(userDetails);
        }
    
        return handleResponse(await fetch(`${import.meta.env.VITE_API_GATEWAY_URL}/${endpoint}`, options));

    }
}

async function handleResponse(res){
 
    const data = await res.json();
    return data;
  
}