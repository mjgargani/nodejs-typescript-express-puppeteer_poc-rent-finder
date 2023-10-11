import app from "./routes";

const PORT: Number = Number(process.env.PORT) || 3000;

app.listen(PORT, ()=>console.log('Listen on port', PORT));