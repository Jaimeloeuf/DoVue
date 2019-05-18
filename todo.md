# Todo list for DoVue project
## High-priority  (Hotfixe issues and bug fixes needed)
- Create 1 common nav bar. But it displays the routes or links conditionally. So it only displays the Notes route when the user is logged in and only displays the Login and signup route when the user is not logged in.
    - All the routes will be labelled either public only, private only or both.
    - If un authenticated and navigated to private only, then redirect to main public page
    - Else authenticated and navigated to public only, then redirect to main private page
    - Else navigated to a route that both==true, then just continue without doing anything.
- Add a detector for user's internet status, pause the app when the user is offline for now before the P.W.A and local data usage system is built.
- Create 404 pages for unknown routes
- Move custom directives into a folder and import them instead, once there a few custom directives
- Create a check to "kill" the app if firebase fails to init and add a notification item to signal firebase failure
- Fix the notes' multi router system.
- Change the margin of the inputs for signup and login, so that they scale better

## Low-priority  (Future features)
- Update the default page shown while the App is loading
- Implement the backend service away from firebase
- Make the app into a P.W.A
- Implement a Quote of the day section.
    - Too many people use todo list to write down todo items that they want to do but always procrastinate to do. Thus a Quote of the day is suggested to provide motivational quotes on every sign in to try and movtivate users to complete that todo lists.

## Others  (Misc. items to do once completed above todo lists)


### Notes for the notes view
Use a streaming library to stream changes to and from the server
Use a pub-sub pattern, so that all app instances of the same users are all clients
The server is the broker. Change on a single client will be broadcasted to the
rest using the broker.
