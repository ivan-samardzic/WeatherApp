import React from 'react'

export default React.createContext({
    cities: [
        {
            "coord": {
                "lon": 16.4392,
                "lat": 43.5089
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 7,
                "feels_like": -2.92,
                "temp_min": 7,
                "temp_max": 7,
                "pressure": 1004,
                "humidity": 39
            },
            "visibility": 10000,
            "wind": {
                "speed": 10.29,
                "deg": 40
            },
            "clouds": {
                "all": 0
            },
            "dt": 1616349020,
            "sys": {
                "type": 1,
                "id": 6387,
                "country": "HR",
                "sunrise": 1616302540,
                "sunset": 1616346425
            },
            "timezone": 3600,
            "id": 3190261,
            "name": "Split",
            "cod": 200
        },
        {
            "coord": {
                "lon": -0.1257,
                "lat": 51.5085
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 9.5,
                "feels_like": 5.72,
                "temp_min": 8.89,
                "temp_max": 10.56,
                "pressure": 1029,
                "humidity": 61
            },
            "visibility": 10000,
            "wind": {
                "speed": 3.09,
                "deg": 0
            },
            "clouds": {
                "all": 75
            },
            "dt": 1616348718,
            "sys": {
                "type": 1,
                "id": 1414,
                "country": "GB",
                "sunrise": 1616306442,
                "sunset": 1616350473
            },
            "timezone": 0,
            "id": 2643743,
            "name": "London",
            "cod": 200
        },
        {
            "coord": {
                "lon": -2.9779,
                "lat": 53.4106
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 8.01,
                "feels_like": 3.81,
                "temp_min": 7.22,
                "temp_max": 9,
                "pressure": 1029,
                "humidity": 76
            },
            "visibility": 10000,
            "wind": {
                "speed": 4.12,
                "deg": 300
            },
            "clouds": {
                "all": 75
            },
            "dt": 1616349061,
            "sys": {
                "type": 1,
                "id": 1399,
                "country": "GB",
                "sunrise": 1616307104,
                "sunset": 1616351179
            },
            "timezone": 0,
            "id": 2644210,
            "name": "Liverpool",
            "cod": 200
        },
        {
            "coord": {
                "lon": -74.006,
                "lat": 40.7143
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 15.1,
                "feels_like": 11.15,
                "temp_min": 12.78,
                "temp_max": 17.22,
                "pressure": 1035,
                "humidity": 20
            },
            "visibility": 10000,
            "wind": {
                "speed": 1.54,
                "deg": 260
            },
            "clouds": {
                "all": 1
            },
            "dt": 1616348632,
            "sys": {
                "type": 1,
                "id": 4610,
                "country": "US",
                "sunrise": 1616324240,
                "sunset": 1616368130
            },
            "timezone": -14400,
            "id": 5128581,
            "name": "New York",
            "cod": 200
        }
    ],
    addCity: city => {},
    deleteCity: deletedCity => {}
})