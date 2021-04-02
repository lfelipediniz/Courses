// Factory function 
// Constructor function 

function personCreator(name, surname, a, p) {

    return {

      name,
      surname,
  
      // Getter

      get fullName() {

        return `${this.name} ${this.surname}`;
      },
  
      // Setter

      set fullName(value) {

        value = value.split(' ');

        this.name = value.shift();
        this.surname = value.join(' ');
      },
  
      sppech(subjectMatter = 'talking about NOTHING') {
          
        return `${this.name} is ${subjectMatter}.`;
      },
  
      height: a,
      weight: p,
  
      // Getter
      
      get imc() {
        const indice = this.weight / (this.height ** 2);
        return indice.toFixed(2);
      }
    };
  }
  
  const p1 = personCreator('Luiz', 'Otávio', 1.8, 80);
  const p2 = personCreator('João', 'Otávio', 1.90, 57);
  const p3 = personCreator('Junior', 'Otávio', 1.5, 110);
  
  console.log(p1.imc);
  console.log(p2.imc);
  console.log(p3.imc);
  
  