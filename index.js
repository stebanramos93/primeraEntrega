const cursos = require ('./datos.js')
const inscrito = require ('./archivo.js')

let opciones = {
    idCurso:{
        demand:  true,
        alias: 'i'
    },

    nombre:{
        demand:  true,
        alias: 'n'
    },

    cedula:{
        demand:  true,
        alias: 'c'
    }
};

//Require Externo (yargs)
const argv = require('yargs').command('inscribir','realizar inscripcion', opciones).argv;


            if (argv.idCurso !== undefined && argv.nombre !== undefined && argv.cedula !== undefined) {
                
                cursos.buscarCursos(argv.i);
	            inscrito.crearArchivo(argv.n,argv.c,cursos.buscarCursos(argv.i));
                
                         

            }
            if(argv.idCurso == undefined || argv.nombre == undefined || argv.cedula == undefined){
                
                cursos.mostrarCursos();
            }

        

                
            



