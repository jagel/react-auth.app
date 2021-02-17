import { SetLoading } from "../shared/loading/loading";
import { errorHandler } from "./errorHandler";
import { LOCATIONS } from "./locationCollection";

export async function HttpGet(endpointKey) {
    var endpoint = LOCATIONS.filter(x => x.key == endpointKey);

    if (endpoint.length != 1)
        throw `location ${endpointKey} could be resolved: return ${endpoint.length} results`;

    var baseUrl = 'https://localhost:5001/api/';
    var url = baseUrl + endpoint[0].path;
    SetLoading(true);

    var response = await fetch(url);
    var data = await response.json();
    SetLoading(false);

    if (response.ok) {
        return data.response;
    }
    else {
        errorHandler(data.errors);
        return null;
    }
}


export async function HttpPost(endpointKey, data) {
    var endpoint = LOCATIONS.filter(x => x.key == endpointKey);

    if (endpoint.length != 1)
        throw `location ${endpointKey} could be resolved: return ${endpoint.length} results`;

    var baseUrl = 'https://localhost:5001/api/';
    var url = baseUrl + endpoint[0].path;

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)

    }

    SetLoading(true);
    var response = await fetch(url, requestOptions);
    var data = await response.json();
    SetLoading(false);

    if (response.ok) {
        return data.response;
    }
    else {
        errorHandler(data.errors);
        return null;
    }
}

