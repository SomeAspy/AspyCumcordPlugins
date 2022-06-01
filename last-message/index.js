// Copyright (c) 2022 Aiden Baker
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import{findByProps}from'@cumcord/modules/webpack';
import{getLastSelectedChannelId}from'@cumcord/modules/common/channels';
const{getMessages}=findByProps('getMessages');
const{sendMessage}=findByProps('sendMessage');
const{getCurrentUser}=findByProps('getCurrentUser');
export default()=>{
    return{
        onLoad(){
            document.addEventListener('keydown',function(e){
                if(e.key=='ArrowDown'){
                    const lastChannelID=getLastSelectedChannelId();
                    const lastMessage=_.findLast(getMessages(lastChannelID)._array,m=>m.author.id===getCurrentUser().id);
                    sendMessage(cumcord.modules.common.channels.getChannelId(),{content:lastMessage.content,validNonShortcutEmojis:[]});
                }
            });
        },
        onUnload(){
        }
    };
};