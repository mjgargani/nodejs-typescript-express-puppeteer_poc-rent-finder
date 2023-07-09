"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const PORT = process.env.PORT || 3000;
routes_1.app.listen(PORT, () => console.log('Listen on port', PORT));
