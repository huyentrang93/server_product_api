
import { productPath,devicePath,remotePath } from "../path/index";
import productController from "../controller/mainproduct";
let initAPIRoutes = (app) => {
app.route(productPath).post(productController.createProduct);
app.route(productPath+'s').get(productController.fillallProduct);
app.route(productPath).get(productController.filloneProduct);
app.route(productPath).put(productController.updateProduct);
app.route(productPath).delete(productController.deleteProduct);
app.route(devicePath).post(productController.createDevice);
app.route(devicePath+'s').get(productController.fillallDevice);
app.route(devicePath).get(productController.filloneDevice);
app.route(devicePath).put(productController.updateDevice);
app.route(devicePath).delete(productController.deleteDevice);
app.route(remotePath).post(productController.createRemote);
app.route(remotePath+'s').get(productController.fillallRemote);
app.route(remotePath).get(productController.filloneRemote);
app.route(remotePath).put(productController.updateRemote);
app.route(remotePath).delete(productController.deleteRemote);
}
module.exports = initAPIRoutes;