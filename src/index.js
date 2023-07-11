import "regenerator-runtime/runtime";
import app from "./app";
import { db } from "./database/database";
const PORT = process.env.PORT ? process.env.PORT : 8080;

const main = async () => {
    try {

        console.clear()
        /* connect to database */
        await db();
        console.log(`Database connected`);

        /* asign port */
        app.listen(PORT)
        console.log(`Server running on por ${PORT}`);

    } catch (error) {
        console.error(error);
    }
}

main();