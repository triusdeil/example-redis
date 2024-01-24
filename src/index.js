import express from 'express'
import 'dotenv/config'

const PORT = process.env.NODE_DOCKER_PORT

const app = express();

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})