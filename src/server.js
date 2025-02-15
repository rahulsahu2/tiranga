import 'dotenv/config'

import express from 'express';
import configViewEngine from './config/configEngine.js';
import routes from './routes/web.js';
import cronJobContronler from './controllers/cronJobContronler.js';
import socketIoController from './controllers/socketIoController.js';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
dotenv.config();
import cookieParser from 'cookie-parser';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.set('trust proxy', true);

const port = process.env.PORT || 3000;

app.use(cookieParser());
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup viewEngine
configViewEngine(app);
// init Web Routes
routes.initWebRouter(app);

// Cron game 1 Phut 
cronJobContronler.cronJobGame1p(io);

// Check xem ai connect vào sever 
socketIoController.sendMessageAdmin(io);

// app.all('*', (req, res) => {
//     return res.render("404.ejs"); 
// });

server.listen(port, () => {
    console.log("Connected success port: http://localhost:" + port);
});

