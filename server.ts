import express from 'express';
import dotenv from 'dotenv'
import bookRouter from './routes/bookRouter'
import userRouter from './routes/userRouter'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use("/books", bookRouter);
app.use("/user", userRouter)

app.listen(port, () => {
    console.log(`Servidor está ouvindo em http://localhost${port}`);
});
