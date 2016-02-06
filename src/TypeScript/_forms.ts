
interface Element {
  validationMessage:any;
  value:any;
}
module Karrot2 {
  export class FormsUI{
    forms:NodeListOf<Element>;
    constructor() {
      var forms = $("form");
      if(forms.length >= 0) {
        forms.each((id, item) => {
          this.createValidationUI(item);
        });
      }

    }

    createValidationUI(form:Element):void
    {
      form.addEventListener( "invalid", function( event ) {
          event.preventDefault();
      }, true );

      form.addEventListener( "submit", function( event ) {
          if ( !this.checkValidity() ) {
              event.preventDefault();
          }
      });

      var submitButton = $("button, input[type=submit]" );
      var inputs = $(form).children("input");

      $("input").on("click", (e) => {

        var el = $(e.currentTarget);
        el.removeClass("error");
        el.closest(".form-group, .checkbox").children(".error-message").remove();

      });

      $(submitButton).click(( event ) => {
        var invalidFields = $(":invalid" ),
            errorMessages = $( ".error-message" ),
            parent;

        errorMessages.each((id, item) => {
          $(item).remove();
        });
        invalidFields.each((id, item) => {
          parent = $(item).closest(".form-group, .checkbox");
          $(parent).append( "<div class='error-message'>"+item.validationMessage+"</div>");
          $(item).addClass("error");
          item.value = "";
        }) ;

    });
    }
  }
}
