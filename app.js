const userid = document.getElementById("input");

const github = new Github();
const ui = new UI();

userid.addEventListener("keyup",findUser);

function findUser(e){
    let username = e.target.value;
    
    if(username !== ""){
        github.getUser(username)
        .then(data => {
            if(data.message ==="Not Found"){
                ui.showAlert();
                
                
            }else{
                ui.showProfile(data);
            

            }
        })
        

    }else{
        ui.clearProfile();
        
    }
}