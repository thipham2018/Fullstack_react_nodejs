import express from "express"
import postRoutes from "./routes/posts.js"
import userRouters from "./routes/users.js"
import authRouters from "./routes/auth.js"

const app = express()

app.use(express.json())
app.use("/api/posts", postRoutes)
app.use("/api/users", userRouters)
app.use("/api/auth", authRouters)

app.listen(8800, () => {
  console.log("connected!")
})
