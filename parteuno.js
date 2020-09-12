module.exports =(personas, hora, precio, total, llamada)=>{
	prueba1 = 0;
		if (hora <=0 ||  precio<=0){
				llamada(new Error("No se permiten valores negativos o en 0"), null);
		}
		else {
				llamada(null, {
					Total:()=> (prueba1 += ((hora * personas) * precio)),
					sumatotal:()=> (total + prueba1),
					Holgura:()=> (prueba1 * 0.08),
				});
		}
}
