import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyDHsfdZ7GrrnFfDGy6LHpxxirmWlqYEo3c",
  authDomain: "reac-sec01-009.firebaseapp.com",
  projectId: "reac-sec01-009",
  storageBucket: "reac-sec01-009.appspot.com",
  messagingSenderId: "654694860018",
  appId: "1:654694860018:web:9e20af49bb2b9a01a7fc6b",
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BKgCJq708caDOl1q64vilHRDWFUFcsB5wx6zrntSx1MzI_BxG-8GPOKU0c_Or1OCz6qlj3RnEOlSc-yXyFySY6k"
);

export { messaging };
