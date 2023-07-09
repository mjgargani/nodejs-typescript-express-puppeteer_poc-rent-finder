import { app } from "./routes";

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log('Listen on port', PORT));