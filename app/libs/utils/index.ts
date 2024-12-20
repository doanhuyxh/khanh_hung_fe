function unixToDatetime(unixTimestamp: number) {
    const date = new Date(unixTimestamp * 1000);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function dateToUnixTimestamp(dateString:string) {
    
    const date = new Date(`${dateString}T00:00:00Z`);
    return Math.floor(date.getTime() / 1000);
}



export {
    unixToDatetime, 
    dateToUnixTimestamp
}