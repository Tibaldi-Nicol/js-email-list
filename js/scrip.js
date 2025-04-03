const oggetto = {
    emails: [], //array vuoto dove salvo le mail
    getEmails: function() {
        this.emails = []; //svuota l'array prima di riempirlo di nuovo

        const request = []; //salvo le chiamate api
        for (let i = 0; i < 10; i++) {
            //significa chiedi a questo sito un email casuale
            //e metti la risposta dentro request usando .push cosi la aggiunge alla fine
            request.push(axios.get('https://flynn.boolean.careers/exercises/api/random/mail'));
        }

        //ora uso promise all per aspettare le richieste in modo che arrivano tutte le email
        // non mostro le email fino a quando non le ho tutte e 10
        Promise.all(request).then((responses) => {
            this.emails = responses.map(response => response.data.response);
            this.render(); //dopo aver preso le mail aggiorno la pagina
        });
    },

    //creo una funzione per stampare le mail usando render 
    render: function() {
        const emailList = document.getElementById("email-list"); // Prendiamo la lista <ul>
        emailList.innerHTML = this.emails.map(email => `<li>${email}</li>`).join("");
    }
};

document.addEventListener("DOMContentLoaded", () => {
    oggetto.getEmails(); // Carica la lista quando la pagina si apre
    document.getElementById("refresh-btn").addEventListener("click", () => oggetto.getEmails());
});
