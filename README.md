# Animal Matching Game

A fun and interactive React-based game where players match animal names with their corresponding images. This simple yet engaging game helps players learn animal names while testing their memory and quick decision-making skills.

## 🎮 Game Features

- Random animal name generation
- Interactive image grid with animal pictures
- Immediate feedback on correct/incorrect selections
- Responsive design
- Hover effects for better user interaction

## 🚀 Technology Stack
- React: For building the user interface.
- JavaScript: Core logic for randomization and interactivity.
- CSS: Styling for the application layout and visuals.

## 🚦 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone [https://github.com/yourusername/animal-matching-game.git](https://github.com/ImeshaMadhushani/Animal-Game_Ass04.git)
```

2. Navigate to the project directory:
```bash
cd animalgame
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

The game will be available at `http://localhost:3000`

## 📁 Project Structure

```
animalgame/
├── src/
│   ├── components/
│   │   └── AnimalTable.js
│   ├── AnimalsDb.js
│   ├── compo.css
│   ├── App.js
│   └── App.css
├── public/
│   └── assets/
│       └── [animal images]
└── README.md
```

## 🎯 How to Play

1. The game displays a random animal name at the top
2. Click on the corresponding animal image from the grid
3. Get immediate feedback:
   - "Won" for correct matches
   - "Lost" for incorrect matches
4. A new animal name is generated for each round

## 💻 Technical Details

### Components

#### AnimalTable
- Main game component
- Manages game state using React hooks
- Handles user interactions and scoring

### State Management
- `randomAnimal`: Stores the current target animal
- `result`: Tracks game outcome (Won/Lost)

### Styling
- CSS modules for component-specific styling
- Responsive grid layout for animal images
- Interactive hover effects
- Table-based game interface

## 🎨 Customization

### Adding New Animals

1. Add new animal images to `/public/assets/`
2. Update `AnimalsDb.js`:
```javascript
export const animals = [
  {
    name: "newAnimal",
    img: "newAnimal.jpg"
  },
  // ... existing animals
];
```

### Styling Modifications
- Edit `compo.css` to customize:
  - Table appearance
  - Image grid layout
  - Hover effects
  - Color scheme
 
### Output![Screenshot 2024-11-22 133031](https://github.com/user-attachments/assets/acc2a446-4431-4679-a18e-74cc6a96525e)
![Screenshot 2024-11-22 133051](https://github.com/user-attachments/assets/64460b9b-50d2-43e6-834d-f1c8c95513c9)


