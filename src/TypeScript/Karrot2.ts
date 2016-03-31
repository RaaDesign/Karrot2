/// <reference path="ts_libs/jquery.d.ts" />
module Karrot2 {
  export class Core {
    public nav:NavBar;
    public forms:FormsUI;
    constructor() {
      this.nav = new NavBar();
      this.forms = new FormsUI();
      $(window).on("resize", () => {
        this.nav.checkMenu();
      });
    }

    public static isMobile():boolean {
      return $(window).width() > 750 ? true : false;
    }
  }
  window.onload = function() {
    new Karrot2.Core();
  }
}
