
import { mainProductRepositories } from "../../data/repositories/mainproduct.repo";
import { devicesRepositories } from "../../data/repositories/device.repo";
import { RemotesRepositories } from "../../data/repositories/remotes.repo";
const createProduct = (req, res) => {
    const data = req.body;
    const product = new mainProductRepositories
    product.create(data.mp_id,data.mp_name,data.user_id, data.mp_imei, data.mp_date)
      res.send(data)    
}
const updateProduct = (req, res) => {
    const data = req.body;
    const product = new mainProductRepositories
    product.update(data.id,data.mp_name, data.mp_imei, data.mp_date)
      res.send(data)    
}

const deleteProduct = (req, res) => {
    const data = req.body;
    const product = new mainProductRepositories
    product.delete(data.mp_id)
      res.send(data)    
}

const fillallProduct = async (req, res) => {
    const product = new mainProductRepositories
    const data = await product.fillAll()
    res.send(data)
}

const filloneProduct = async (req, res) => {
    const product = new mainProductRepositories
    const data = req.body;
    const dataproduct = await product.findOne(data.mp_id)
    res.send(dataproduct)
}

const createDevice = (req, res) => {
    const data = req.body;
    const device = new devicesRepositories
    device.create(data.id, data.dv_name, data.note, data.dv_origin , data.id_product, data.id_type)
      res.send(data)    
}
const updateDevice = (req, res) => {
    const data = req.body;
    const device = new devicesRepositories
    device.update(data.dv_id, data.dv_name, data.note, data.dv_origin , data.id_type)
      res.send(data)    
}

const deleteDevice = (req, res) => {
    const data = req.body;
    const device = new devicesRepositories
    device.delete(data.dv_id)
      res.send(data)    
}

const fillallDevice = async (req, res) => {
    const device = new devicesRepositories
    const data = await device.fillAll()
    res.send(data)
}

const filloneDevice = async (req, res) => {
    const device = new devicesRepositories
    const data = req.body;
    const datadevice = await device.findOne(data.dv_id)
    res.send(datadevice)
}
const createRemote = (req, res) => {
    const data = req.body;
    const remote = new RemotesRepositories
    remote.create(data.rm_id, data.rm_name, data.rm_code, data.id_Device , data.date)
      res.send(data)    
}
const updateRemote = (req, res) => {
    const data = req.body;
    const remote = new RemotesRepositories
    remote.update(data.rm_id, data.rm_name, data.rm_code , data.date)
      res.send(data)    
}

const deleteRemote = (req, res) => {
    const data = req.body;
    const remote = new RemotesRepositories
    remote.delete(data.rm_id)
      res.send(data)    
}

const fillallRemote = async (req, res) => {
    const remote = new RemotesRepositories
    const data = await remote.fillAll()
    res.send(data)
}

const filloneRemote = async (req, res) => {
    const remote = new RemotesRepositories
    const data = req.body;
    const dataremote = await remote.findOne(data.rm_id)
    res.send(dataremote)
}
export default {
    createProduct,
    fillallProduct,
    updateProduct,
    deleteProduct,
    filloneProduct,
    createDevice,
    fillallDevice,
    updateDevice,
    deleteDevice,
    filloneDevice,
    createRemote,
    fillallRemote,
    updateRemote,
    deleteRemote,
    filloneRemote
}