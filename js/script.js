// 1. Creo un array di oggetti toDo, con le proprietà "text" e "done".

// 2. Utilizzo Vue per collegare l'array degli oggetti con la lista HTML.

// 3. Uso un ciclo v-for per iterare sugli oggetti toDo nell'array e generare un elemento HTML per ciascun oggetto.

// 4. Al click su l'elemento di lista cambio la proprietà "done" e sbarro il testo.

// 5. Al click del cestino posto alla fine della stessa riga del testo, rimuovere l'elemento stesso dalla lista.

// 6. Al click del bottone "aggiungi":

//     - leggo il testo nel campo di input.
//     - creo un oggetto toDo contenente il testo letto.
//     - aggiungo l'oggetto all'array toDo.
//     - pulisco l'input dopo l'aggiunta dell'oggetto.

const {createApp} = Vue;

createApp ({

  data() {
    return {
      // 1.
      tasks: [
        { text: 'Fare la spesa', done: false },
        { text: 'Studiare Vue', done: false },
        { text: 'Comprare la pappa ad artù', done: false }
      ],
      text: '',
      validEntry: '',
      validRemoveTask: ''
    };
  },

  methods:{
    // metodo per aggiungere una nuova task
    addTask() {
      // condizione per la validità dell'inserimento della task
      if (this.text.length < 5) {
        this.validEntry = "Il testo deve contenere almeno 5 caratteri.";
      } else {
        this.tasks.unshift({ text: this.text, done: false });
        this.text = '';
        this.validEntry = ''
      }
    },

    // metodo per rimuovere la task
    removeTask(index) {
      // condizione per la validità di rimozione task
      if (this.tasks[index].done) {
        this.tasks.splice(index, 1);
        this.validRemoveTask= '';
      } else {
        this.validRemoveTask = "Puoi rimuovere solo i compiti già svolti.";
      }
    },
    
    // metodo per invertire il valore della proprietà done quando si fa click sul testo
    toggleDone(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
  }

}).mount('#app')