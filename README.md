# 4x4 Number Single Player Game

Welcome to the 4x4 Number Single Player Game! This is a web-based game featuring a number puzzle with interactive elements and a clean interface. Below is a detailed guide on getting started, the project's structure, and the technologies used.

## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The game consists of two main pages:

- **Start Page (`start.html`)**: Users can choose game settings, including theme, player number, and grid size. This page also features a logo and a start button to begin the game.
- **Game Page (`gamepage.html`)**: The main gameplay interface where the game is played. It includes an SVG logo, game board, and interactive elements for reshuffling and returning to the home page.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**

    ```bash
    git  https://github.com/Pathogene027/new-memory-game.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd new-memory-game
    ```

3. **Open the Start Page**

    Open `start.html` in your preferred web browser to view and interact with the start page.

## Usage

### Starting the Game

1. Visit `start.html` to configure your game settings.
2. Choose the theme, player number, and grid size, then click the "Start Game" button.

### Playing the Game

1. Once on `gamepage.html`, interact with the game using the provided controls.
2. Use the "Home" button to return to the start page.
3. Use the "Reshuffle" button to shuffle the game elements.

## File Structure

The project directory contains the following files and folders:

- **`start.html`** - The starting page for game configuration.
- **`gamepage.html`** - The game interface page.
- **`css/`** - Contains stylesheet files:
  - `start.css`
  - `gameplay.css`
- **`js/`** - Contains JavaScript files for game functionality:
  - `compliments.js`
  - `reshuffler.js`
  - `themeEssentials.js`
  - `utilityFunctions.js`
  - `necessityVariables.js`
  - `ballCreator.js`
  - `cardClickEffect.js`
  - `playerNumberEffect.js`
  - `subtleDisplay.js`
  - `resize.js`
  - `displayResult.js`
- **`asset/`** - Contains asset files such as the site icon:
  - `siteIcon.svg`
- **`images/`** - Contains image files used in the project.

## Technologies Used

- **HTML5** - For the structure of the pages.
- **CSS3** - For styling the pages (`start.css` and `gameplay.css`).
- **JavaScript** - For game functionality and interactivity.
- Utilizes various external libraries and custom scripts.
- **Font Awesome** - For iconography.
- **Google Fonts** - For typography.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository.**
2. **Create a new branch**

    ```bash
    git checkout -b feature-branch
    ```

3. **Make your changes.**
4. **Commit your changes**

    ```bash
    git commit -am 'Add new feature'
    ```

5. **Push to the branch**

    ```bash
    git push origin feature-branch
    ```

6. **Create a new Pull Request.**

## License

This project is licensed under the MIT License - see the [LICENSE](license.txt) file for details.
