 const express = require('express')
 const app = express()
 const PORT = 5000

app.get("/api", (req, res) =>{
    res.json({ 
        "users": ["userOne","userTwo","userThree","Four"]
       })
})

app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`
     )})
