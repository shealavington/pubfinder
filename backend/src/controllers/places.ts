import { Request, Response } from "express"
import { type AxiosRequestConfig } from 'axios'

import foursquareApi from "../utils/foursquareApi"
import { PlacesResponse } from "../types/foursquareApiResponses"

export default (req: Request, res: Response): void => {

  const TWO_KILOMETERS: number = 2000

  // TODO: Validate inputs
  const options: AxiosRequestConfig = {
    params: {
      query: req.query.query,
      ll: `${req.query.lat},${req.query.lng}`,
      radius: TWO_KILOMETERS
    }
  }

  foursquareApi(process.env.FOURSQUARE_API_KEY ?? 'UNKNOWN')
    .get<PlacesResponse>('/places/search', options)
    .then(function (response): void {
      res.send(response.data)
    })
    .catch(function (error): void {
      res.send({ message: 'Error' })
    })

}
