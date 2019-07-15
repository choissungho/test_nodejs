const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))//

app.use(express.static('public'))
app.use(express.static('01small project'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
//__dirname : It will resolve to your project folder.
});

router.get('/external', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/external.html'));
    //__dirname : It will resolve to your project folder.
    });






    router.get('/external', function (req, res) {
        res.sendFile(path.join(__dirname + '/sub/external.html'));
        //__dirname : It will resolve to your project folder.
        });

        router.get('/sub1', function (req, res) {
            res.sendFile(path.join(__dirname + '/sub/sub1.html'));
            //__dirname : It will resolve to your project folder.
            });

            router.get('/sub2', function (req, res) {
                res.sendFile(path.join(__dirname + '/sub/sub2.html'));
                //__dirname : It will resolve to your project folder.
                });

                router.get('/sub3', function (req, res) {
                    res.sendFile(path.join(__dirname + '/sub/sub3.html'));
                    //__dirname : It will resolve to your project folder.
                    });

                    router.get('/sub4', function (req, res) {
                        res.sendFile(path.join(__dirname + '/sub/sub4.html'));
                        //__dirname : It will resolve to your project folder.
                        });

                        router.get('/sub5', function (req, res) {
                            res.sendFile(path.join(__dirname + '/sub/sub5.html'));
                            //__dirname : It will resolve to your project folder.
                            });

                            router.get('/Main', function (req, res) {
                                res.sendFile(path.join(__dirname + '/sub/Main.html'));
                                //__dirname : It will resolve to your project folder.
                                });






app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))