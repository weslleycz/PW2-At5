import { Animal } from "./Animal";
import { Filhote } from "./Filhote";
import { Furao } from "./Furao";
import { Hamster } from "./Hamster";

console.log("questão 1");

const gato = new Animal("Preto");

gato.exibirAnimal();

gato.cadastrar("Fofo");
gato.cadastrar("Lindo");

console.log(gato.exibirCaracteristica());

console.log("questão 2");

const filote = new Filhote(["ffftt", "ghhjj"], 34);

filote.adotar("Weslley");

console.log("questão 3");

const hamster = new Hamster();
const furao = new Furao();

console.log(hamster.especie);

hamster.correr();

console.log(hamster.felicidade);

hamster.correr();
hamster.correr();

console.log(hamster.felicidade);
console.log(hamster.comer());

console.log(furao.especie);

furao.cavar();
furao.cavar();

console.log(furao.felicidade);

furao.cavar();
console.log(furao.felicidade);

console.log(furao.comer("sementes"));
console.log(furao.comer("insetos"));
