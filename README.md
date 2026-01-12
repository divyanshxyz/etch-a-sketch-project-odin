# Etch A Sketch

A fun, interactive drawing application built with vanilla HTML, CSS, and JavaScript. Create grids of varying sizes and draw on them with your mouse, with options for classic black and rainbow color modes.

![alt text](image.png)

## Features

- **Adjustable Grid Size**: Create grids from 1x1 up to 100x100 squares
- **Classic Mode**: Draw with black color that gradually becomes opaque as you hover
- **Random Color Mode**: Each grid square has its own random color that becomes visible as you draw
- **Smooth Drawing**: Opacity gradually increases with each hover for a natural drawing effect
- **Responsive Design**: Clean, centered UI with intuitive button controls

## How to Use

1. Open `index.html` in your web browser
2. Click **"New Canvas"** to create a new black grid
3. Hover your mouse over the grid squares to draw
4. Click **"Randomise Color"** to switch to the random color mode
5. Click **"Clear"** to reset the canvas

## Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling and flexbox layout
- **JavaScript**: Grid generation, event handling, and interactivity

## Installation

No installation required! Simply clone or download this repository and open `index.html` in your browser.

```bash
git clone <repository-url>
cd etch-a-sketch-project-odin
# Open index.html in your browser
```

## How It Works

- Grid elements are created dynamically based on user input
- Each square starts with opacity of 0 (invisible)
- Hovering over a square increases its opacity by 0.1, creating a drawing effect
- The "Randomise Color" mode assigns a random RGB color to each square before the opacity effect

## Project Status

This is a learning project from [The Odin Project](https://www.theodinproject.com/) curriculum.

## License

Open source - feel free to use and modify!
