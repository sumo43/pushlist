How it Works

Main Page
- Todo List
- Signin 
- Controls


Analysis
- On page load, in the main component, the signin function will be called if the user is not signed in 
(this should be a seperate component, but is a less important issue than the actual list)
    - Set auth object from firebase 
    - Set user check

When user check is set to 1, the main component will display the todo list

Todo List
- When does it refresh?
- When user.getTodos is called: During initial usercheck check, as well as during push and pop instructions


Controls
Push
- Create a Todo object WORKS
- Add the object to the firebase database WORKS
    - Is the time correct? YES
- Figure out how to know when the object is added, and can be queries successfully
    - print the updated database right after insert - is it correct?

Pop
- Remove the object from the firebase database
- Refresh the list

