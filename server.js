const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json( ))
app.use(cors())
app.use(bodyParser.urlencoded( { extended:false } ))


const Permissoes = require('./routes/Permissoes')
app.use('/permissoes', Permissoes)

const Usuarios = require('./routes/Usuarios')
app.use('/usuarios', Usuarios)

const Estados = require('./routes/Estados')
app.use('/estados', Estados)

const Cidades = require('./routes/Cidades')
app.use('/cidades', Cidades)

const Bairros = require('./routes/Bairros')
app.use('/bairros', Bairros)

const Regionais = require('./routes/Regionais')
app.use('/regionais', Regionais)


const FonteRecursos = require('./routes/FonteRecursos')
app.use('/fonterecursos', FonteRecursos)

const MeioTransportes = require('./routes/MeioTransportes')
app.use('/meiotransportes', MeioTransportes)

const Orgaos = require('./routes/Orgaos')
app.use('/orgaos', Orgaos)

const AreasTematicas = require('./routes/AreasTematicas')
app.use('/areastematicas', AreasTematicas)

const temas = require('./routes/Temas')
app.use('/temas', temas)


const modalidades = require('./routes/Modalidades')
app.use('/modalidades', modalidades)

const servicos = require('./routes/Servicos')
app.use('/servicossocioassistenciais', servicos)

const servicosCategorias = require('./routes/ServicoCategorias')
app.use('/servicoscategorias', servicosCategorias)

const Cargos = require('./routes/Cargos')
app.use('/cargos', Cargos)

const Setores = require('./routes/Setores')
app.use('/setores', Setores)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})
