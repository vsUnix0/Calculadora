const resultado = document.querySelector(".resultado");
const botones = document.querySelectorAll(".calc-button");

let operacion = "";
let resetear = false;

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const valor = boton.textContent;

    if (valor === "C") {
      operacion = "";
      resultado.textContent = "0";
    } else if (valor === "←") {
      operacion = operacion.slice(0, -1);
      resultado.textContent = operacion || "0";
    } else if (valor === "=") {
      try {
        // Reemplazar los símbolos especiales por operadores reales
        const expresion = operacion
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/−/g, "-");

        const evaluado = eval(expresion);
        resultado.textContent = evaluado;
        operacion = evaluado.toString();
      } catch {
        resultado.textContent = "Error";
        operacion = "";
      }
    } else {
      if (resultado.textContent === "0" || resetear) {
        operacion = "";
        resetear = false;
      }
      operacion += valor;
      resultado.textContent = operacion;
    }
  });
});
