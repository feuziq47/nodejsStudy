var members = ['kim','seon','woo'];
console.log(members[1]);
var i = 0;
while(i < members.length){
    console.log('array loop',members[i]);
    i = i + 1;
}


var roles = {
    'programmer' : 'seonwoo',
    'designer' : 'kim',
    'manager' : 'woo'
}
console.log(roles.designer);

for(var name in roles){
    console.log('object' , name, 'value', roles[name]);
}