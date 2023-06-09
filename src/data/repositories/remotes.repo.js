import table from "../model/createtable";

class RemotesRepositories {
   async create( id, name, code, idDevice, date ) {
        const dataRemote = await table.Remotes.create({id, name, code, idDevice, date})
        return dataRemote
    }

    async update (rm_id, rm_name, rm_code , date ) {
        await table.Remotes.update({ name: rm_name, code: rm_code , date: date  }, {
            where: {
                id: rm_id
            }
          })
    }

   async delete (rm_id) {
        await table.Remotes.destroy({
            where: {
              id: rm_id
            }
          })
    }

    async fillAll () {
        const Remotes = JSON.stringify(await table.Remotes.findAll({attributes: ['id', 'name', 'code','idDevice','date']}))
        return Remotes
    }

    async findOne (rm_id) {
      const Remotes = JSON.stringify(await table.Remotes.findOne({attributes: ['id', 'name', 'code','idDevice','date'], where: { id: rm_id }}))
      return Remotes
  }
}
export {
  RemotesRepositories
}