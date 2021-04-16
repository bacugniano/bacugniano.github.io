var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
      triggerHook: 'onLeave'
  }
});

$(function () { // wait for document ready
  // build scene
  var scene = new ScrollMagic.Scene({
                                      triggerElement: "#stick", 
                                      duration: 5000,
                                      // triggerHook: 0.1
                                    })
                             .setPin("#stick-pin")
                             .addTo(controller);

  // var scene = new ScrollMagic.Scene({
  //                                     triggerElement: "#stick", 
  //                                     duration: 2000
  //                                   })
  //                            .setClassToggle("#steel", "how-work__text-wrap--steel-active")
  //                            .addTo(controller);

  // var scene = new ScrollMagic.Scene({
  //                                     triggerElement: "#stick", 
  //                                     duration: 2000
  //                                   })
  //                            .setClassToggle("#material", "how-work__text-wrap--material-active")
  //                            .addTo(controller);


  // var scene = new ScrollMagic.Scene({
  //                                     triggerElement: "#filter", 
  //                                     duration: 4000,
  //                                     // triggerHook: 0.1
  //                                   })
  //                            .setPin("#filter-pin")
  //                            .addTo(controller);

}); 