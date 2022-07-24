import { ThemeController } from './ThemeController.js';
let themeControler = new ThemeController();
let userThemebtn = document.querySelector('#user-theme');
userThemebtn.addEventListener("click", () => themeControler.changeTheme());
console.log(userThemebtn);