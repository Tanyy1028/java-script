// wap to print leap years from startyear to endyear.

let y1 = parseInt(prompt(" enter y1"))
let y2 = parseInt(prompt(" enter y2"))


while(y1<=y2){
    if(y1 % 4 == 0){
    document.writeln(y1,"<br>")
    
    }
    y1++
}