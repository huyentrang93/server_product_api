import table from "../model/createtable";

class devicesRepositories {
   async create( id, name, note, origin, idProduct,idType ) {
        const dataDevices = await table.Devices.create({id, name, note, origin, idProduct,idType })
        return dataDevices
    }

    async update (dv_id, dv_name, note, dv_origin , id_type) {
        await table.Devices.update({ name: dv_name, note: note, origin:dv_origin, idType: id_type  }, {
            where: {
                id: dv_id
            }
          })
    }

   async delete (dv_id) {
        await table.Devices.destroy({
            where: {
              id: dv_id
            }
          })
    }

    async fillAll () {
        const Devices = JSON.stringify(await table.Devices.findAll({attributes: ['id', 'name', 'note','origin','idProduct', 'idType'], include: table.Remotes}))
        return Devices
    }

    async findOne (dv_id) {
      const Devices = JSON.stringify(await table.Devices.findOne({attributes: ['id', 'name', 'note','origin','idProduct', 'idType'], include: table.Remotes, where: { id: dv_id }}))
      return Devices
  }
}
export {
  devicesRepositories
}