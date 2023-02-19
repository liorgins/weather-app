import { Component, OnInit } from '@angular/core';
import { SavedLocations } from 'src/app/models/saved-locations';
import { LocalstorageService } from 'src/app/services/localstorage.service';



const mockLocations = [
  {
    "list": [
      {
        "dt": 1676624400,
        "main": {
          "temp": 15.87,
          "feels_like": 14.84,
          "temp_min": 14.94,
          "temp_max": 15.87,
          "pressure": 1028,
          "sea_level": 1028,
          "grnd_level": 1021,
          "humidity": 51,
          "temp_kf": 0.93
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.28,
          "deg": 6,
          "gust": 2.98
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-02-17 09:00:00"
      },
      {
        "dt": 1676635200,
        "main": {
          "temp": 15.95,
          "feels_like": 14.91,
          "temp_min": 15.95,
          "temp_max": 16.11,
          "pressure": 1027,
          "sea_level": 1027,
          "grnd_level": 1019,
          "humidity": 50,
          "temp_kf": -0.16
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 4.59,
          "deg": 342,
          "gust": 3.59
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-02-17 12:00:00"
      },
      {
        "dt": 1676646000,
        "main": {
          "temp": 14.39,
          "feels_like": 13.43,
          "temp_min": 13.65,
          "temp_max": 14.39,
          "pressure": 1027,
          "sea_level": 1027,
          "grnd_level": 1020,
          "humidity": 59,
          "temp_kf": 0.74
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 5.4,
          "deg": 356,
          "gust": 6.96
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-02-17 15:00:00"
      },
      {
        "dt": 1676656800,
        "main": {
          "temp": 11.76,
          "feels_like": 10.77,
          "temp_min": 11.76,
          "temp_max": 11.76,
          "pressure": 1028,
          "sea_level": 1028,
          "grnd_level": 1021,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 3.46,
          "deg": 22,
          "gust": 4.09
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-02-17 18:00:00"
      },
      {
        "dt": 1676667600,
        "main": {
          "temp": 10.98,
          "feels_like": 9.91,
          "temp_min": 10.98,
          "temp_max": 10.98,
          "pressure": 1027,
          "sea_level": 1027,
          "grnd_level": 1021,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.16,
          "deg": 25,
          "gust": 3.61
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-02-17 21:00:00"
      }
    ],
    "city": {
      "id": 294514,
      "name": "Kfar Saba",
      "coord": {
        "lat": 32.175,
        "lon": 34.9069
      },
      "country": "IL",
      "population": 80773,
      "timezone": 7200,
      "sunrise": 1676607695,
      "sunset": 1676647652
    }
  },
  {
    "list": [
      {
        "dt": 1676624400,
        "main": {
          "temp": 11.4,
          "feels_like": 10.82,
          "temp_min": 11.31,
          "temp_max": 11.4,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1017,
          "humidity": 85,
          "temp_kf": 0.09
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 40
        },
        "wind": {
          "speed": 7.14,
          "deg": 249,
          "gust": 15.31
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-02-17 09:00:00"
      },
      {
        "dt": 1676635200,
        "main": {
          "temp": 12.19,
          "feels_like": 11.58,
          "temp_min": 12.19,
          "temp_max": 13.78,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1018,
          "humidity": 81,
          "temp_kf": -1.59
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 60
        },
        "wind": {
          "speed": 7.08,
          "deg": 266,
          "gust": 14.43
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-02-17 12:00:00"
      },
      {
        "dt": 1676646000,
        "main": {
          "temp": 12.8,
          "feels_like": 12.2,
          "temp_min": 12.8,
          "temp_max": 13.5,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1019,
          "humidity": 79,
          "temp_kf": -0.7
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 80
        },
        "wind": {
          "speed": 5.24,
          "deg": 256,
          "gust": 11.03
        },
        "visibility": 10000,
        "pop": 0.14,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-02-17 15:00:00"
      },
      {
        "dt": 1676656800,
        "main": {
          "temp": 11.99,
          "feels_like": 11.46,
          "temp_min": 11.99,
          "temp_max": 11.99,
          "pressure": 1024,
          "sea_level": 1024,
          "grnd_level": 1021,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 4.34,
          "deg": 255,
          "gust": 9.38
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-02-17 18:00:00"
      },
      {
        "dt": 1676667600,
        "main": {
          "temp": 11.28,
          "feels_like": 10.81,
          "temp_min": 11.28,
          "temp_max": 11.28,
          "pressure": 1025,
          "sea_level": 1025,
          "grnd_level": 1021,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 4.29,
          "deg": 240,
          "gust": 10.77
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-02-17 21:00:00"
      }
    ],
    "city": {
      "id": 2643743,
      "name": "London",
      "coord": {
        "lat": 51.5085,
        "lon": -0.1257
      },
      "country": "GB",
      "population": 1000000,
      "timezone": 0,
      "sunrise": 1676617892,
      "sunset": 1676654270
    }
  },
  {
    "list": [
      {
          "dt": 1676624400,
          "main": {
              "temp": 11.4,
              "feels_like": 10.82,
              "temp_min": 11.31,
              "temp_max": 11.4,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1017,
              "humidity": 85,
              "temp_kf": 0.09
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 40
          },
          "wind": {
              "speed": 7.14,
              "deg": 249,
              "gust": 15.31
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2023-02-17 09:00:00"
      },
      {
          "dt": 1676635200,
          "main": {
              "temp": 12.19,
              "feels_like": 11.58,
              "temp_min": 12.19,
              "temp_max": 13.78,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1018,
              "humidity": 81,
              "temp_kf": -1.59
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 60
          },
          "wind": {
              "speed": 7.08,
              "deg": 266,
              "gust": 14.43
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2023-02-17 12:00:00"
      },
      {
          "dt": 1676646000,
          "main": {
              "temp": 12.8,
              "feels_like": 12.2,
              "temp_min": 12.8,
              "temp_max": 13.5,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1019,
              "humidity": 79,
              "temp_kf": -0.7
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 80
          },
          "wind": {
              "speed": 5.24,
              "deg": 256,
              "gust": 11.03
          },
          "visibility": 10000,
          "pop": 0.14,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2023-02-17 15:00:00"
      },
      {
          "dt": 1676656800,
          "main": {
              "temp": 11.99,
              "feels_like": 11.46,
              "temp_min": 11.99,
              "temp_max": 11.99,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1021,
              "humidity": 85,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.34,
              "deg": 255,
              "gust": 9.38
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2023-02-17 18:00:00"
      },
      {
          "dt": 1676667600,
          "main": {
              "temp": 11.28,
              "feels_like": 10.81,
              "temp_min": 11.28,
              "temp_max": 11.28,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1021,
              "humidity": 90,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.29,
              "deg": 240,
              "gust": 10.77
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2023-02-17 21:00:00"
      }
  ],
  "city": {
      "id": 2643743,
      "name": "London",
      "coord": {
          "lat": 51.5085,
          "lon": -0.1257
      },
      "country": "GB",
      "population": 1000000,
      "timezone": 0,
      "sunrise": 1676617892,
      "sunset": 1676654270
  }
  },
  {
    "list": [
      {
          "dt": 1676624400,
          "main": {
              "temp": 11.4,
              "feels_like": 10.82,
              "temp_min": 11.31,
              "temp_max": 11.4,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1017,
              "humidity": 85,
              "temp_kf": 0.09
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 40
          },
          "wind": {
              "speed": 7.14,
              "deg": 249,
              "gust": 15.31
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2023-02-17 09:00:00"
      },
      {
          "dt": 1676635200,
          "main": {
              "temp": 12.19,
              "feels_like": 11.58,
              "temp_min": 12.19,
              "temp_max": 13.78,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1018,
              "humidity": 81,
              "temp_kf": -1.59
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 60
          },
          "wind": {
              "speed": 7.08,
              "deg": 266,
              "gust": 14.43
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2023-02-17 12:00:00"
      },
      {
          "dt": 1676646000,
          "main": {
              "temp": 12.8,
              "feels_like": 12.2,
              "temp_min": 12.8,
              "temp_max": 13.5,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1019,
              "humidity": 79,
              "temp_kf": -0.7
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 80
          },
          "wind": {
              "speed": 5.24,
              "deg": 256,
              "gust": 11.03
          },
          "visibility": 10000,
          "pop": 0.14,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2023-02-17 15:00:00"
      },
      {
          "dt": 1676656800,
          "main": {
              "temp": 11.99,
              "feels_like": 11.46,
              "temp_min": 11.99,
              "temp_max": 11.99,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1021,
              "humidity": 85,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.34,
              "deg": 255,
              "gust": 9.38
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2023-02-17 18:00:00"
      },
      {
          "dt": 1676667600,
          "main": {
              "temp": 11.28,
              "feels_like": 10.81,
              "temp_min": 11.28,
              "temp_max": 11.28,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1021,
              "humidity": 90,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.29,
              "deg": 240,
              "gust": 10.77
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2023-02-17 21:00:00"
      }
  ],
  "city": {
      "id": 2643743,
      "name": "London",
      "coord": {
          "lat": 51.5085,
          "lon": -0.1257
      },
      "country": "GB",
      "population": 1000000,
      "timezone": 0,
      "sunrise": 1676617892,
      "sunset": 1676654270
  }
  }
]
@Component({
  selector: 'app-your-locations',
  templateUrl: './your-locations.component.html',
  styleUrls: ['./your-locations.component.scss']
})
export class YourLocationsComponent implements OnInit {

  savedLocations!: SavedLocations;

  constructor (private localstorageService: LocalstorageService) {}

  ngOnInit(): void {
    this.savedLocations = this.localstorageService.getSavedLocations();
  }
  
  

}
