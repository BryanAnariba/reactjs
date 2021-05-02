import { hashSync, compareSync, genSalt } from 'bcrypt';

const hashedPassword = async (password: string): Promise<String> => {
    try {
        const salt = await genSalt(10);
        return await hashSync(password, salt);
    } catch (error) {
        return error;
    }
}

const verifyPassword = async (password: string, hashedPassword: string): Promise<Boolean> => {
    try {
        return await compareSync(password, hashedPassword);
    } catch (error) {
        return false;
    }
}

export {
    hashedPassword,
    verifyPassword
};