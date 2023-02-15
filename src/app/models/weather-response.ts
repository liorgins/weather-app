
export interface WeatherItem {
    dt: number,
    temp: number,
    humidity: number,
    weather: {
        id: number,
        main: string,
        description: string
    }
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