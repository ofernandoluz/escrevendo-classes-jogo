// Definição da classe Heroi
class Heroi {
    // Método construtor para inicializar as propriedades do herói
    constructor(nome, idade, tipo) {
        this.nome = nome; // Nome do herói
        this.idade = idade; // Idade do herói
        this.tipo = tipo; // Tipo do herói (mago, guerreiro, monge, ninja)
    }

    // Método para o herói realizar um ataque
    atacar() {
        let ataque; // Variável para armazenar o tipo de ataque
        
        // Switch para determinar o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia'; // Ataque do mago
                break;
            case 'guerreiro':
                ataque = 'usou espada'; // Ataque do guerreiro
                break;
            case 'monge':
                ataque = 'usou artes marciais'; // Ataque do monge
                break;
            case 'ninja':
                ataque = 'usou shuriken'; // Ataque do ninja
                break;
            default:
                ataque = 'não realizou um ataque específico'; // Caso de herói desconhecido
        }

        // Exibe a mensagem de ataque do herói
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi com heróis do universo Fortnite
const mago = new Heroi('Ragnarok', 40, 'mago'); // Cria um mago
const guerreiro = new Heroi('Black Knight', 30, 'guerreiro'); // Cria um guerreiro
const monge = new Heroi('Wild Card', 500, 'monge'); // Cria um monge
const ninja = new Heroi('Raven', 35, 'ninja'); // Cria um ninja

// Chama o método atacar() para cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();

