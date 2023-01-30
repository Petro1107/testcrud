const express = require('express')
const routes = express.Router()


//GET
routes.get('/', (req, res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM books', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
  }
  )


//POST
routes.post('/', (req, res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        conn.query('INSERT INTO books set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('book added!')
        })
    })
  }
  )


//DELETE
routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('DELETE FROM books WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('book deleted!')
        })
    })
  }
  )

//UPDATE
routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('UPDATE books set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=> {
            if(err) return res.send(err)

            res.send('book updated!')
        })
    })
  }
  )


module.exports = routes