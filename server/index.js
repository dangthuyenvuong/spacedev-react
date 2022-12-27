import express from 'express'
import path from 'path'

const app = express()

// Khai báo những static file, cho phép truy cập từ bên ngoài
app.use(express.static('../dist'))

// trỏ mọi request của user vào file index.html
app.all('*', (req, res) => {
    res.sendFile(path.resolve('../dist/index.html'))
})


// Start server bằng port 3000
app.listen(3000, () => {
    console.log('Server Nodejs listen on port 3000')
})