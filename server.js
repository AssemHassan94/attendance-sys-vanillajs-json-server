const jsonServer = require('json-server')
const auth = require('json-server-auth')

const rules = auth.rewriter({
  users: 600,
})


const app = jsonServer.create()
// const router = jsonServer.router('db.json')

// /!\ Bind the router db to the app
app.db = router.db

// You must apply the auth middleware before the router
app.use(rules)
app.use(auth)
// app.use(router)
app.listen(3000)