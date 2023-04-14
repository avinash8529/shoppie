module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    'product',
    {
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.FLOAT, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: true },
      category: { type: DataTypes.STRING, allowNull: true },
      image: { type: DataTypes.TEXT, allowNull: false },
      rating: { type: DataTypes.JSONB, allowNull: true },
      created_by: { type: DataTypes.UUID },
      updated_by: { type: DataTypes.UUID },
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },
  );

  //   country.associate = (models) => {
  //     country.belongsTo(models.continent, {
  //       foreignKey: 'continent_id',
  //     });
  //     country.hasMany(models.state, {
  //       foreignKey: 'country_id',
  //     });
  //   };

  return product;
};
