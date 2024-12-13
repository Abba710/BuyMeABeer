import express, { Request, Response, Application } from 'express'
import env from '@/helpers/env'

// Create express app
export default function runApp(): Application {
  const app: Application = express()
  const PORT = env.PORT

  app.use(express.json())

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
  })

  app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`)
  })

  return app
}
