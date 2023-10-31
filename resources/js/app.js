import './bootstrap';
import * as Realm from "realm-web";
const app = new Realm.App({id:'tunitacos-web-xpuya'});
async function login(Email,P){
    const credentials=Realm.Credentials.emailPassword(Email,P);
    const user=await app.logIn(credentials);
    return user;
}
const user = login("anibal@anibal.com","12345678");
