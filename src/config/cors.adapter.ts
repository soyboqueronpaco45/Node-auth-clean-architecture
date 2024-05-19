import cors from 'cors'
import { envs } from "./envs"

const { ACCEPTED_ORIGINS} = envs

export const corsAdapter = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {
      if (acceptedOrigins.includes(origin!)) {
        return callback(null, true)
      }

      if (!origin) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    }
  })