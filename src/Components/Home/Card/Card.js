import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Card = ({ nombre, raza, edad, imagen }) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={{
						uri: imagen,
					}}
					style={styles.image}
				/>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.nombre}>{nombre}</Text>
				<Text style={styles.info}>{edad}</Text>
				<Text style={styles.info}>{raza}</Text>
			</View>
		</View>
	);
};

export default Card;
