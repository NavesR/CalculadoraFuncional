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