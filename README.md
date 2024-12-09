This repository implements Assignment 3 for COMP 3612 - Web Development for Computer Science

Using Node.js, this implementation provides API functionality with several endpoints (as listed below) that shares data from the 
.json files stored in the repository, allowing for retrieval of specific data through customizable paths that are 
case insensitive. The implementation also offers some basic error handling for input. 
This is made possible using glitch.com as the hosting platform.



**Test Links**

DOMAIN: https://assign3forwebdevelopment.glitch.me

[/api/circuits](https://assign3forwebdevelopment.glitch.me/api/circuits) - returns all circuits

[/api/circuits/1](https://assign3forwebdevelopment.glitch.me/api/circuits/1) - returns the circuit details of specific id

[/api/constructors](https://assign3forwebdevelopment.glitch.me/api/constructors) - returns all constructors

[/api/constructors/mclaren](https://assign3forwebdevelopment.glitch.me/api/constructors/mclaren) - returns the constructor details of the given reference

[/api/coNSTruCTors/mclaren](https://assign3forwebdevelopment.glitch.me/api/coNSTruCTors/mclaren) - checks case insensitivity of the previous test

[/api/constructors/javascript](https://assign3forwebdevelopment.glitch.me/api/constructors/javascript) - checks unfound constructor ref error-handling

[/api/constructorResults/mclaren/2023](https://assign3forwebdevelopment.glitch.me/api/constructorResults/mclaren/2023) - checks results for a given ref and season

[/api/constructorResults/MERCEDES/2020](https://assign3forwebdevelopment.glitch.me/api/constructorResults/MERCEDES/2020) -checks case insensitivity and correctness of previous test

[/api/constructorResults/mclaren/2040](https://assign3forwebdevelopment.glitch.me/api/constructorResults/mclaren/2040) - checks error-handling for invalid year

[/api/constructorResults/comp3612/2023](https://assign3forwebdevelopment.glitch.me/api/constructorResults/comp3612/2023) - checks error-handling for invalid constructor reference

[/api/drivers](https://assign3forwebdevelopment.glitch.me/api/drivers) - returns all drivers

[/api/drivers/hamilton](https://assign3forwebdevelopment.glitch.me/api/drivers/hamilton) - returns specific driver details using reference

[/api/drivers/HAMilton](https://assign3forwebdevelopment.glitch.me/api/drivers/HAMilton) - checks case insensitivity of previous test

[/api/drivers/randy](https://assign3forwebdevelopment.glitch.me/api/drivers/randy) - checks error handling for unfound driver reference

[/api/driverResults/piastri/2023](https://assign3forwebdevelopment.glitch.me/api/driverResults/piastri/2023) - returns results for a specific driver reference in a specific season (this appears to be a mistake on the assignment document as "piastre")
  
[/api/driverResults/piastri/2002](https://assign3forwebdevelopment.glitch.me/api/driverResults/piastri/2002) - checks error-handling for invalid year

[/api/races/season/2023](https://assign3forwebdevelopment.glitch.me/api/races/season/2023) - returns all races in a given season

[/api/races/seasoning/2023](https://assign3forwebdevelopment.glitch.me/api/races/seasoning/2023) - checks error-handling for invalid pathname

[/api/races/season/2032](https://assign3forwebdevelopment.glitch.me/api/races/season/2032) - checks error-handling for invalid season

[/api/results/race/1100](https://assign3forwebdevelopment.glitch.me/api/results/race/1100) - returns a race resulsts for a specific season

[/api/results/race/1756348576](https://assign3forwebdevelopment.glitch.me/api/results/race/1756348576) - checks error-handling for invalid id

[/api/results/season/2023](https://assign3forwebdevelopment.glitch.me/api/results/season/2023) - returns all race results from a specified season

[/api/results/season/2034](https://assign3forwebdevelopment.glitch.me/api/results/season/2034) - checks error-handling for invalid season
