type Place = {
  fsq_id: string
  categories: {
    id: number
    name: string
    short_name: string
    plural_name: string
    icon: {
      prefix: string
      suffix: string
    }
  }[]
  chains: {
    id: string
    name: string
  }[]
  closed_bucket: string
  distance: number
  geocodes: {
    main: {
      latitude: number
      longitude: number
    }
    roof?: {
      latitude: number
      longitude: number
    }
  }
  link: string
  location: {
    address?: string
    census_block: string
    country: string
    dma: string
    formatted_address: string
    locality: string
    po_box?: string
    cross_street?: string
    postcode: string
    region: string
  }
  name: string
  related_places: Record<string, unknown>
  timezone: string
}

type Context = {
  geo_bounds: {
    circle: {
      center: {
        latitude: number
        longitude: number
      }
      radius: number
    }
  }
}

type PlacesResponse = {
  results: Place[]
  context: Context
}

export type { PlacesResponse, Place }