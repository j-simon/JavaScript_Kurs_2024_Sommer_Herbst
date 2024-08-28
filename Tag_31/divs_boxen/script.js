const MAX_BOXES = 300

class Box {
    constructor(x, y)  {
        this.x = x;
        this.y = y;
        this.element = document.createElement('div');
        this.element.className = 'box';
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
        this.handleClick = this.handleClick.bind(this)

        
        // Set up a click event to change color when the box is clicked
        this.element.addEventListener('click', this.handleClick);//.bind(this));
        
        // this.element.addEventListener('click', () => {
        //     const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        //     this.changeColor(randomColor);

        // });
        
    }

    // Method to append the box to a container
    appendTo(container) {
        container.appendChild(this.element);
    }

    // Method to change the color of the box
    changeColor(color) {
        this.element.style.backgroundColor = color;
    }

    // Handle click event to change color
    handleClick = () => {
        // Random color generator
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        this.changeColor(randomColor);
    }
}

let init= () => {
    const container = document.getElementById('container');
    const boxSize = 50;  // Width and height of each box
    const padding = 10;  // Padding between boxes
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const boxesPerRow = Math.floor(containerWidth / (boxSize + padding));
    const boxesPerColumn = Math.floor(containerHeight / (boxSize + padding));
    const totalBoxes = Math.min(MAX_BOXES, boxesPerRow * boxesPerColumn); // Max 250 Boxen

    for (let i = 0; i < totalBoxes; i++) {
        const row = Math.floor(i / boxesPerRow);
        const col = i % boxesPerRow;
        const x = col * (boxSize + padding);
        const y = row * (boxSize + padding);
        const box = new Box(x, y);
        box.appendTo(container);
    }
}

init();
