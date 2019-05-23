let cursos = [
  { id: 1, nombre: 'Javascript desde 0', duracion: '25 horas', valor: 250000},

  { id: 2, nombre: 'NodeJS desde 0', duracion: '20 horas', valor: 200000 },

  { id: 3, nombre: 'HTML/CSS desde 0', duracion: '30 horas', valor: 150000 }
];

let buscarCursos = (idCurso) => cursos.find( cursoEncontrado => cursoEncontrado.id == idCurso);

function mostrarCursos(i){
  if(i < cursos.length){
    setTimeout(function(){
      
      console.log('El curso ' + cursos[i].id + ' ' + cursos[i].nombre + ' tiene una duracion de ' + cursos[i].duracion + ' y un valor de ' + cursos[i].valor + ' pesos')
      i++;
      mostrarCursos(i);
    }, 2000);
  }
}
mostrarCursos(0);


module.exports = {
buscarCursos,
cursos,
mostrarCursos,
};