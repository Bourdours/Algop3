    class Eleve {
        constructor (n, p, c){
            this.name = n ;
            this.prenom = p ;
            this.classe = c ;
            this.notes = {
                maths : [],
                algorithmique : [],
                JavaScript : [] 
            };
           
        }    
        
        bonjour() {
            console.log(`Bonjour, je suis ${this.name} ${this.prenom} et je suis en ${this.classe}`)
        }
        
        ajoutNote(matiere, note) {
            (this.notes[matiere]).push(note);
        }
        ajoutMatiere(matiere){
            (this.notes).create(matiere);
        }
    }
