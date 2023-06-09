import table from "../model/createtable";

class mainProductRepositories {
   async create( id, name, userId, imei , date ) {
        const dataMainProduct = await table.MainProducts.create({id,name,userId,imei,date})
        return dataMainProduct
    }

    async update (mp_id, mp_name, mp_imei , mp_date) {
        await table.MainProducts.update({ name: mp_name, imei: mp_imei, date:mp_date  }, {
            where: {
                id: mp_id
            }
          })
    }

   async delete (mp_id) {
        await table.MainProducts.destroy({
            where: {
              id: mp_id
            }
          })
    }

    async fillAll () {
        const MainProduct = JSON.stringify(await table.MainProducts.findAll({attributes: ['id', 'name', 'userId','imei','date'], include: table.Devices}))
        return MainProduct
    }

    async findOne (mp_id) {
      const MainProduct = JSON.stringify(await table.MainProducts.findOne({attributes: ['id', 'name', 'userId','imei','date'], include: table.Devices, where: { id: mp_id }  }))
      return MainProduct
  }
}
export {
  mainProductRepositories
}