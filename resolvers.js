import {tasks,users,quotes} from "./fakedb.js"
import {randomBytes} from "crypto"
import mongoose from "mongoose"
const userModel = mongoose.model("User")
const taskModel = mongoose.model("Task")

const resolvers = {
    Query:{
        users:async() => await userModel.find({}),
        user:async(_,{_id}) => await userModel.findOne({_id}),//users.find(user=>user._id == _id),
        tasks:async() => await taskModel.find({}),
        task:async(_,{_id}) => await taskModel.findOne({_id}),//tasks.find(task=>task._id == _id),
        quotes:() => quotes
    },
    User:{
        tasks:(ur) => taskModel.find({userId:ur._id})//tasks.filter(task=>task._id == ur._id)
    },
    Mutation:{
        signupUserDummy:(_,{UserNew}) => {
            // const _id = randomBytes(5).toString("hex")
            const _id = Number(users[users.length - 1]._id) + 1
            console.log(_id)
            users.push({
                _id,
                ...UserNew
            })
            return users.find(user => user._id == _id)
        }
    }
}

export default resolvers