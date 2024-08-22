const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('Multishop','root',null,{
    host:'localhost',
    dialect:'mysql',
});
(async ()=>{
    try {
        await sequelize.authenticate();
        console.log('succesfull');
    } catch (error) {
        console.error('error:', error);
    }
})();
module.exports = sequelize;