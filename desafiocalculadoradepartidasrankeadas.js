let rankeadas = 0;

function pontos(vitorias, derrotas) {
  rankeadas = vitorias - derrotas;
}

pontos(80, 6);

let nivel = "";

if (rankeadas <= 10) {
  nivel = "ferro";
} else if (rankeadas > 10 && rankeadas <= 20) {
  nivel = "bronze";
} else if (rankeadas > 20 && rankeadas <= 50) {
  nivel = "prata";
} else if (rankeadas > 50 && rankeadas <= 80) {
  nivel = "ouro";
} else if (rankeadas > 80 && rankeadas <= 90) {
  nivel = "diamante";
} else if (rankeadas > 90 && rankeadas <= 100) {
  nivel = "lendario";
} else if (rankeadas >= 101) {
  nivel = "imortal";
}

console.log("O Herói tem de saldo de " + rankeadas + " e está no nível de " + nivel);
