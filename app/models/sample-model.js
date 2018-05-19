module.exports = FoodModel
const FoodModel = require('./Model')

FoodModel.Create('foods', (table) => {
    table.string('name')
    table.number('price')
    table.boolean('is_cooked')
})

FoodModel.Orders = function (){
    this.belongsTo('OrderModel', 'orderID')
}
