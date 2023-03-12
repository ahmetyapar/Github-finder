class UI{
    constructor(){
        this.profile = document.getElementById("profile");
    }

    showProfile(user){
        console.log(user);
        this.profile.innerHTML = `
        <div class="card">
          <div class="row">
            <div class="col-1">
              <img class="img" src="${user.avatar_url}">
              <a href="${user.html_url}" target="_blank" class="btn">View Profile</a>
            </div>
            <div class="col-2">
              <span class="">Public Repos: ${user.public_repos}</span>
              <span class="">Public Gists: ${user.public_gists}</span>
              <span class="">Followers: ${user.followers}</span>
              <span class="">Following: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="">Company: ${user.company}</li>
                <li class="">Website/Blog: ${user.blog}</li>
                <li class="">Location: ${user.location}</li>
                <li class="">Member Since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
      `;

    }

    clearProfile(){
        this.profile.innerHTML= "";
    }

    showAlert(){
        this.clearAlert();
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.innerText = "User Not Found";
        div.appendChild(p);
        div.className = "error";
        div.id = "error";
        const container = document.getElementById("container");
        const input = document.getElementById("input");
        container.insertBefore(div,profile);

        setTimeout(()=>{
            this.clearAlert();
        },3000);
        

    }
    clearAlert(){
        const alert = document.getElementById("error");
        if(alert){
            alert.remove();

        }
    }
}




