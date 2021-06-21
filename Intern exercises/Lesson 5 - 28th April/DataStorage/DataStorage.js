import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (userInfo) => {
  try {
    const jsonValue = JSON.stringify(userInfo)
    await AsyncStorage.setItem('userInfo', jsonValue);
  } catch (e) {
    alert('Failed to save')
  }
}

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userInfo');
    console.log(jsonValue)
    if(jsonValue !== null) {
      JSON.parse(jsonValue)
      return true;
    }
    else{
      return false;
    }
  } catch(e) {
    console.log(e)
    alert('Failed');
  }
}

export const clearData = async () => {
  try {
    const logout = await AsyncStorage.clear();
    if(logout !== null) {
      return false;
    }
    else{
      return true;
    }
  }
  catch (e) {
    }
};