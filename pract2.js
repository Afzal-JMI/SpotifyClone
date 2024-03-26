let user = prompt("Enter R for Rock, P for paper or S for Scissor :");
let cpuI = Math.floor(Math.random()*3);
//let cpu = ["R","P","S"][cpuI]
// r 0  p 1  s 2
const match = (cpuI, user)=>{
    if(user === "R"){
        switch(cpuI){
            case 0:
                document.write("Tied!");
                break;
            case 1:
                document.write("You won!");
                break;
            case 2:
                document.write("You lose!");
                break;
            default:
                document.write("abe");
        }
    }
    else if(user === "P"){
        switch(cpuI){
            case 0:
                document.write("You lose");
                break;
            case 1:
                document.write("Tied!");
                break;
            case 2:
                document.write("You won!");
                break;
            default:
                document.write("abe");
        }
    }
    else {
        switch(cpuI){
            case 0:
                document.write("You won!");
                break;
            case 1:
                document.write("You lose!");
                break;
            case 2:
                document.write("Tied!");
                break;
            default:
                document.write("abe");
        }
    }
}
document.write("<br></br>",cpuI);
document.write("<br></br");
match(cpuI,user);
    