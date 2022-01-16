// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
export default()=>{
    return{
        onLoad(){
            const audio=new Audio('https://raw.githubusercontent.com/SomeAspy/PowerCroissant/main/croissant%20sound.mp3');
            document.addEventListener("click",function play(){
                audio.play();
            });
        },
        onUnload(){
            document.removeEventListener("click");
        }
    };
};