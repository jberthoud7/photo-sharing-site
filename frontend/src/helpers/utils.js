

export async function checkIfUserExists(username){
    const res = await fetch("http://localhost:3000/getUser" + username, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await res.json()

        if(data.res == 'DNE'){
            console.log('User does not exist1')
            return false
        }
        else if(data.res == 'User exists'){
            console.log(username," exists")
            return true
        }
    
}