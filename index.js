const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
ans1 = document.getElementById("answer1")
ans2 = document.getElementById("answer2")
console.log(ans1)
function securepassword(){
    let password = ""
    for(let i=0;i<12;i++){
        rand = Math.floor(Math.random()*characters.length)
        password += characters[rand]
    }
    return password
}
function generate(){
    ans2.textContent = securepassword()
    ans1.textContent = securepassword()
}