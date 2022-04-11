require('dotenv').config()
const expree = require('express')
const fileUpload = require('express-fileupload')

const videoRouter = require('./routes/video.route')

const PORT = process.env.PORT || 5000

const app = expree()
app.use(expree.json())
app.use(fileUpload({
	createParentPath: true,
}))

app.use('/video', videoRouter)

app.get('/', (req, res) => {
	res.json({
		message: "Hello World"
	})
})

app.listen(PORT, ()=>console.log('Listening on port:', PORT))