import express from "express";

export const app = express()

app.get('/', (_req, res) => res.end().status(200));