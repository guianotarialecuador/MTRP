const verificarToken = require('../middlewares/verificarToken');//Verifica que sea un usuario autentico
const verificarNotaria = require('../middlewares/VerificarNotaria');//Verifica que pertenesca a la notaria

module.exports = (app,User,Documento) => {

    app.get('/api/documentos', verificarToken(User),verificarNotaria(User),(req,res)=>{
        Documento.find({notaria: req.header("notaria")},(err,documentos)=>{
            if (err) {
                res.send(err);
            }
            res.json(documentos);
        });
    });

    app.delete('/api/documentos/:id',verificarToken(User),verificarNotaria(User),(req,res)=>{
        Documento.findById(req.params.id,function(err,usuario) {
            if (err)
                res.send(err);
            
            if (usuario) {
                Documento.findByIdAndDelete(req.params.id,function(e){
                    if (e)
                        res.send(e);
                    res.json({
                        msg_servidor_success: 'Documento Eliminado.'
                    });
                });               
            }else{
                res.json({
                    msg_servidor: 'Ese Documento no Existe.'
                });
            }

        });
    });

    app.post('/api/documentos', verificarToken(User),verificarNotaria(User),(req,res)=>{
        let fecha = new Date();
        let fechax = fecha.getFullYear()+'-'+fecha.getMonth()+'-'+fecha.getDate()+' '+fecha.getHours()+':'+fecha.getMinutes();

        Documento.create({
            notaria: req.header("notaria"),
            tramite: req.body.tramite,
            tramite_numero: req.body.tramite_numero,
            factura: req.body.factura,
            copias: req.body.copias,
            lugar: req.body.lugar,
            fecha: req.body.fecha,
            referencia: req.body.referencia,
            consecutivo: req.body.consecutivo,
            minuta: req.body.minuta,
            cuantia: req.body.cuantia,
            capital_aumento: req.body.capital_aumento,
            capital_actual: req.body.capital_actual,
            capital_final: req.body.capital_final,
            denominado: req.body.denominado,
            notario_genero: req.body.notario_genero,
            notario_leyenda: req.body.notario_leyenda,
            notario_firma: req.body.notario_firma,
            otorgantes: req.body.otorgantes,
            otorgantesj: req.body.otorgantesj,
            favorecidos: req.body.favorecidos,
            favorecidosj: req.body.favorecidosj,
            menores: req.body.menores,
            otorgante: req.body.otorgante,
            otorgantej: req.body.otorgantej,
            favorecido: req.body.favorecido,
            favorecidoj: req.body.favorecidoj,
            menor: req.body.menor,
            cantidad_comparecientes: req.body.cantidad_comparecientes,
            cantidad_otorgantes: req.body.cantidad_otorgantes,
            cantidad_favorecidos: req.body.cantidad_favorecidos,
            cantidad_menores: req.body.cantidad_menores,
            abogado: req.body.abogado,
            template: req.body.template,
            creador: req.body.creador,
            fecha_creacion: fechax,
            cambiador:'',
            fecha_cambio:'',
        },(err,documento)=>{
            if (err) {
                res.send(err);
            }
            res.json(documento);
        });
    });

    app.put('/api/documentos/:id', verificarToken(User),verificarNotaria(User),(req,res)=>{
        
        let fecha = new Date();
        let fechax = fecha.getFullYear()+'-'+fecha.getMonth()+'-'+fecha.getDate()+' '+fecha.getHours()+':'+fecha.getMinutes();

        Documento.findById(req.params.id,(err,documento)=>{
            if (err) {
                res.send(err);
            }
            if (documento) {
                documento.cambiador = req.body.cambiador;
                documento.fecha_cambio = fechax;

                if (req.body.tramite) {
                    documento.tramite = req.body.tramite;
                }
                if (req.body.tramite_numero) {
                    documento.tramite_numero = req.body.tramite_numero;
                }
                if (req.body.factura) {
                    documento.factura = req.body.factura;
                }
                if (req.body.copias) {
                    documento.copias = req.body.copias;
                }
                if (req.body.lugar) {
                    documento.lugar = req.body.lugar;
                }
                if (req.body.fecha) {
                    documento.fecha = req.body.fecha;
                }
                if (req.body.referencia) {
                    documento.referencia = req.body.referencia;
                }
                if (req.body.consecutivo) {
                    documento.consecutivo = req.body.consecutivo;
                }
                if (req.body.minuta) {
                    documento.minuta = req.body.minuta;
                }
                if (req.body.cuantia) {
                    documento.cuantia = req.body.cuantia;
                }
                if (req.body.capital_aumento) {
                    documento.capital_aumento = req.body.capital_aumento;
                }
                if (req.body.capital_actual) {
                    documento.capital_actual = req.body.capital_actual;
                }
                if (req.body.capital_final) {
                    documento.capital_final = req.body.capital_final;
                }
                if (req.body.denominado) {
                    documento.denominado = req.body.denominado;
                }
                if (req.body.notario_genero) {
                    documento.notario_genero = req.body.notario_genero;
                }
                if (req.body.notario_leyenda) {
                    documento.notario_leyenda = req.body.notario_leyenda;
                }
                if (req.body.notario_firma) {
                    documento.notario_firma = req.body.notario_firma;
                }
                if (req.body.otorgantes) {
                    documento.otorgantes = req.body.otorgantes;
                }
                if (req.body.otorgantesj) {
                    documento.otorgantesj = req.body.otorgantesj;
                }
                if (req.body.favorecidos) {
                    documento.favorecidos = req.body.favorecidos;
                }
                if (req.body.favorecidosj) {
                    documento.favorecidosj = req.body.favorecidosj;
                }
                if (req.body.menores) {
                    documento.menores = req.body.menores;
                }
                if (req.body.otorgante) {
                    documento.otorgante = req.body.otorgante;
                }
                if (req.body.otorgantej) {
                    documento.otorgantej = req.body.otorgantej;
                }
                if (req.body.favorecido) {
                    documento.favorecido = req.body.favorecido;
                }
                if (req.body.favorecidoj) {
                    documento.favorecidoj = req.body.favorecidoj;
                }
                if (req.body.menor) {
                    documento.menor = req.body.menor;
                }
                if (req.body.cantidad_comparecientes) {
                    documento.cantidad_comparecientes = req.body.cantidad_comparecientes;
                }
                if (req.body.cantidad_otorgantes) {
                    documento.cantidad_otorgantes = req.body.cantidad_otorgantes;
                }
                if (req.body.cantidad_favorecidos) {
                    documento.cantidad_favorecidos = req.body.cantidad_favorecidos;
                }
                if (req.body.cantidad_menores) {
                    documento.cantidad_menores = req.body.cantidad_menores;
                }
                if (req.body.abogado) {
                    documento.abogado = req.body.abogado;
                }
                if (req.body.template) {
                    documento.template = req.body.template;
                }

                documento.save((e)=>{
                    if (e) {
                        res.send(e);
                    }
                    res.json(documento);
                });
            }else{
                res.json({
                    msg_servidor: 'Ese Documento no Existe.'
                });
            }
        });
    });

}