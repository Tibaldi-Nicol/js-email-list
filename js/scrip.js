//creo un oggetto con dentro un array vuoto
// e una funzione che svuota larray
// e lo riempie di nuovo
// con le mail che prendo da un api
// e lo stampa a schermo

const oggetto = {
    emails: [],//array vuoto dove salvo le mail
    getEmails: function(){
        this.emails = []; //svuota larray prima di riempirlo di nuovo
    }
}
//Dentro getEmails(), dopo aver svuotato l'array, dobbiamo chiamare l'API per ottenere nuove email.
//creo array vuoto dove salvo le chiamate api
//un for per fare 10 chiamate
//con axios faccio la chiamata axios.get

//.push mette un elemento alla fine di un array per aggiungere le richieste api
const request = []; //salvo le chiamate api
for (let i = 0; i < 10; i++) {

    //significa  chiedi a questo sito un email casuale
    //e metti la risposta dentro request usando .push cosi la aggiunge alla fine
    request.push(axios.get('https://flynn.boolean.careers/exercises/api/random/mail'));
}

//ora uso promise all per aspettare le richieste in modo che arrivano tuytte le email
// non mostro le email fino a aquando non le ho tutte e 10
Promise.all(request).then((response) => {
    this.emails = responses.map(response => response.data.response);
    this.WebGL2RenderingContext(); //dopo aver preso le mail aggiorno la pagina
});

//creo una funzione per stampare le mail usando render 

render: function () {
    const emailList = document.getElementById("email-list"); // Prendiamo la lista <ul>
    emailList.innerHTML = this.emails.map(email => `<li>${email}</li>`).join("");
  }
  