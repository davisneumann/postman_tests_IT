var jsonData = JSON.parse(responseBody);
jsonData.page.data.forEach(userCheck)
function userCheck(item){
    for (let [key, value] of Object.entries(item)) {
        if (value == 'example@example.com') {
            console.log ('User email found.')
            var everbridgeID = item.id
            var everbridgeEmail = item.externalId
            console.log(everbridgeID)
            console.log(everbridgeEmail)
            pm.globals.set("ebID", everbridgeID);
            pm.globals.set("ebEmail", everbridgeEmail);
            break;
        }else {
            //console.log('User email not here.')
        } 
    }
    return;
}