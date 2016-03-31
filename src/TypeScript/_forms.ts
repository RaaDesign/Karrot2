
interface Element {
  validationMessage:any;
  value:string;
  setCustomValidity:any;
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

      var submitButton = $(form).find("button:not([type=button]), input[type=submit]" );
      var inputs = $(form).find("input");

      document.getElementById("pass2")
      $(inputs).on("click", (e) => {
        var el = $(e.currentTarget);
        el.removeClass("error");
        el.closest(".form-group, .checkbox, .form-group-inline").children(".error-message").remove();

      });

      $(submitButton).click(( event ) => {
        $(form).find('[repeat]').each((id, item)=>{
          item.setCustomValidity($(item).attr("repeatText"));

          var repID = $(item).attr("repeat");
          var repItem = <Element>document.getElementById(repID);
          if(item.value===repItem.value)
          {
            item.setCustomValidity('');
          }
        });
        var invalidFields = $(form).find(":invalid" ),
            errorMessages = $(form).find( ".error-message" ),
            parent;

        errorMessages.each((id, item) => {
          $(item).remove();
        });
        invalidFields.each((id, item) => {
          parent = $(item).closest(".form-group, .checkbox, .form-group-inline, .checkbox-inline");
          $(parent).append( "<div class='error-message'>"+item.validationMessage+"</div>");
        }) ;

    });
    }
  }
}
