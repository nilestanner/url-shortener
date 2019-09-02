# Niles Tanner's link shortener

# Usage

You can use the [site directly](http://link.nilestanner.com/)
*or*
Call the API
```json
// POST
// https://link.nilestanner.com/api/item
{
   "originalUrl":"https://nilestanner.com"
}
```

Response:
```json
{
    "_id": "5d6da457a33b8d652c1379c5",
    "originalUrl": "https://nilestanner.com",
    "shortUrl": "https://link.nilestanner.com/p4VWW-Vym",
    "urlCode": "p4VWW-Vym",
    "updatedAt": "2019-09-02T23:23:03.458Z",
    "createdAt": "2019-09-02T23:23:03.544Z",
    "__v": 0
}
```

The shortUrl is the new link!