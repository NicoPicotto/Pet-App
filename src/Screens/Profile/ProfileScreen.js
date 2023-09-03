import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';

const ProfileScreen = ({ route, navigation }) => {
	const { nombre, imagen, raza, edad } = route.params;

	const handleBack = () => {
		navigation.navigate('Home');
	};

	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={{ uri: imagen }} />
				</View>
				<View style={styles.infoContainer}>
					<Text style={styles.nombre}>{nombre}</Text>
					<Text style={styles.info}>{raza}</Text>
				</View>
				<TouchableOpacity onPress={handleBack} style={styles.backButton}>
					<Text>VOLVER</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProfileScreen;
