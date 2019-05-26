# Route Tree
This document, documents the routes for this Single Page Application.

## Notes
Everything not listed but clickable is either an action trigger or modal trigger.  
Search term must be URL encoded, so that is is bookmarkable.  
If [Default] is added in front of a route part, it means it is the default child route of its parent route.

## Routes
- login
- signup
- about
- :userID
    - [Default] notes
        - [Default] all
        - :noteID
    - contact-us
    - search
        - [Default] ""
        - /:search-term

## Legend for route params
- userID
    - This is the unique identifier for each user
    - Created by simply taking the user's email address' front portion
        - E.g.  jaimeloeuf@gmail.com  ==  jaimeloeuf
- noteID
    - ID for the note that belongs to the user
    - Unique identifier across all notes of each user.
    - ID once created will never be changed
- search-term


## List of URLs:
- /:userID
- /:userID/notes/all
- /:userID/notes/:noteID
- /:userID
- /:userID
- /:userID