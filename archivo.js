const fs = require ('fs');





let crearArchivo = (nombre,cedula,curso) => {
	
    texto = 'El estudiante ' + nombre +
            ' con cedula ' + cedula +
            ' se ha matriculado en el curso ' + curso.id +' '+ curso.nombre +
            ' que tiene una duracion de ' + curso.duracion + ' y un valor de ' + curso.valor ;
    
    fs.writeFile('inscripcion-'+curso.nombre+'-'+nombre+'-'+cedula+'.txt',texto,(err) => {
        if (err) throw (err);
        console.log('inscripcion exitosa');
            
    });
    
}

module.exports = {
	crearArchivo
	};