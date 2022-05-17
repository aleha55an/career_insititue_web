// var b="hy";
// var b="hi";
// document.write(b);
// function add()
// {
//     let a=10;
//     let b=5.5;
//     let z=a+b;
//     document.write(z);
// }
// function dadd()
// {
//     let a=10;
//     let b=5.5;
//     let z=a+b
//     document.write(z+z);
// }
// const a = "hello";
// document.write(a);

// function table2(){
// let table=2;
// for(let a=1;10>=a;a++){
//     document.write(table  + "*"+ a + "=" + a*table +"<br>");
// }
// }
// function table3(){
// let table=3;
// for(let a=1;10>=a;a++){
//     document.write(table  + "*"+ a + "=" + a*table +"<br>");
// }
// }
// function table4(){
// let table=4;
// for(let a=1;10>=a;a++){
//     document.write(table  + "*"+ a + "=" + a*table +"<br>");
// }
// }
// function table5(){
// let table=5;
// for(let a=1;10>=a;a++){
//     document.write(table  + "*"+ a + "=" + a*table +"<br>");
// }
// }
// function table6(){
// let table=6;
// for(let a=1;10>=a;a++){
//     document.write(table  + "*"+ a + "=" + a*table +"<br>");
// }
// }
// function table7(){
// let table=7;
// for(let a=1;10>=a;a++){
//     document.write(table  + "*"+ a + "=" + a*table +"<br>");
// }
// }
// function table8(){
// let table=8;
// for(let a=1;10>=a;a++){
//     document.write(table  + "*"+ a + "=" + a*table +"<br>");
// }
// }
// function table9(){
// let table=9;
// for(let a=1;10>=a;a++){
//     document.write(table  + "*"+ a + "=" + a*table +"<br>");
// }
// }
// function table10(){
// let table=10;
// for(let a=1;10>=a;a++){
//     document.write(table  + "*"+ a + "=" + a*table +"<br>");
// }
// }

/* program to generate a multiplication table
upto a range */


let number = parseInt(prompt('Enter an integer: '));

let range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    let result = i * number;
    // document.write(`${number} * ${i} = ${result}<br>"`);
    document.write(number + "*" + i+ "=" + result+"<br>")
}