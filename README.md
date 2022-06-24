# Gear_Backend

## Backend Tutorial
* In terminal:
```
cd backend init -y to initialize the note package manager inside this folder with all default values
```

* After a new package.json is created this will allow us to install npm packages inside this project
*The first package that we want to install is typescript, because we want to create a note application using typescript

* Go to terminal 
```
npm install typescript
```
* After we see a new entry in the name dependencies
* We also see the package that we installed. 
* Now we configure it by creating a tsconfig file inside the backend
* Inside it we add some configs:
outDir   //output directory is there to build javascript files, the build is like the backend folder.

include   //include option {"src/*/"] to tell that all type script files inside the src folder should be select to be transfiled into javascript.

* Now we add an src folder to the backend folder
* Now we create gitignore file and this is because we dont want some files to be pushed to the git, like the data inside node modules.

* Now we type inside the file node_modules to exclude them from being pushed
* Next step is copy data.ts to backend/src //we go and copy the data.ts and paste it inside the src folder of the backend
 
* Now at this point we will have some errors because we dont have the food and tag modules yet so we will change the food to any and the to any //no errors at this point

* Now we install the express cors
* We install it by pressing npm install express cors, cors is in the jason package

* Now we create new file in the src and we call it server.ts
* We improt express from "express";
* We install types/express //this is in the jason package now
* Import cors from"cors"; //we installtypes/cors 

const app = express();
we use app.use(cors({
credential             //here we are telling the express to use the cors to send request on port 4200  

deine an api
app.get(api    //to respond on port 5000
app.listen //we are using a listening function 
since its a typescript we need to convert it to javascript

*In terminal
```
from the admin folder :npm install ts-node --save-dev  //dev dependency

npm install nodemon ts-node --save -dev //this will speed upof development

server.ts / scripts //
```
