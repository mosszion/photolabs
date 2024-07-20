# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# Photolabs
PhotoLabs is a simple stock photo application - specifically a React-based single-page application (SPA) that allows users to view photos in different contexts. 
 !['PhotoLabs OverView'](https://github.com/mosszion/photolabs/blob/main/doc/PhotoLabOverview.png)


## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

Both servers have to run together. The frontend will run on 'localhost://3000' while the backend will run on 'localhost://8001'.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
# Setup the DB
 * Use 'psql -U labber' to login with password 'labber'
 * Create a DataBase with`CREATE DATABASE photolabs_development;`
 * Use the env variables as follows
      ```
    PGHOST=localhost
    PGUSER=labber
    PGDATABASE=photolabs_development
    PGPASSWORD=labber
    PGPORT=5432
    ```
# Seeding 
 * To reset/populate data into the DB, make a 'GET' request to `http://localhost:8001/api/debug/reset`

## PhotoLabs Snippets
 !['PhotoLabs OverView'](https://github.com/mosszion/photolabs/blob/main/doc/PhotoLabOverview.png)
 !['Navigation Bar](https://github.com/mosszion/photolabs/blob/main/doc/NavigationBar.png)
 ![List of the Topics on the Navigational Bar](https://github.com/mosszion/photolabs/blob/main/doc/TopicLists.png)
 !['Selected Photo Modal'](https://github.com/mosszion/photolabs/blob/main/doc/PhotoModal.png)
 !['Similar photos will be shown down below the clicked photo in the modal'](https://github.com/mosszion/photolabs/blob/main/doc/SimilarPhotosInPhotoModal.png)
 !['Liked Photo with Notification at Topbar'](https://github.com/mosszion/photolabs/blob/main/doc/SelectedLikeWithNotification.png)
 !['A single photo item preview'](https://github.com/mosszion/photolabs/blob/main/doc/PhotoListItem.png)
