const { Model, DataTypes } = require("sequelize");

// Local Modules
const sequelize = require("../config/connection");

class PostTag extends Model {}

PostTag.init(
    {
        // post_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'post',
        //         key: 'id',
        //         unique: false
        //     },
        //     allowNull: true
        // },

        // tag_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'tag',
        //         key: 'id',
        //         unique: false
        //     },
        //     allowNull: true
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "post_tag",
      }
);

module.exports = PostTag;