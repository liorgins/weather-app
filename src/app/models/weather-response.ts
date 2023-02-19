

export interface Wather {
    id: number,
    main: string,
    description: string
    icon: string
}

export interface WeatherItem {
    dt: number,
    main: {
        temp: number,
    }
    humidity: number,
    weather: Wather[]
}

export interface WeatherData {
    cod: string,
    message: number,
    cnt: number,
    list: WeatherItem[],
    city: {
        id: number,
        name: string,
        country: string
    }
}