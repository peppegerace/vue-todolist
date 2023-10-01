Vue To Do List
===
Programma per stampare una lista di cose da fare tramite un input, gli elementi di lista svolti verranno sbarrati e possono essere eliminati dalla lista tramite un bottone.

1. Creo un array di oggetti toDo, con le proprietà "text" e "done".

2. Utilizzo Vue per collegare l'array degli oggetti con la lista HTML.

3. Uso un ciclo v-for per iterare sugli oggetti toDo nell'array e generare un elemento HTML per ciascun oggetto.

4. Al click su l'elemento di lista aggiungo la proprietà "done" e sbarro il testo.

5. Al click del cestino posto alla fine della stessa riga del testo, rimuovere l'elemento stesso dalla lista.

6. Al click del bottone "aggiungi":

    - leggo il testo nel campo di input.
    - creo un oggetto toDo contenente il testo letto.
    - aggiungo l'oggetto all'array toDo.
    - pulisco l'input dopo l'aggiunta dell'oggetto.
