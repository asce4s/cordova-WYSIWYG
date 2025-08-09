# cordova-WYSIWYG

This project is a web application with a client-server architecture. The client is an Angular application, and the server is a Laravel application.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* [Node.js and npm](https://nodejs.org/) installed
* [PHP and Composer](https://getcomposer.org/) installed
* [Angular CLI](https://cli.angular.io/) installed globally (`npm install -g @angular/cli`)

## Getting Started

To get a local copy up and running, follow these simple example steps.

### Server Setup (Laravel)

1.  Navigate to the `server` directory:
    ```bash
    cd server
    ```
2.  Install PHP dependencies:
    ```bash
    composer install
    ```
3.  Copy the example environment file and configure it:
    ```bash
    cp .env.example .env
    ```
    *Update `.env` with your database credentials and other environment-specific settings.*
4.  Generate an application key:
    ```bash
    php artisan key:generate
    ```
5.  Run database migrations (if applicable):
    ```bash
    php artisan migrate
    ```
6.  Start the Laravel development server:
    ```bash
    php artisan serve
    ```
    The server will typically run on `http://localhost:8000`.

### Client Setup (Angular)

1.  Navigate to the `client` directory:
    ```bash
    cd client
    ```
2.  Install Node.js dependencies:
    ```bash
    npm install
    ```
3.  Start the Angular development server:
    ```bash
    ng serve
    ```
    The client application will typically run on `http://localhost:4200`.

## Project Structure

*   `/client`: Contains the Angular frontend application.
*   `/server`: Contains the Laravel backend application.

## Running with Docker

This project is configured to run with Docker Compose. This is the recommended way to run the application for development.

### Prerequisites

*   [Docker](https://www.docker.com/get-started)
*   [Docker Compose](https://docs.docker.com/compose/install/)

### Running the Application

1.  **Build and start the containers:**
    ```bash
    docker-compose up --build -d
    ```
2.  **Generate the application key:**
    ```bash
    docker-compose exec server php artisan key:generate
    ```
3.  **Run database migrations:**
    ```bash
    docker-compose exec server php artisan migrate
    ```

The client application will be available at `http://localhost:4200`, and the server API will be available at `http://localhost:8000`.

### Stopping the Application

To stop the containers, run:
```bash
docker-compose down
```

## Further Help

*   To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
*   For more information on Laravel, visit the [Laravel documentation](https://laravel.com/docs).
```
