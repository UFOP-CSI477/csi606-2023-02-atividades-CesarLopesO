import { Router } from 'express'

import { CreateCidadeController } from '../controller/cidades/CreateCidadeController.js'
import { GetAllCidadeController } from '../controller/cidades/GetAllCidadeController.js'
import { GetByIdCidadeController } from '../controller/cidades/GetByIdCidadeController.js'
import { UpdateCidadeController } from '../controller/cidades/UpdateCidadeController.js'
import { DeleteCidadeController } from '../controller/cidades/DeleteCidadeController.js'
import { GetCidadeByEstadoController } from '../controller/cidades/GetCidadeByEstadoController.js'


const cidadeRouter = Router()

const createCidadeController = new CreateCidadeController()
const getAllCidadeController = new GetAllCidadeController()
const getByIdCidadeController = new GetByIdCidadeController()
const updateCidadeController = new UpdateCidadeController()
const deleteCidadeController = new DeleteCidadeController()
const getCidadeByEstadoController = new GetCidadeByEstadoController()



cidadeRouter.get('/cidades', getAllCidadeController.handle)
cidadeRouter.post('/cidades', createCidadeController.handle)
cidadeRouter.get('/cidades/:id', getByIdCidadeController.handle)
cidadeRouter.put('/cidades', updateCidadeController.handle)
cidadeRouter.delete('/cidades', deleteCidadeController.handle)
cidadeRouter.get('/cidades/estado/:id', getCidadeByEstadoController.handle)

export { cidadeRouter }

