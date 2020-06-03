import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
class UserPermission{
    getCameraPermission = async()=>{
        if(Constants.platform.ios){
            const {status}= await Persmissions.askAsync(Permissions.CAMERA_ROLL);
            if(status != "granted"){
                alert("We need PErmission to access your camera roll ")
            }
        }
    };
}
export default new UserPermission();