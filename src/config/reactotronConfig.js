import Reactotron , { asyncStorage } from 'reactotron-react-native'

const tron = Reactotron
  .configure() 
  .useReactNative() 
  .use(asyncStorage())
  .connect()

  
tron.clear();

console.tron = tron;