// check string is palindrome or not.

let str="naman";

let bag="";

for(let i=str.length-1;i>=0;i--){
    bag=bag+str[i];
}

if(str===bag){
    console.log(str+"is a Palindrome");
}
else{
    console.log(str+"is not a Palindrome")
}