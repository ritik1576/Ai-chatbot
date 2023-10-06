import { connect , disconnect } from "mongoose";
 async function connectToDatabase() {
try{
  await connect(process.env.MONGODB_URL);
}catch(err){
console.log(err)
throw new Error("Cannot  conect  to mongodb")
}
    
}

async function disconnectToDatabase() {
    try{
      await disconnect();
    }catch(err){
    console.log(err)
    throw new Error("Could not disconnect from mongodb")
    }
        
    }

    export {connectToDatabase , disconnectToDatabase}