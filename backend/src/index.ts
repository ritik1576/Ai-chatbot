import app from "./app.js"
import { connectToDatabase } from "./db/connection.js"
// connections and listner
const PORT = process.env.PORT || 5000;
connectToDatabase()
app.listen(PORT , ()=> console.log("server open and connected to database"))
