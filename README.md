## Project Name

stream-it

https://stream-it.netlify.app/

## Project Description

stream-it is an Airtable and react app to suggest favorite movies and shows on different streaming services so users can watch it and also where a user can be able to post thier favorite movies and where in the stream it is avaialable and also rate the movie or the show how based on how they feel about it.

## Wireframes

[mobile Wireframe](https://i.imgur.com/2geivQb.png)

[Desktop Wireframe](https://i.imgur.com/NKDec6R.png) 

## Component Hierarchy

[Component Heirarchy](https://i.imgur.com/JJVkw2I.png)

## API and Data Sample

data sample from Airtable API

```json
{
    "records": [
        {
            "id": "recfcILO2Gl6Jduor",
            "fields": {
                "streaming_on": "HBO-MAX",
                "genre": "Drama/Historical Drama",
                "title": "Judas and the Black Messiah",
                "description": "Offered a plea deal by the FBI, William O'Neal infiltrates the Illinois chapter of the Black Panther Party to gather intelligence on Chairman Fred Ham...",
                "release_year": "2021",
                "rating": "9.6"
            },
            "createdTime": "2021-02-15T18:35:12.000Z"
        },
        {
            "id": "recO1jJwcEVSpOeiq",
            "fields": {
                "streaming_on": "HBO-MAX",
                "genre": "TV Drama",
                "title": "Lovecraft Country ",
                "description": "Anchored by Jurnee Smollett-Bell and Jonathan Majors' heroic performances, Misha Green's Lovecraft Country is a thrilling take on Lovecraftian lore th...",
                "release_year": "2020",
                "rating": "8.8"
            },
            "createdTime": "2021-02-15T18:45:11.000Z"
        },
        {
            "id": "recy7V9x2WybW1Na5",
            "fields": {
                "streaming_on": "HBO-MAX",
                "genre": "Documentary",
                "title": "Black Art: In the Absence of Light",
                "description": "Inspired by the late David Driskell's landmark 1976 exhibition, \"Two Centuries of Black American Art,\" the documentary Black Art: In the Absence of Li...",
                "release_year": "2021",
                "rating": "10"
            },
            "createdTime": "2021-02-15T18:48:16.000Z"
        }
    ],
    "offset": "recy7V9x2WybW1Na5"
}
```

### MVP/PostMVP

#### MVP 
- create a functional homepage with clickable buttons and route path to redirect to movie-info
- Render movie data from Airtable
- Add Form component for user to create a movie they suggest and the streaming channel
- work on CSS to style the page by focusing on flexbox or CSS grid

#### PostMVP  
- Add more animation and Carousel for local storage movies
- Add secondary API to render data for different Books that's translated into movies.
- Add buttons or list to render by their streaming service
- Use local storage to save favorites

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|February 15| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|February 16| Project Approval | complete
|February 17| Finished components and clickable events | complete
|February 18| Work on style and layout | complete
|February 19| MVP  | complete
|February 20| Post-MVPs | Incomplete
|February 23| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating data base in Airtable| H | 1.5hrs| 2hrs |  |
| Nav Component | H | 2hrs|  1hrs|  |
| Home Component | H | 3hrs| 2hrs |  |
| Movies Component | H | 3hrs|  2hrs|  |
| Movie-Info Component | H | 3hrs| 2hrs |  |
| Form Component | H | 3hrs|  2hrs|  |
| Search function | H | 3hrs|  4hrs|  |
| Figuring out linking and route Component | H | 3hrs| 2hrs |  |
| Basic CSS for each component | H | 3hrs| 3hrs |  |
| Meida Query for diferrent screen size | H | 3hrs|  |  |
| Post MVP Book Component | H | 3hrs|  |  |
| Post MVP local Storage | H | 3hrs|  |  |
| Post MVP Component | H | 3hrs|  |  |
| Post MVP styling  | H | 3hrs|  |  |
| Post MVP animation and Carousel | H | 3hrs|  |  |
| Total | H | 39.5hrs | 20hrs |  |

### Strengths:

I believe getting data on the page won't be hard since I have had that practice so many times.

### Weaknesses:

My weakness will be I am not sure how to render data based on their streaming service which is my intial idea, but I will still go for it and figure something out, if not possible I will go a different way and still render my data.

### Opportunities:

If I finish rendering data as I want it on the page and I am conifident that will give me the oppoturnity to focus on the styling and my post MVP so I can have a good user interface.

### Threats:

My other threat is figuring out how to use react-bootsrap and styling the page as I want it to be.