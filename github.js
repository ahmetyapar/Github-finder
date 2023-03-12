class Github{
    constructor(){
        this.id = "f85319aad98d56e33474";
        this.secret = "b4fdcd0978c0f61133169ce8de0b181e10bf7945";
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.id}&client_secret=${this.secret}`);

        const profile = await profileResponse.json();

        return profile;


    }
}