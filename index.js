const express = require("express")
const namesorter = require("./sorting/namesorter")

require("./db/index")
const db = require("./db/schema")

const chatRouter = require("./routes/chat")

const app = express()
app.use(express.json())

app.get("/", async (req, res) => {
    const names = namesorter.sortNames()

    for (i = 0; i < names.length; i++) {
        const find = await db.findOne({ regNo: Number(names[i].regNo) })

        if (!find) {
            const add = await db.create({
                regNo: Number(names[i].regNo),
                lastName: names[i].lastName,
                firstName: names[i].firstName,
            })

            if (add) console.log(`Added ${names[i].regNo}`)
        }
    }
    res.send(`ECE 541 GROUP 3 PROJECT:
    EXPERT SYSTEMS AND SOFT BOTS
    `)
})

app.use("/chat", chatRouter)

app.listen(3000, () => {
    console.log(`Server started at PORT 3000!`)
})