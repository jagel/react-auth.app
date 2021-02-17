import { LOCATIONS, LOCATIONS_KEYS } from "../endpoint/locationCollection";

export async function HttpPostLogin(loginForm) {
    
    var endpoint = LOCATIONS.filter(x => x.key == LOCATIONS_KEYS.login);

    var baseUrl = 'https://localhost:5001/api/';
    var url = baseUrl + endpoint[0].path;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)

    }
    try{    
        var response = await fetch(url, requestOptions);
        var data = await response.json();
        
        if (response.ok) {
            return data.response;
        }
        else {
            return null;
        }
    }
    catch{
        return null;
    }
    
}
