var contatos = [
    {_id: 1, nome: 'Gabriela Mota', email: 'gabriela.mota@ifsp.edu.br'},
    {_id: 2, nome: 'Larissa Ellen', email: 'larissa.ellen@ifsp.edu.br'},
    {_id: 3, nome: 'Fabio Teixeira', email: 'fabio.teixeira@ifsp.edu.br'}
]

module.exports = function(){
    var controller = {}
    controller.listaContatos = function(req, res){
        res.json(contatos)
        
    }
    controller.obtemContato = function(req,res){
        console.log('Selecionou o contato: ' + req.params.id)
        var idContato = req.params.id
        var contato = contatos.filter(function(contato){
            return contato._id == idContato
        })[0]
        contato ? res.json(contato) : res.status(404).send('Contato não encontrado!!')
    }
    return controller
}