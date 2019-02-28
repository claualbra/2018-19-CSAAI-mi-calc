function main() {
  var calculadora = {
    op1: "",
    op2: "",
    op: "",
    expr: "",
    estado: "inic",
    gui: {
      uno: document.getElementById('1'),
      dos: document.getElementById('2'),
      tres: document.getElementById('3'),
      mas: document.getElementById('+'),
      cuatro: document.getElementById('4'),
      cinco: document.getElementById('5'),
      seis: document.getElementById('6'),
      menos: document.getElementById('-'),
      siete: document.getElementById('7'),
      ocho: document.getElementById('8'),
      nueve: document.getElementById('9'),
      por: document.getElementById('*'),
      cero: document.getElementById('0'),
      reset: document.getElementById('reset'),
      igual: document.getElementById('='),
      entre: document.getElementById('/'),
      display: document.getElementById('display'),
    },
    boton_dig: function(dig){
      switch (this.estado) {
        case "inic":
          this.gui.display.innerHTML = dig;
          this.estado = "op1";
          this.op1 += dig;
          break;
        case "op1":
          this.gui.display.innerHTML += dig;
          this.estado = "op1";
          this.op1 += dig;
          break;
        case "op2":
          this.gui.display.innerHTML += dig;
          this.estado = "op2";
          this.op2 += dig;
          break;
        default:
          console.log("Parametro no valido");
      }
    },
    boton_op: function(operador){
      switch (this.estado) {
        case "op1":
            this.gui.display.innerHTML += operador;
            this.estado = "op2";
            this.op += operador;
          break;
        default:
          console.log("Parametro no valido");
      }
    },
    boton_reset: function(){
      this.gui.display.innerHTML = "";
    },
    boton_calcular: function(){
      switch (this.estado) {
        case "op2":
          this.expr = this.op1 +this.op + this.op2;
          this.gui.display.innerHTML = eval(this.expr);
          this.estado = "inic";
          this.op2 = "";
          this.op1 = "";
          this.op = "";
          break;
        default:
          console.log("Parametro no valido");
      }
    }
  }
  calculadora.gui.uno.onclick = () => {
    calculadora.boton_dig("1");
  }
  calculadora.gui.dos.onclick = () => {
    calculadora.boton_dig("2");
  }
  calculadora.gui.tres.onclick = () => {
    calculadora.boton_dig("3");
  }
  calculadora.gui.mas.onclick = () => {
    calculadora.boton_op("+");
  }
  calculadora.gui.cuatro.onclick = () => {
    calculadora.boton_dig("4");
  }
  calculadora.gui.cinco.onclick = () => {
    calculadora.boton_dig("5");
  }
  calculadora.gui.seis.onclick = () => {
    calculadora.boton_dig("6");
  }
  calculadora.gui.menos.onclick = () => {
    calculadora.boton_op("-");
  }
  calculadora.gui.siete.onclick = () => {
    calculadora.boton_dig("7");
  }
  calculadora.gui.ocho.onclick = () => {
    calculadora.boton_dig("8");
  }
  calculadora.gui.nueve.onclick = () => {
    calculadora.boton_dig("9");
  }
  calculadora.gui.por.onclick = () => {
    calculadora.boton_op("*");
  }
  calculadora.gui.cero.onclick = () => {
    calculadora.boton_dig("0");
  }
  calculadora.gui.reset.onclick = () => {
    calculadora.boton_reset();
  }
  calculadora.gui.igual.onclick = () => {
    calculadora.boton_calcular();
  }
  calculadora.gui.entre.onclick = () => {
    calculadora.boton_op("/");
  }
}
