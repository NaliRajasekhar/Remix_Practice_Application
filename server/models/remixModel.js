
  module.exports = (sequelize, DataTypes) => {
    const UserTable = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true

        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        gender: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
        }
    },
    { timestamps: false });

    return UserTable;
}
