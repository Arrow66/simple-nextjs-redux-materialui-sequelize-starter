/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fruit', {
    fruit_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    variety: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'fruit'
  });
};
