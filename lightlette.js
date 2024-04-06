const lightlink = "https://prnt.sc/";

function genchar(length) {
    let result = "";
    const char = "abcdefghijklmnopqrstuvwkxyz0123456789";
    let counter = 0;
    let charlength = char.length;
    
    while (counter < length) {
        result += char.charAt(Math.floor(Math.random() * charlength));
        counter += 1;
    }
    return result;
}

console.log(lightlink + genchar(6));