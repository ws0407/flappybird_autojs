function clickObject(xoffset, yoffset){ 
    var x = Number(xoffset) || 3;
    var y = Number(yoffset) || 4;
    return x * y;
}

z = clickObject();

console.log(z);