# Bambu Challenge

_Author: Felicia Amy H_

## REST API

**Root URL** : https://us-central1-bambuchallenge.cloudfunctions.net/app

#### **GET** /healthcheck

Give you the uptime of the hosting server
**Example output**:

    {
        "uptime": 108.665
    }

### **GET** /people-like-you

**Params:**

    age: Integer
    latitude: Float
    longitude: Float
    monthlyIncome: Integer
    experienced: Boolean

**Example request:**

    /people-like-you?age=20&latitude=40.71667&longitude=19.56667&monthlyIncome=5500&experienced=false

**Example output**:

    {
        "peopleLikeYou": [
            {
                "name": "Gwennie",
                "age": 21,
                "latitude": 41.9662209,
                "longitude": 23.0756589,
                "monthlyIncome": 5213,
                "experienced": false,
                "score": 0.74
            },
            {
                "name": "Jolyn",
                "age": 20,
                "latitude": 42.0288112,
                "longitude": 20.9969544,
                "monthlyIncome": 5074,
                "experienced": true,
                "score": 0.76
            },
            {
                "name": "Glen",
                "age": 25,
                "latitude": 40.2740679,
                "longitude": 22.5416683,
                "monthlyIncome": 5381,
                "experienced": true,
                "score": 0.73
            },
            {
                "name": "Orran",
                "age": 21,
                "latitude": 41.96571,
                "longitude": 22.7708273,
                "monthlyIncome": 5290,
                "experienced": false,
                "score": 0.75
            },
            {
                "name": "Neils",
                "age": 25,
                "latitude": 44.4410356,
                "longitude": 18.1173229,
                "monthlyIncome": 5167,
                "experienced": false,
                "score": 0.72
            },
            {
                "name": "Arlette",
                "age": 22,
                "latitude": 44.2682727,
                "longitude": 19.8906547,
                "monthlyIncome": 5999,
                "experienced": false,
                "score": 0.75
            },
            {
                "name": "Dex",
                "age": 21,
                "latitude": 44.9794968,
                "longitude": 19.6209662,
                "monthlyIncome": 5760,
                "experienced": false,
                "score": 0.76
            },
            {
                "name": "Jeth",
                "age": 18,
                "latitude": 45.6910361,
                "longitude": 20.5792392,
                "monthlyIncome": 5088,
                "experienced": false,
                "score": 0.73
            },
            {
                "name": "Bert",
                "age": 24,
                "latitude": 44.8766183,
                "longitude": 20.0971774,
                "monthlyIncome": 5291,
                "experienced": true,
                "score": 0.74
            },
            {
                "name": "Seumas",
                "age": 23,
                "latitude": 42.0384767,
                "longitude": 21.5739781,
                "monthlyIncome": 5266,
                "experienced": false,
                "score": 0.74
            }
        ]
    }

## Extra Feature

Added caching for the endpoint people-like-you
