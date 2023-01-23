module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define(
        "product", {
            proudct_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            product_name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            product_price: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            product_categorie: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            product_useYN: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                default : true,
            },
            deletedAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            user_id: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            freezeTableName: true,
            timestamps: true,
            comment: '상품 정보',
        }
    );
    return product;
};