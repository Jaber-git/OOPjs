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

var DOM = ctrl.getDOMStrings()  ;  
   //get the modal Element 
    var  modalcnt= document.getElementById('modal-container');
    //get the open modal btn
    var  modalbtn= document.getElementById('show-form-button');
    //listen for click
    modalbtn.addEventListener('click', openModal);
    //function to open modal
   function openModal(){
     modalcnt.classList.remove('modal-hidden');
     setTimeout(function () {
      modal.classList.add('centered');
    }, 10);

   }

})(controller);


