
function StringLength(string) {
if(string.length <= 10 && string.length > 0) {
 return string.length;
} else {
 return 'String lenght is zero'
}
}

module.exports = StringLength;