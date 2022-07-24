export class ThemeController {
  constructor() 
  {
    this.isDark = false;
  }
  changeTheme() {
    if (this.isDark) {
      this.goLight();
      this.isDark = false;
    } else {
      this.goDark();
      this.isDark = true;
    }
  }
  goLight() {
    // classname to be changed
    let textColor = this.getTextColorComponent();
    textColor.forEach((component) => {
      component.style.removeProperty('color');
      // Chưa viết class cho cái này nên để sau
      // component.classList.add('colorText-black');
    });
    let body = this.getBody(); 
    body.classList.remove('bg-dark');
    body.classList.add('bg-light');
  }
  goDark() {
    let textColor = this.getTextColorComponent();
    textColor.forEach((component) => {
      component.style.color = '#1ab394';
      // Chưa viết class cho cái này nên để sau
      // component.classList.remove('colorText-black');
    });
    let body = this.getBody();
    body.classList.remove('bg-light');
    body.classList.add('bg-dark');
  }
  getTextColorComponent() {
    return document.querySelectorAll('.colorText-black');
  }
  getBody() {
    return document.querySelector('body'); 
  }
}
