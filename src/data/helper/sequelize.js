import sequelize from "../source";
import model from "../model/createtable"
const sync = async (force = false) => {
    try {
        await sequelize.sync({ force });
        console.log('Table has been synced successfully.');
    } catch (error) {
        console.log('Unable to sync table: ', error);
    }
}

const authenticate = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return [];
    } catch (error) {
        console.log('Unable to connect to the database: ', error);
        return [null, error];
    }
}

export default {
    sync,
    authenticate,
}