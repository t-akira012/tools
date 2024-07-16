import { Hono } from 'hono'

const app = new Hono()

app.
  get('/', (c) => {
  return c.text('Hello Hono!')
})
  .get("/api", async(c) =>{
  const headers = c.req.header()
  return c.json({headers})
})

export default app
