//Init Github, UI
const github = new Github;
const ui = new UI;

// Unos pretraživanja
const searchUser = document.getElementById('searchUser');

//Event listener za unos pretraživanja
searchUser.addEventListener('keyup', (e) => {
    //dohvaća uneseni tekst
    const userText = e.target.value;

    if(userText !== ''){
    // Make http call
    github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //Pokazuje upozornje
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                //Pokazuje profil
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        //Miče profil
        ui.clearProfile();
    }
});