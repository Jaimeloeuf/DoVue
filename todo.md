# Todo list for DoVue project
## High-priority  (Hotfixe issues and bug fixes needed)
- Add a leave page alert, if user tries to leave page even though the note is not in sync yet
    - Currently there is a basic version built into index.html but its pretty bad, to replace it with vue specific method
    - [Look into in-route-object gaurds](https://router.vuejs.org/guide/advanced/navigation-guards.html#per-route-guard)
- Change all the imports to use relative imports with '@' as alias for 'src/' instead of using './' based relative paths
- Keep the component on the default router-view in the notes view there, even when the child routes with the editor modal is called
    - Essentially how to open a child route without changing the component set by the parent route.
    - Upon clicking the note, navigate via routes, but router-outlet will be in the notes view component and thus the AllNotes wont be destroyed
- Tracking user's auth status and related tasks
    - Store user details into the vuex store when user is logged in
    - Create a easy way to attach event handlers for when there is a auth status change.
    - The current one that firebase gives is okay but slightly clunky.
    - Add the user's username into vuex store and have a event handler that can change that automatically based on above implementation
- Auto fill details in private contact us page with the user details stored in vuex
- Create a navigation gaurd to make sure user only navigates with their own ":userID" routes.
- Create a reset password view component
- Fix the navbar repeated re-rendering bug
- Component reuse
    - Using lifecycle hook logging, prevent notes component from being created/destroyed on every navigation.
    - Look into the route reuse strategy
    - Although I am using router view for the navbar already, I think it still needs to do component reuse..
- Navigation with Modals
    - CHange the way navigation for modal is made. Because now notes is changed to notes all. Must navigate back to the last used notes view. However if none, then go back to notes/all.
    - Fix the router thing to prevent the go(-1) still possible to go to other sites. Make sure it does not navigate out of the app too.
- removed vue/ui from dependency list if not gonna use it
- Make it so that the other module in the other router-view is left as it is and only the specified router-view is updated.
    - Refer to the todo note in notesRoutes.js module
- Populate settings view component and build the firebase CF for those too.
- Build the help and contact views
- Move custom directives into a folder and import them instead, once there a few custom directives
- Create a check to "kill" the app if firebase fails to init and add a notification item to signal firebase failure
- Add docs for all the places that use router.replace --> to comment that replace means no nav history recorded.
- Create the side bar just like what GOogle Keep have.
- Lazy loading of notes
- Plan out the database schema.
- Integrate vue n firebase, look into the GH repo I stared for the firebase-counter
- Plan and build Premium features
    - Add a exit plan for users, so if they want to exit out of the plan, they won't lose all their data
        - Basically a way for users to download their notes.



## Backlog / Low-priority (Future features and changes)
- Add global keypress tracker, to enable use of shortcuts
    - Each time user presses a key that we want base on a simple map, fire an event corresponding with that key
    - Catch the event in the event bus or something
    - Check the current route the user is on, and based on that route, use the abstract tree to figure out if the key has a valid use
        - If yes, fire off the real event to trigger an action such as focusing on the input view.
        - Else, just ignore the key press
- Create 404 pages for unknown routes when user is not logged in instead of having a auto-redirect to the main private and public routes as defined in the router object. Include a, redirect to /about page in the 404 page.
    - This is so to let users know that they navigated to a missing route, instead of being auto-redirected away without any explaination.
- Self changing navbar concept
    - Concept where there is only 1 navbar component.
        - But that this navbar can toggle its items based on the user's current auth status. (Logged in or out)
        - Thus removing the need to have a routed navbar component
    - To build and experiment with a self changing nav bar built with v-if to toggle between private and public mode, before deciding if this should replace the current 2 navbar system I have. Where I simply include the navbar component, without needing to use the router-view.
    - There will be a watcher for the user's current auth state stored inside the vuex store.
- Look at Keep with CSS inspector to see how they make the notes be grouped tgt like blocks
- Give user a full focus zen mode.
- Where the Editor opens up fully instead of being just a modal. The last seen notes view will also be hidden.
- Create a notif component at the lower left of the page to reflect user actions, such as when you deleted a note.
    - Give options to user to undo the action or whatever
    - Focus on the component upon it appears after an action and wait to see if user press esc key
    - If user pressed Esc key or If nothing happens for 5 seconds, component to auto disappear.
- Optimize the router
    - Currently for every navigation the router's beforeEach handler will call the firebase package to check the Auth status of the current user, which is heavy and not very well optimized. Use the firebase auth status event handler or observer to update a variable in vuex for easy reads.
- Package this into a desktop app using Electron JS
- Create a spinning wheel component/modal that will pop up when login button is clicked. To give visual cue about app load status.
- Build a public dovue status page. To see the health and status of the site and if it is down.
- Try integration with Nuxt.JS
- Update the default page shown while the App is loading
- Add the app's version number onto the about page.
- Add terms of use and a user agreement tickbox as part of the signup page
- Migrate away from firebase
- Package app into a P.W.A
    - Add user's internet status detector, pause app when user is offline, before the P.W.A and local data usage system is built.
    - After PWA is built, when user is offline, notify user that data created is stored in local storage
- Implement a Quote of the day section.
    - Too many people use todo list to write down todo items that they want to do but always procrastinate to do. Thus a Quote of the day is suggested to provide motivational quotes on every sign in to try and movtivate users to complete that todo lists.
- Add a grab text from image feature in the future [link](https://www.youtube.com/watch?v=jezXkZ26aPM)


## Todos for Migration away from firebase
- For the login, like how google did with keep,
   - they redirect to the accounts.google.com directory to do the login if user not logged in
   - After login, the cookie is sent back to be set. The thing is that since the keep runs on the google.com sub-domain just like accounts.google.com
   - the cookie can be set from the "so called other domain"
   - After logged in with valid cookie, then run the webapp and populate data with the new auth token against the DB
   - Regarding the login sub-domain thingy, see if firebase app can do subdomains? If cannot, can the domains we attach ourselves have subdomain?
   - Maybe explore the Firebase Auth UI components I starred on GH
- Build the storage system with git built in for unlimited versioning.
If you want people to keep their notes in it, it's going to have to advertise stability and longevity. Ruthlessly cut dependencies/requirements and avoid using features that may change under you as time goes on. Use a simple data-store built with common tech (json, sqlite, straight text files, etc) so people can get to their data even if your code disappears off the face of the Earth one day.
Design the API before touching any of the code - that's the only place where "without pulling the entire DB at page load" can happen. Build the backend in something with a safe, stable standard lib or core ecosystem, python or common lisp or the like.
- Look into the competitors
   - Google Keep
   - Microsoft To Do
   - [standard notes](https://app.standardnotes.org/)  &&  [Longevity](https://standardnotes.org/longevity)
   - Evernote
   - Wunderlist


## Other Todos (Misc. items to do once completed above todo lists)
Introduce pricing and premium plans:
- Have a contributor plan or smth, where scientists and others who we deem to be doing great work for humanity the premium plan and all its bells and whitles 100% free.


## Style and UI changes
- Use the buttons in vue ui for the modal buttons in the private nav bar
- Round the input boxes for login and signup views
- Change the margin of the inputs for signup and login, so that they scale better
- In the bottom words of both login and sign view. Make it so that the color of the link stay the same even after visiting page.


### Notes for the notes view
Use a streaming library to stream changes to and from the server
Use a pub-sub pattern, so that all app instances of the same users are all clients
The server is the broker. Change on a single client will be broadcasted to the
rest using the broker.
- Notes service
    - Work on using streams for data streaming. Instead of having to press save in the note editor. It should stream data or the changes entered by me to the note service directly, as if using v-model on input.
- Work on how notesService can stream this data / change to the server, without transmiting the whole note to save it.
    - The streaming should occur both ways, so that when the user open multiple instances of the app such as in different tabs, they should be able to stream the changes to the data as events to the other instance to update it of the changes made on the first app instance.


## Notes on modal routing:
- Change modal so that when it is activated through a route, it will just overlay on top and leave the other items in the DOM untouched. And thus we no longer need to specifiy the last used view in the Router. So when user opens and closes the Modal, the view will be the same as it was, before the modal was opened.


## Read about lifecycle hooks and custom directives.
https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
https://vuejs.org/v2/guide/custom-directive.html
https://blog.bitsrc.io/a-guide-to-custom-directives-in-vue-46fc87abfd4f
https://flaviocopes.com/vue-directives/


## Security related todos
- Only create and inject the notes service after user is successfully logged in. Preventing un authorized components from accessing it.


## App optimization
- Once the user is logged in, the components shown in the public routes should be destroyed and descarded from memory to make the app more lean.


## Notes service and search service:
Search service will always search for notes on the local machine.
It will be doing full text search against the local in-memory or indexDB data.
But what if the data changes?
Not to worry, because,
the notes service is in charged of maintaing synchronization between the local data and that in the server.
Everytime there is new data in the server, the server will notify the client notes service,
the search service will have a hook of some sort, so everytime the data in the local machine is updated,
the search service is triggered to re run the search, and will only re render the view if the search result is different.
The search result should be presented in the form of v-for with a key binding, to allow vue to do automatic component reuse to prevent re renders.  
Instead of sending the whole note to the server  
Have a group of endpoints with the /changes prefix  
/changes/note/7  
^ Postable endpoint with changes made to note with noteID 7  
Instead of doing this, look into how things like gRPC works first. Because instead of RESTful full endpoints we might choose to go with a lighter streaming endpoint.