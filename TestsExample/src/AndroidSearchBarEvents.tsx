import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from 'react-native-screens/native-stack';
import {SearchBarProps} from 'react-native-screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={First} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function First({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase>;
}) {
  const [events, setEvents] = React.useState<string[]>([]);
  React.useEffect(() => {
    const searchBar: SearchBarProps = {
      onSearchButtonPress: () => setEvents((prev) => [...prev, 'Search']),
      onBlur: () => setEvents((prev) => [...prev, 'Blur']),
      onClose: () => setEvents((prev) => [...prev, 'Close']),
      onOpen: () => setEvents((prev) => [...prev, 'Open']),
      onFocus: () => setEvents((prev) => [...prev, 'Focus']),
    };
    navigation.setOptions({
      searchBar: searchBar,
    });
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#FFF', padding: 12}}>
      {events.map((event, i) => (
        <Text key={i}>{event}</Text>
      ))}
    </View>
  );
}