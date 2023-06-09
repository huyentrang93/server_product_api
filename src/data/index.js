import sequelize from "./helper/sequelize";
import './model/createtable'
const checkConnectionAndSyncTable = async () => {
    const [, error] = await sequelize.authenticate();
    if (error) {
        return;
    }
    sequelize.sync();
}

checkConnectionAndSyncTable();

