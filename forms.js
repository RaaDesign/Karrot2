var Karrot2;
(function (Karrot2) {
    var FormsUI = (function () {
        function FormsUI() {
            var _this = this;
            this.forms = document.getElementsByTagName('form');
            $(this.forms).each(function (i, el) {
                _this.createValidationUI(el);
            });
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
            var submitButton = form.querySelector("button:not([type=button]), input[type=submit]");
            submitButton.addEventListener("click", function (event) {
                var invalidFields = form.querySelectorAll(":invalid"), errorMessages = form.querySelectorAll(".error-message"), parent;
                for (var i = 0; i < errorMessages.length; i++) {
                    errorMessages[i].parentNode.removeChild(errorMessages[i]);
                }
                for (var i = 0; i < invalidFields.length; i++) {
                    parent = invalidFields[i].parentNode;
                    parent.insertAdjacentHTML("beforeend", "<div class='error-message'>raczek</div>");
                }
            });
        };
        return FormsUI;
    }());
    Karrot2.FormsUI = FormsUI;
})(Karrot2 || (Karrot2 = {}));
