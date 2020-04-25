    const express = require('express');
    const app = express();

    //----app object has few methods: -----
    // HTTP verbs AKA REST verbs!
    // CRUD app correspondence i.e
    // 1. get - READ
    // - DEFAULT for all browsers is get
    // 2. post - CREATE
    // 3. delete - DELETE
    // 4. put - UPDATE
    // 5. all - accepts any methods
    
    // Takes 2 args:
    // 1. path
    // 2. callback to run if an HTTP request that matches THIS verb is made to the path in #1

    app.get('/', (req, res) => {
        res.send('Welcome to postman!')
    });

    app.listen(3000);