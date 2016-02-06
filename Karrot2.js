var Karrot2;
(function (Karrot2) {
    var FormsUI = (function () {
        function FormsUI() {
            var _this = this;
            var forms = $("form");
            if (forms.length >= 0) {
                forms.each(function (id, item) {
                    _this.createValidationUI(item);
                });
            }
        }
        FormsUI.prototype.createValidationUI = function (form) {
            form.addEventListener("invalid", function (event) {
                event.preventDefault();
            }, true);
            form.addEventListener("submit", function (event) {
                if (!this.checkValidity()) {
                    event.preventDefault();
                }
            });
            var submitButton = $(form).find("button:not([type=button]), input[type=submit]");
            var inputs = $(form).find("input");
            document.getElementById("pass2");
            $(inputs).on("click", function (e) {
                console.log("raczek");
                var el = $(e.currentTarget);
                el.removeClass("error");
                el.closest(".form-group, .checkbox").children(".error-message").remove();
            });
            $(submitButton).click(function (event) {
                $(form).find('[repeat]').each(function (id, item) {
                    item.setCustomValidity($(item).attr("repeatText"));
                    var repID = $(item).attr("repeat");
                    var repItem = document.getElementById(repID);
                    console.log(repItem);
                    if (item.value === repItem.value) {
                        console.log(repItem.value);
                        item.setCustomValidity('');
                    }
                });
                var invalidFields = $(form).find(":invalid"), errorMessages = $(form).find(".error-message"), parent;
                errorMessages.each(function (id, item) {
                    $(item).remove();
                });
                invalidFields.each(function (id, item) {
                    parent = $(item).closest(".form-group, .checkbox");
                    $(parent).append("<div class='error-message'>" + item.validationMessage + "</div>");
                });
            });
        };
        return FormsUI;
    }());
    Karrot2.FormsUI = FormsUI;
})(Karrot2 || (Karrot2 = {}));
var Karrot2;
(function (Karrot2) {
    var NavBar = (function () {
        function NavBar() {
            var _this = this;
            this.nav = document.getElementsByTagName('nav')[0];
            if (this.nav == null)
                return;
            this.mobileBtn = this.nav.getElementsByClassName('mobile-btn')[0];
            this.links = this.nav.getElementsByClassName('links')[0];
            $(this.mobileBtn).on("click", function () {
                _this.onMobileClick();
            });
            this.checkMenu();
        }
        NavBar.prototype.onMobileClick = function () {
            this.toggleMenu(500);
        };
        NavBar.prototype.checkMenu = function () {
            console.log("checking");
            Karrot2.Core.isMobile() == true ? this.showMenu(0) : this.hideMenu(0);
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
var Karrot2;
(function (Karrot2) {
    var Core = (function () {
        function Core() {
            var _this = this;
            this.nav = new Karrot2.NavBar();
            this.forms = new Karrot2.FormsUI();
            $(window).on("resize", function () {
                _this.nav.checkMenu();
            });
            $("button").on("click", function () {
                console.log("but clisked");
            });
        }
        Core.isMobile = function () {
            return $(window).width() > 767 ? true : false;
        };
        return Core;
    }());
    Karrot2.Core = Core;
    window.onload = function () {
        new Karrot2.Core();
    };
})(Karrot2 || (Karrot2 = {}));
