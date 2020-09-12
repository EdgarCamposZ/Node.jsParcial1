var parteuno = require('./parteuno');
var partedos = require('./partedos');

const Pt2 = partedos.suma([10, 20]);
	function Pt1(personas, hora, precio, total) {
		console.log("horas que cada empleado ha trabajado: "  + hora + "\n" + "precio de las horas de cada empleado:" + precio);

		parteuno(personas, hora, precio, total, (error, nul)=>{
			if (error){
				console.log("ERROR:", error.message);
			}
			else{
				console.log("Total:" + nul.Total());
				console.log("Holgura:" + nul.Holgura());
				console.log("Suma total:" + nul.sumatotal());
				console.log("Materiales:" + Pt2);
			}
		});
}

Pt1(8, 10, 30, Pt2);
