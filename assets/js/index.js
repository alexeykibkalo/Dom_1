'use strict';

const users = [
    {
        id: 1,
        name: "Стас",
        surname: "Михайлов",
        imageSrc: "https://24smi.org/public/media/celebrity/2019/01/29/eblteapobq9j-stas-mikhailov.jpg",
        userDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos est expedita quasi. Ad animiassumenda dicta earum esse laudantium maxime odio, perspiciatis quam, quasi rerum tempora. Accusantium",
        contacts: [
             "./assets/images/icons/socialNetworks/facebook.png",
             "./assets/images/icons/socialNetworks/twitter.png",
            "./assets/images/icons/socialNetworks/skype.png",
            "./assets/images/icons/socialNetworks/google-plus.png",
            
        ]
        ,
        
    },
    {
        id: 2,
        name: "User2",
        surname: "Usersurname1",

    },
    {
        id: 3,
        name: "Алла",
        surname: "Пугачева",
        imageSrc: "https://kievpravda.com/media/images/46128/raw/1d3d39c47e7987682e5bd74ad4732812.jpg",
    },
    {
        id: 4,
        name: "Дима",
        surname: "Билан",
        imageSrc: "https://s3.cdn.teleprogramma.pro/wp-content/uploads/2019/02/3234a90b1ebc1206b4f2f0557c510bff.jpg",
    },

];

const userListContainer = document.getElementById("usersList");

userListContainer.append(createUserCardElem(users[0]));

function createUserCardElem(user) {
    const userCardWrapperElem = document.createElement("div");
    userCardWrapperElem.classList.add('userCardWrapper');
    userCardWrapperElem.append(createUserPictureElem(user));
    userCardWrapperElem.append(createUserFullName(user));
    userCardWrapperElem.append(createUserDescription(user));
    userCardWrapperElem.append(createUserContactsContainer(user));
    return userCardWrapperElem;
}

function createUserPictureElem(user) {
    const userImageContainer = document.createElement("div");
    userImageContainer.classList.add("userPictureContainer");
    userImageContainer.append(createUserImage(user));
    return userImageContainer;

}
function createUserImage(user) {
    const userImage = document.createElement("img");
    userImage.setAttribute("src", user.imageSrc);
    return userImage;
    
}

function createUserImg(user) {
    const userImgElem = document.createElement("img");
    userImgElem.setAttribute("src", user.imageSrc);
    return userImgElem;


}
function createUserFullName({name, surname}){
    const userName = document.createElement("h3");
    userName.classList.add("userFullName");
    userName.innerText = `${name} ${surname}`;
    return userName;
}

function createUserDescription(user) {
    const userDescription = document.createElement("p");
    userDescription.classList.add("userDescription");
    userDescription.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eos est expedita quasi. Ad animi\n" +
        "                assumenda dicta earum esse laudantium maxime odio, perspiciatis quam, quasi rerum tempora. Accusantium";
    return userDescription;
}
function createUserContactsContainer({contacts}){
    const userContactsContainer = document.createElement("div");
    userContactsContainer.classList.add("userContactsContainer");
    for(let i = 0; i < contacts.length; i++){
        userContactsContainer.append(createUserContactLink(contacts[i]));
    }
    return userContactsContainer;
}
function createUserContactLink (contact){
    const userContactLink = document.createElement("a");
    userContactLink.setAttribute("href", "#");
    userContactLink.append(createUserContactIcon(contact));
    return userContactLink;
}
function createUserContactIcon(contact){
    const userContactIcon = document.createElement("img");
    userContactIcon.setAttribute("src", contact)
    return userContactIcon;    
}

