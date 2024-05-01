import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrementValue, incrementValue } from './component/redux/action';

interface SteperScreenProps {
}


const SteperScreen = (props: SteperScreenProps) => {
  // state = { count: 0 }   
  const count = useSelector((state) => state.reducer.count);

  // const count = useSelector((state) => state.reducer);
  
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={{textAlign:"center",fontSize:50,backgroundColor:'red',color:"black"}}>
        {count}
        </Text>
      <Button title='Increment' onPress={()=>dispatch(incrementValue(count))}/>
      <Button title='Decrement' onPress={()=>dispatch(decrementValue(count))}/>
    </View>
  );
};

export default SteperScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#ACACAC"
  }
});
