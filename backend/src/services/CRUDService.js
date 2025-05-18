import bcrypt from "bcrypt";
import db from "../models/index.js"; // Assuming you have a models/index.js file for database connection
import dotenv from "dotenv";
dotenv.config();

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.log("Error hashing password:", error);
        throw new Error("Error hashing password");
    }
};

const createNewUser = async (data) => {
    try {
        const { username, password } = data;
        const hashedPassword = await hashUserPassword(password);
        // Here you would typically save the user to a database
        // For example: await UserModel.create({ username, password: hashedPassword });
        const newUser = await db.User.create({
            email: data.email,
            password: hashedPassword,
            firstName: data.firstName,
            lastName:   data.lastName,
            address: data.address,
            phoneNumber: data.phoneNumber,
            gender: data.gender === "1" ? true : false,
            roleId: data,
        });
        
        return newUser;
    } catch (error) {
        console.log("Error creating new user:", error);
        throw new Error("Error creating new user");
    }
};

export const CRUDService = {
    hashUserPassword,
    createNewUser,
};
