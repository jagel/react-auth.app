
export function errorHandler(errorObject){
    var message = '';
    errorObject.forEach(element => {
        message += 'Application: ' + element.applicationName + '\n';
        message += 'Message: ' + element.messageError + '\n';
    });
     alert(message);
}