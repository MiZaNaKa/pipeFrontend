import AsyncStorage from "@react-native-async-storage/async-storage"

class jwtHelper{
    async UserInfo(){
        var loginUser = await AsyncStorage.getItem("userInfo");
        console.log(loginUser)
        return JSON.parse(loginUser);
    }


    async getJWT(){
        var jwt = await AsyncStorage.getItem("loginJwt");
        return jwt;
    }

    

    

    deleteUser = async () => {
        await AsyncStorage.removeItem("userInfo");
        await AsyncStorage.removeItem("loginJwt");
        
    }
}

export default new jwtHelper()