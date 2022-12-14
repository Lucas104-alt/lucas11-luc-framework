import express from "express"
import { dirname, join } from "path"
import { fileURLToPath } from "url"


const app = express()

app.get("/", (req, res) => res.render("index.ejs", )) //LucFramework -- Index.EJS

app.get("/Hello", (req, res) => res.render("Hello.ejs")) //LucFramework -- Hello.EJS

app.get("/allgood", (req, res) => res.render("allgood.ejs", )) //LucFramework -- AllGood.EJS

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, "views"))

app.set("views", join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(join(__dirname, "public")))



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`The Server is ready on port http://localhost:${PORT}`)

});
console.log("Github: https://github.com/Lucas104-alt/lucas11-luc-framework")
