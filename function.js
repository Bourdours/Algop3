    function genererNote (min, max) { 
            return Math.round(Math.random() * (max - min) + min); // nombre aléatoire entre 0(min) et 20(max)
    }


    function ajoutNoteAlea(groupe,matiere){
        groupe.forEach(eleve => eleve.notes[matiere].push(genererNote(0,20))
        )
    } // selon le "groupe" pour chaque eleve, on rajoute un "nombre aleatoire" à "matiere"


    function average(mesNotes) {
        let somme = 0 ;
        mesNotes.forEach(note => { 
            somme += note;
            }
        );
        let moyenne = somme / mesNotes.length ;
        console.log(`average::${moyenne.toFixed(2)}`) ;
        return moyenne ;
    } // moyenne selon le tableau "mesNotes"


    function notesEleve(groupe,matiere){
        let totalNote = [];

        groupe.forEach(eleve =>
            totalNote = totalNote.concat(eleve.notes[matiere]
            ) // on pousse dans un tableau les notes (qui sont tableau) en les fusionnant
        )
        return totalNote;
    } // récupère les notes du "groupe", selon la "matière" et on les pousse dans [totalNote]


    function noteGlobal(groupe, matiere){
        let somme = 0; // ajoute toutes les notes de "matière" du "groupe"
        notesEleve(groupe, matiere).forEach(note =>
            somme += note,
        )
        return somme ;
        // => somme de toutes les notes
    }

