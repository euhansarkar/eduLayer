const express = require(`express`);
const app = express();
const port = process.env.PORT || 5000;
const courses = require(`./data/courses.json`)
const cors = require(`cors`);

app.use(cors());

app.get(`/`, (req, res) => {
    res.send(`mumbaui is coming`)
})

app.get(`/courses`, (req, res) => {
    res.send(courses)
})

app.get(`/course/:id`, (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log(`nodemon running on port ${port}`)
})