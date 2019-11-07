/**
 * I'll show my coding starting to ending
 * codeWriting process giving 1,2,3,4
 * 
 */
/**
 * MODEL
 */



//console.log(typeof myLibrary); //object
/**
 * VIEW
 */

var controller = (function () {
 
  //console.log(typeof dataHolder); // object
  var DOMStrings={
    modalContainer: 'modal-container',
    modalDOM: 'modal',
    modalOpener: 'show-form-button',
    //cancelModal: 'cancel-button',
    modalHiden: 'modal-hiden',
    myFunc: function(){
      console.log('From my func');
    }

  };
  console.log('Hello')
 //show modal
  
// for showing modal
 

return {  getDOMStrings: function(){
              return DOMStrings;
               },
      DOMStrings,
} ;

  


})();

controller.getDOMStrings().myFunc();//From my func
/**********
 *  VIEW  *
 **********/
var viewUI = (function (ctrl) {

var DOM = ctrl.getDOMStrings  ;   
     console.log(typeof DOM);
     console.log(DOM);

})(controller);


