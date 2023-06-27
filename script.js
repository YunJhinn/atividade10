// EXERCICIO 1

class Forma {

    altura
    constructor(altura){
        this.altura=altura
    }

    calcularArea(){
        console.log("Você acessou essa função pela classe Mãe")

        
    }

    calcularVolume(){
        console.log("Você acessou essa função pela classe Mãe./2")
    }
}

let forma10 = new Forma(10)

forma10.calcularArea()
forma10.calcularVolume()




// EXERCICIO 2 e 3

class FormaPlana extends Forma  {
    #tipo
    #base
    #comprimento
    
    constructor(altura,tipo,base,comprimento){
        super(altura)
        this.#tipo = tipo
        this.#base = base
        this.#comprimento = comprimento

    }

    gettipo(){
        return this.#tipo
    }

    settipo(novotipo){

        this.#tipo = novotipo
    }

    getbase(){
        return this.#base
    }

    setbase(novobase){

        this.#base = novobase
    }

    getcomprimento(){
        return this.#comprimento
    }

    setcomprimento(novocomprimento){

        this.#comprimento = novocomprimento
    }

    calcularArea(){

        if(this.#tipo === "retangular"){

            return  (this.#base*this.#comprimento).toFixed(2)
        }
        if(this.#tipo === "triangular" ){

            return  ((this.#base*this.#comprimento)/2).toFixed(2)
        }
        else{
            console.log("A forma inserida não é Válida")
        }
    }

    

    calcularVolume(){

        if(this.#tipo === "retangular" ){ 
            
        let areabase = this.calcularArea(
                this.#base , this.#comprimento
            )

            return  (areabase*this.#comprimento).toFixed(2)


        }

        if(this.#tipo === "triangular" ){

            return ((areabase*this.#comprimento)/2).toFixed(2)
        }
        else{
            console.log("A forma inserida não é Válida")
        }
    }


}

let formaplana1 = new FormaPlana (10,"retangular" , 10 , 5)

let areafp1 = formaplana1.calcularArea()
let volumefp1 = formaplana1.calcularVolume()

console.log(areafp1)
console.log(volumefp1)







// EXERCICIO 4 e 5

class FormaCircular extends Forma {
        #pi
        #raio
        
        
        constructor(altura,raio){
            super(altura)
                
            this.#pi = 3.14
            this.#raio = raio
        }

        

        getpi(){
            return this.#pi
        }

        getraio(){
            return this.#raio
        }

        setraio(novoraio){
            return this.#raio = novoraio
        }

        calcularArea(){

            return (this.#pi*Math.pow(this.#pi,2)).toFixed(2)
        }

        calcularVolumeCilindro(){

            let area = this.calcularArea()
            return (area*this.altura).toFixed(2)
        }

        calcularVolumeCone(){
            let area = this.calcularArea()
            return ((area*this.altura)/3).toFixed(2)
        }

        calcularVolumeEsfera(){
            let area = this.calcularArea()
            return (area*this.#raio*1.33).toFixed(2)
        }

        

}



let formacircular1 = new FormaCircular (5,10)

let areac1 = formacircular1.calcularArea()
let vcc1 = formacircular1.calcularVolumeCilindro()
let cvc1 =formacircular1.calcularVolumeCone()
let cvec1 = formacircular1.calcularVolumeEsfera()

console.log(areac1)
console.log(vcc1)
console.log(cvc1)
console.log(cvec1)




// EXERCICIO 6

// adicionado todos os retornos de area e volume para retornarem os valores como apenas duas casa decimais utilizando o toFixed(2)

// utilizando o toLowerCse() para trasnformar todos os dados do parametro tipo na classe FormaPlana para letras minusculas evitando conflito de leitura

// adicionada uma mensagem para o usuário caso o o tipo inserido não seja retangular ou triangular

// EXERCICIO 7

// saidas registradas em todos os metodos apos instaciar um item para cada classe

//  questão b ===== 









