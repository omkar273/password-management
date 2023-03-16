<!-- userSchema -->
----------------------------------------
| key            | data-type  |
| :------------- | :--------- |
|                |            |
| _id            | string     |
| firstName      | string     |
| lastName       | string     |
| email          | string     |
| bio            | string     |
| password       | string     |
| posts          | array      |
| profilePicPath | string ref |
| location       | string     |
| occuptaion     | string     |
| viewed profile | number     |
| impressions    | number     |


<!-- postSchema -->
| keys                                 | data-type  |
| :----------------------------------- | :--------- |
|                                      |            |
| _id    (postId)                      | string     |
| userId (owner id who posted the pic) | string ref |
| firstName                            | string     |
| lastName                             | string     |
| profilePicPath                       | string ref |
| postPicturePath                      | string ref |
| likes                                | Map        |
| comments                             | Array      |



<!-- friendSchema -->
----------------------------------------
| key            | data-type  |
| :------------- | :--------: |
|                |            |
| _id            |   string   |
| firstName      |   string   |
| lastName       |   string   |
| profilePicPath | string ref |


















