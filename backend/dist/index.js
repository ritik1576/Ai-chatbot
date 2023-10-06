import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
// connections and listner
connectToDatabase();
app.listen(5000, () => console.log("server open"));
//# sourceMappingURL=index.js.map