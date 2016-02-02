
/// <reference path="ts_libs/jquery.d.ts" />
module Karrot2 {
  export class Page {
    public nav:NavBar;

    constructor() {
      $(document).ready((event: JQueryStatic) => {
        this.nav = new NavBar();
        $(window).resize(() =>{
          this.nav.checkMenu();
        });
      });
    }

    public static isMobile():boolean {
      return $(window).width() > 767 ? true : false;
    }
  }

  export class NavBar {
    nav:HTMLElement;
    mobileBtn:HTMLElement;
    links:HTMLElement;

    constructor() {
      this.nav = document.getElementsByTagName('nav')[0];
      this.mobileBtn = <HTMLElement>this.nav.getElementsByClassName('mobile-btn')[0];
      this.links = <HTMLElement>this.nav.getElementsByClassName('links')[0];
      $(this.mobileBtn).click((event:JQueryEventObject) => {
        this.onMobileClick(event);
      })
      this.checkMenu();

    }

    onMobileClick(e:JQueryEventObject):void {
      this.toggleMenu(500);
    }
    checkMenu():void {
      Page.isMobile() == true ? this.showMenu(0):this.hideMenu(0);
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

var page = new Karrot2.Page();
