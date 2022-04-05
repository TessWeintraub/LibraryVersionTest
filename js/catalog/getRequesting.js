export const getRequesting = (url) => {
    const getRequest = new XMLHttpRequest();
    let result
    getRequest.open("GET", url, false);
    getRequest.onload = function getOnload() {
        try {
            const responseJson = getRequest.responseText;
            const data = JSON.parse(responseJson);
            result = data
        } catch (e) {
            console.log("Error getOnload: " + e);
        }
    }
    getRequest.send(null);
    return result
}