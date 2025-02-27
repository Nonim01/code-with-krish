# JavaScript API for Number Operations

## Description
This API provides various numerical operations, including:
- Finding the minimum of two numbers
- Calculating the average of a set of numbers
- Sorting an array of numbers in ascending or descending order
- Counting occurrences of a specific value in an array

## How to Run

### Prerequisites
Ensure you have **Node.js** installed on your system.

### Steps to Run
1. Clone the repository or save the JavaScript file.
2. Install **Express.js** if not already installed:
   ```sh
   npm install express
   ```
3. Create a server file (e.g., `server.js`) and import the provided functions.
4. Start the server:
   ```sh
   node server.js
   ```
5. Use an API testing tool like **Postman** or a browser to make requests to the endpoints.

## API Endpoints

### 1. Get Minimum of Two Numbers
**Endpoint:** `/getMinoraxNumber`  
**Method:** `GET`  
**Query Parameters:**
- `num1`: First number
- `num2`: Second number

**Example Request:**
```
GET /getMinoraxNumber?num1=10&num2=20
```

**Response:**
```json
{
  "min": 10
}
```

### 2. Get Average of Numbers
**Endpoint:** `/getAverageNumber`  
**Method:** `GET`  
**Query Parameters:**
- `numbers`: Comma-separated list of numbers

**Example Request:**
```
GET /getAverageNumber?numbers=10,20,30,40
```

**Response:**
```json
{
  "avg": 25
}
```

### 3. Sort Numbers
**Endpoint:** `/getSortedNumbers`  
**Method:** `GET`  
**Query Parameters:**
- `numbers`: Comma-separated list of numbers
- `type`: Sort order (`asc` for ascending, `dec` for descending)

**Example Request:**
```
GET /getSortedNumbers?numbers=5,3,8,1&type=asc
```

**Response:**
```json
{
  "sortedNumbers": [1, 3, 5, 8]
}
```

### 4. Count Occurrences
**Endpoint:** `/getCountOccurrences`  
**Method:** `GET`  
**Query Parameters:**
- `numbers`: Comma-separated list of values
- `search`: Value to count

**Example Request:**
```
GET /getCountOccurrences?numbers=a,b,a,c,a&search=a
```

**Response:**
```json
{
  "count": 3
}
```

## References
- [Stack Overflow: str.split().map() vs arr.map()](https://stackoverflow.com/questions/34536540/str-split-map-vs-arr-map-for-fixed-input)
- [W3Schools: JavaScript String split()](https://www.w3schools.com/jsref/jsref_split.asp)
- [FreeCodeCamp Forum: Using the reduce() method](https://forum.freecodecamp.org/t/using-the-reduce-method/658431)
- [Stack Overflow: Sorting an array alphabetically](https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript)

-[dev.to](https://dev.to/bekmurzintimur/how-arrayprototypesort-works-3kcn, https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-25.php)