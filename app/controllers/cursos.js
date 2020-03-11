var cursos = [
    {_id: 1, curso: 'Análise e desenvolvimento de sistemas'},
    {_id: 2, curso: 'Letras'},
    {_id: 3, curso: 'Direito'}
]

module.exports = function(){
    var controller = {}
    controller.listaCursos = function(req, res){
        res.json(cursos)
    }
    controller.obtemCursos = function(req,res){
        console.log('Selecionou o contato: ' + req.params.id)
        var idCurso = req.params.id
        var curso = cursos.filter(function(curso){
            return curso._id == idCurso
        })[0]
        curso ? res.json(curso) : res.status(404).send('Curso não encontrado!!')
    }
    return controller
}