enum ClothingColor {
  Yellow = '#FFFF00',
  Orange = '#FFA500',
  Pink = '#FFC0CB',
  Blue = '#0000FF',
  Purple = '#800080',
  Gray = '#808080',
}

// Create an array with all colors
const allColors: ClothingColor[] = [
  ClothingColor.Yellow,
  ClothingColor.Orange,
  ClothingColor.Pink,
  ClothingColor.Blue,
  ClothingColor.Purple,
  ClothingColor.Gray,
];

// Create buttons with the respective color as the background color
allColors.forEach(color => {
  const button = document.createElement('button');
  button.style.backgroundColor = color;
  button.textContent = color;
   button.style.border = "none";
    button.style.padding = "10px 20px";
    button.style.margin = "5px";
    button.style.cursor = "pointer";
  document.body.appendChild(button);
});
