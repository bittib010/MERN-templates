import { db } from '../libs/dbConnect.js';
import { ObjectId } from 'mongodb';

const collection = db.collection('users');

export const test = async (req, res) => {
    let results = await collection.indexInformation({}).toArray();
    res.status(200).json(results);
}

export const getUser = async (req, res, next) => {
    try {
        const query = { _id: new ObjectId(req.params.id) }
        const user = await collection.findOne(query)

        if (!user) {

            return next({ status: 404, message: 'User not found' })
        }
        res.status(200).json(user)

    } catch (err) {
        next({ status: 500, err })
    }
}

export const updateUser = async (req, res, next) => {
    try {
        if (req.body.password) { // if body has password
            req.body.passwod = await bcrypt.hash(req.body.password, 10);
        }
        const query = { _id: new ObjectId(req.params.id) }
        const data = {
            $set: {
                ...req.body, updatedAt: new Date().toISOString(),

            },
        }
        const options = {
            returnDocument: 'after',
        }

        const updatedUser = await collection.findOneAndUpdate(query, data, options)
        const { password: pass, updatedAt, createdAt, ...rest } = updatedUserres.status(200).json(updatedUser)
    } catch (err) {
        next({ status: 500, err })
    }
}
