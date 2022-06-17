import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var urlTutorial = "https://db-planet.deutschebahn.com/pages/telefonie/apps/content/workadventure-erste-schritte";
var urlFeedback = "https://forms.office.com/Pages/ResponsePage.aspx?id=nC2noeZJbU-a9lqvoRg7_f26WHDvlOFNi_8Y43fECOdUMDVDTUpUUDRONkxHMzdLQ09WRlQxUUZSMS4u";
var urlMusik = "https://www.youtube-nocookie.com/embed/36YnV9STBqc?autoplay=1";
var urlInfo = "https://forms.office.com/r/sbX0vQJYP4";

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}


var zoneTutorial = "tutorial";
var zoneFeedback = "feedback";
var zoneMusik = "musik";
var zoneInfo = "info";
var zoneInfo1 = "info1";
var zoneInfo2 = "info2";
var zoneInfo3 = "info3";
var zoneInfo4 = "info4";
var zoneInfo5 = "info5";

WA.room.onEnterZone(zoneTutorial, () => {
   currentPopup =  WA.ui.openPopup("popUpTutorial","Tutorial ansehen?",[
        {
            label: "OK",
            callback: (popup => {
                WA.nav.openTab(urlTutorial);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneTutorial, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onEnterZone(zoneFeedback, () => {
   currentPopup =  WA.ui.openPopup("popUpFeedback","Hier kannst du Feedback abgeben.",[
        {
            label: "Feedback",
            callback: (popup => {
                WA.nav.openCoWebSite(urlFeedback);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneFeedback, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onEnterZone(zoneMusik, () => {
   currentPopup =  WA.ui.openPopup("popUpMusik","Etwas Musik?!",[
        {
            label: "Her damit!",
			callback: (popup => {
                WA.nav.openCoWebSite(urlMusik, false, "autoplay; encrypted-media");
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneMusik, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})


WA.room.onEnterZone(zoneInfo1, () => {
   currentPopup =  WA.ui.openPopup("popUpInfo1","Konversation ist eine",[]);
})

WA.room.onLeaveZone(zoneInfo1, () =>{
    closePopUp();
})

WA.room.onEnterZone(zoneInfo2, () => {
   currentPopup =  WA.ui.openPopup("popUpInfo2","sehr praktische Kunst. Man kann",[]);
})

WA.room.onLeaveZone(zoneInfo2, () =>{
    closePopUp();
})

WA.room.onEnterZone(zoneInfo3, () => {
   currentPopup =  WA.ui.openPopup("popUpInfo3","an Wichtiges denken",[]);
})

WA.room.onLeaveZone(zoneInfo3, () =>{
    closePopUp();
})

WA.room.onEnterZone(zoneInfo4, () => {
   currentPopup =  WA.ui.openPopup("popUpInfo4","während  man",[]);
})

WA.room.onLeaveZone(zoneInfo4, () =>{
    closePopUp();
})

WA.room.onEnterZone(zoneInfo5, () => {
   currentPopup =  WA.ui.openPopup("popUpInfo5","Unwichtiges erzählt.",[]);
})

WA.room.onLeaveZone(zoneInfo5, () =>{
    closePopUp();
})

WA.room.onEnterZone(zoneInfo, () => {
   currentPopup =  WA.ui.openPopup("popUpInfo","Ergebnis abgeben!",[
        {
            label: "OK",
            callback: (popup => {
                WA.nav.openCoWebSite(urlInfo);
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }]);
})

WA.room.onLeaveZone(zoneInfo, () =>{
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})