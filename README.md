# Etch-a-Sketch

A browser-based drawing grid built with vanilla JavaScript as part of [The Odin Project](https://www.theodinproject.com/) JavaScript course. Hover over any square to "draw" on it — each square gets a random color and gradually darkens the more you hover over it.

## Features

- 🎨 **Random color on hover** — each square is assigned a new random RGB color the first time your mouse touches it
- 🌓 **Progressive darkening** — hovering the same square repeatedly increases its opacity, darkening it step by step (up to 10 times)
- 🔲 **Adjustable grid size** — click the button to set a custom grid size (up to 100x100 squares)
- 📱 Responsive square sizing — grid squares automatically resize to fit within a fixed container based on the chosen grid size

## How It Works

1. The page loads with a default 16x16 grid
2. Click **"Change Grid Size"** and enter a number between 1 and 100 to generate a new grid of that size
3. Move your mouse over the squares to draw — each hovered square gets a random color and darkens gradually with repeated hovers

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (DOM manipulation, event listeners, `dataset` attributes)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Betty-Gm/TOP-Etch-a-Sketch.git
cd TOP-Etch-a-Sketch
```

### Run it

Just open `index.html` in your browser — no build step or dependencies required.

## Project Structure

TOP-Etch-a-Sketch/
├── index.html # Page structure and button
├── style.css # Grid and layout styling
├── script.js # Grid generation, hover color, and darkening logic

## Future Improvements

- Add a "Clear Grid" button to reset colors without changing size
- Add a color picker to choose the drawing color instead of random
- Add a rainbow mode / eraser mode toggle
- Make it mobile/touch-friendly (currently hover-based, which doesn't work on touch devices)

## Author

Built by [Bethlehem Gebremichael Abay](https://github.com/Betty-Gm) while working through The Odin Project's JavaScript curriculum.