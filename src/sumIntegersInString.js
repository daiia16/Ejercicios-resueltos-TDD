/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld'
Output --> 4

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/

export const sumOfIntegersInString = (input) => {
    var initCount, endCount, stringValue, initCut, sum;
    initCount = 0;
    endCount = 0;
    sum = 0;
    stringValue = '';
    for(var y = 0; y < input.length; y++){
        if(TryParseInt(input[y], -1) < 0){
            endCount = y;
            if(initCut){
                stringValue = input.substring(initCount, endCount);
                sum += parseInt(stringValue);
                initCut = false;
            }
        }else{
            if(!initCut){
                initCount = y;
                initCut = true;
            }
        }
    }
    return sum;
};



function TryParseInt(str,defaultValue) {
    var retValue = defaultValue;
    if(str !== null && str != ' ') {
        if(str.length > 0) {
            if (!isNaN(str)) {
                retValue = parseInt(str);
            }
        }
    }
    return retValue;
}
