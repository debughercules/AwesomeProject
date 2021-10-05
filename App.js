//1 Empty Project
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hi ! Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//       <Image './assets/favicon.png' />;
//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




//2 Function Components and Class Components
// import React from 'react';
// import { Text, View } from 'react-native';

// const HelloWorldApp = () => {
//   return (
//     <View style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}>
//       <Text>Hello, world !</Text>
//     </View>
//   );
// }

// export default HelloWorldApp;




//3 Core Components 
// import React from 'react';
// import { View, Text, Image, ScrollView, TextInput } from 'react-native';

// const App = () => {
//   return (
//     <ScrollView>
//       <Text>Some text</Text>
//       <View>
//         <Text>Some more text</Text>
//         <Image
//           source={{
//             uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
//           }}
//           style={{ width: 200, height: 200 }}
//         />
//       </View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1
//         }}
//         defaultValue="You can type in me"
//       />
//     </ScrollView>
//   );
// }

// export default App;



//4 First Components 
// import React from 'react';
// import { Text } from 'react-native';

// const Cat = () => {
//   return (
//     <Text>Hello, I am your cat!</Text>
//   );
// }

// export default Cat;

//5 First Components 
// import React from 'react';
// import { Text } from 'react-native';

// const Cat = () => {
//   const name = "Maru";
//   return (
//     <Text>Hello, I am {name}!</Text>
//   );
// }

// const getFullName = (firstName, secondName, thirdName) => {
//   return firstName + " " + secondName + " " + thirdName;
// }

// const Cat = () => {
//   return (
//     <Text>
//       Hello, I am {getFullName("Rum", "Tum", "Tugger")}!
//     </Text>
//   );
// }

// export default Cat;


//5 Custom Components 
// import React from 'react';
// import { Text, TextInput, View } from 'react-native';

// const Cat = () => {
//   return (
//     <View>
//       <Text>Hello, I am...</Text>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1
//         }}
//         defaultValue="Name me!"
//       />
//     </View>
//   );
// }

// export default Cat;


//6 Multiple Components 
// import React from 'react';
// import { Text, View } from 'react-native';

// const Cat = () => {
//   return (
//     <View>
//       <Text>I am also a cat!</Text>
//     </View>
//   );
// }

// const Cafe = () => {
//   return (
//     <View>
//       <Text>Welcome!</Text>
//       <Cat />
//       <Cat />
//       <Cat />
//     </View>
//   );
// }

// export default Cafe;


//7 Multiple Props 
// import React from 'react';
// import { Text, View } from 'react-native';

// const Cat = (props) => {
//   return (
//     <View>
//       <Text>Hello, I am {props.name}!</Text>
//     </View>
//   );
// }

// const Cafe = () => {
//   return (
//     <View>
//       <Cat name="Maru" />
//       <Cat name="Jellylorum" />
//       <Cat name="Spot Bharat" />
//     </View>
//   );
// }

// export default Cafe;


//7 Props 
import React from 'react';
import { Text, View, Image } from 'react-native';

const CatApp = () => {
  return (
    <View>
      <Image
        // source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        source={require('./assets/favicon.png')}
        style={{width: 100, height: 100}}
      />
      <Text>Hello, I am your cat !!!</Text>
    </View>
  );
}

export default CatApp;