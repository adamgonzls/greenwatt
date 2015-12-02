// Debugging
var bug = require('debug')
var debug = bug('rockit-express:api:user')

// Database
var db = require('../../lib/db')

// Router
var express = require('express')
var router = express.Router()

// Utility for changing case
var changeCase = require('../../lib/change-case')



// List all products
// this assumes ":3000/api/[filename]"
router.get('/', function(req, res) {
  //debug('GET' + req.path)

    db.selectFile('all-products', function(error, rows, fields) {
    
    if (error) {
        debug('DB Error', error)
        return res.status(500).send({ error })
    }

    res.json(rows.map(changeCase))

  });

})


router.get('/compare/:p1Id/:p2Id', function(req, res) {
  //debug('GET' + req.path)

  	var sqlVars = {
  		product1_id: req.params.p1Id,
  		product2_id: req.params.p2Id
  	}

    db.selectFile('compare', sqlVars, function(error, rows, fields) {
	    if (error) {
	        debug('DB Error', error)
	        return res.status(500).send({ error })
	    }

    	res.json(rows.map(changeCase))

  	});

})

router.get('/:productId/image', function(req, res) {
  //debug('GET' + req.path)

    db.selectFile('product-image', {id: req.params.productId},function(error, rows, fields) {
    
    if (error) {
        debug('DB Error', error)
        return res.status(500).send({ error })
    }

    res.json(rows.map(changeCase)[0].file_path)

  });

})


module.exports = router


// // Get user by ID
// router.get('/:id', function(req, res) {
//   //debug('GET' + req.path)
//   var id = req.params.id

//   db.selectFile('get-user', {id: id}, function(error, rows) {
//     if (error) {
//       debug('DB Error', error)
//       return res.status(500).send({ error })
//     }

//     res.json(rows.map(changeCase))
//   })
// })

// // Create a user
// router.post('/', function(req, res) {
//   //debug('POST' +  req.path + ',' + req.body)
//   var values = snakeProps(req.body)

//   db.insert('user', values, function(error, id) {
//     if (error) {
//       debug('DB Error', error)
//       return res.status(500).send({ error })
//     }

//     // Make a URL string
//     var uri = req.originalUrl + '/' + id;

//     // Redirect
//     res.location(uri).status(201).send(uri)

//   })

// })


