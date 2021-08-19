/*
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('btn-del'),

        inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        pressionaEnter() {
            document.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {
            let conta = this.display.value
            try {
                conta = eval(conta)
            if (!conta) {
                alert('Conta invalida')
                return
            }

            this.display.value = String(conta)
            } catch(e) {
                alert('Conta invalida') 
                return
            }
        },
   
        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if (el.classList.contains('btn-equal')) {
                    this.realizaConta()
                }

            }.bind(this))
        },

        btnParaDisplay(valor) {
            this.display.value += valor
    },

}
}
const calculadora = criaCalculadora()
calculadora.inicia()
*/


function Calculadora() {
    this.display = document.querySelector('.display')
    this.btnClear = document.querySelector('.btn-clear')
    this.btnDel = document.querySelector('.btn-del')

    this.inicia = function() {
        this.cliqueBotoes()
        this.pressionaEnter()
    }

    this.pressionaEnter = function() {
        document.addEventListener('keypress', event => {
            if (event.keyCode === 13) {
                this.realizaConta()
            }
        })
    }

    this.clearDisplay = function() {
        this.display.value = ''
    }

    this.apagaUm = function() {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.realizaConta = function() {
        let conta = this.display.value
        try {
            conta = eval(conta)
            if (conta === 0) {
                this.display.value = 0
                return
            }
            if (!conta) {
                alert('Conta invalida')
                return
            }
            this.display.value = String(conta)
        } catch(e) {
            alert('Conta invalida')
            return
        }
    }

    this.cliqueBotoes = function() {
        document.addEventListener('click', event => {
            const el = event.target
            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText)

            if (el.classList.contains('btn-clear')) this.clearDisplay()
                
            if (el.classList.contains('btn-del')) this.apagaUm()

            if (el.classList.contains('btn-equal')) this.realizaConta()
        })
    }

    this.btnParaDisplay = (valor) => {this.display.value += valor}
}

const calculadora = new Calculadora()
calculadora.inicia()