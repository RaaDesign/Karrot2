var Karrot2;
(function (Karrot2) {
    var Page = (function () {
        function Page() {
            var _this = this;
            $(document).ready(function (event) {
                _this.nav = new NavBar();
                $(window).resize(function () {
                    _this.nav.checkMenu();
                });
            });
        }
        Page.isMobile = function () {
            return $(window).width() > 767 ? true : false;
        };
        return Page;
    }());
    Karrot2.Page = Page;
    var NavBar = (function () {
        function NavBar() {
            var _this = this;
            this.nav = document.getElementsByTagName('nav')[0];
            this.mobileBtn = this.nav.getElementsByClassName('mobile-btn')[0];
            this.links = this.nav.getElementsByClassName('links')[0];
            $(this.mobileBtn).click(function (event) {
                _this.onMobileClick(event);
            });
            this.checkMenu();
        }
        NavBar.prototype.onMobileClick = function (e) {
            this.toggleMenu(500);
        };
        NavBar.prototype.checkMenu = function () {
            Page.isMobile() == true ? this.showMenu(0) : this.hideMenu(0);
        };
        NavBar.prototype.showMenu = function (time) {
            $(this.links).show(time);
        };
        NavBar.prototype.hideMenu = function (time) {
            $(this.links).hide(time);
        };
        NavBar.prototype.toggleMenu = function (time) {
            $(this.links).toggle(time);
        };
        return NavBar;
    }());
    Karrot2.NavBar = NavBar;
})(Karrot2 || (Karrot2 = {}));
var page = new Karrot2.Page();
