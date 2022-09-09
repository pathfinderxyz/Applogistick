import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

export default function InputFieldClaro({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderColor: '#ccc',
        borderWidth: 1,
        paddingBottom: 10,
        marginBottom: 25,
        borderRadius:5,
    
      }}>
      {icon}
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{flex: 1, paddingVertical:4,fontSize:15,paddingHorizontal:10,paddingTop:10}}
        />
    
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}