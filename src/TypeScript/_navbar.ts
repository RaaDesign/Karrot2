module Karrot2 {
  export class NavBar {
    nav:HTMLElement;
    mobileBtn:HTMLElement;
    links:HTMLElement;

    constructor() {
      this.nav = document.getElementsByTagName('nav')[0];
      if(this.nav == null) return;

      this.mobileBtn = <HTMLElement>this.nav.getElementsByClassName('mobile-btn')[0];
      this.links = <HTMLElement>this.nav.getElementsByClassName('links')[0];
      $(this.mobileBtn).on("click", () => {
        this.onMobileClick();
      });

      this.checkMenu();

    }

    onMobileClick():void {
      this.toggleMenu(500);
    }
    checkMenu():void {
      console.log("checking");
      Core.isMobile() == true ? this.showMenu(0):this.hideMenu(0);
    }
    showMenu(time:number):void {
      $(this.links).show(time);
    }
    hideMenu(time:number):void {
      $(this.links).hide(time);
    }
    toggleMenu(time:number):void {
      $(this.links).toggle(time);
    }

  }
}
