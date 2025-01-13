import app from "../App"
import router from {router}

app.get('/', (req, res)=> {
    res.send('root')
})

export default router;