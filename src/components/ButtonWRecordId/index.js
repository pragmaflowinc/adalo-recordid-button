import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from '@protonapp/react-native-material-ui';

const ButtonWRecordId = (props) => {
	const { 
		list,
		styles: { title: titleStyles },
		title = "", 
		icon,
		backgroundColor,
		_height,
		_width,
		onButtonClick
	 } = props
	 console.log(props)
	return(
    <View style={{
			height: _height,
			width: _width
		}}>
      <Button  
      icon={icon}
      text={title} 
      style={{
        container: {
          backgroundColor: backgroundColor,
					height: _height,
					width: _width
        },
        text: {
          color: titleStyles.color,
          fontFamily: titleStyles.fontFamily,
          fontSize: titleStyles.fontSize,
          fontWeight: titleStyles.fontWeight
        }
      }} 
      onPress={() => {
				if (onButtonClick && list.length > 0) {
					onButtonClick(list[0].id)
				}
			}}></Button>
    </View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default ButtonWRecordId
