import { Model, DataTypes } from "sequelize";
import sequelize from "../connection.js";

class Contact extends Model {}

Contact.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        firstname:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        lastname:
            {
                type: DataTypes.STRING
            },
        email:
            {
                type: DataTypes.STRING,
                allowNull: false,
                validate: { isEmail: true }
            },
        phone:
            {
                type: DataTypes.STRING,
                allowNull: false
            },
        message:
            {
                type: DataTypes.TEXT,
                allowNull: false
            },
        status:
            {
                type: DataTypes.ENUM("pending","responded","closed"),
                defaultValue: "pending"
            },
    },
    {
        sequelize,
        modelName: "Contact",
        tableName: "contacts",
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
// Sync the model to create the table with all columns
(async () => {
    try {
        await sequelize.sync(); // force: true drops and recreates table
        console.log("Table 'contacts' created successfully with all attributes!");
    } catch (err) {
        console.error("Error creating table:", err);
    }
})();
export default  Contact ;
