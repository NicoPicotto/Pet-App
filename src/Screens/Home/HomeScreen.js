import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import Card from '../../Components/Home/Card/Card';
import data from '../../../test.json';

const HomeScreen = ({ navigation }) => {
	const [itemList, setItemList] = useState([]);

	useEffect(() => {
		setItemList(data);
	}, []);

	const onSelect = (item) => {
		navigation.navigate('Profile', {
			nombre: item.nombre,
			edad: item.edad,
			raza: item.raza,
			imagen: item.image,
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<Text style={styles.header}>Tus compañer@s</Text>
				<FlatList
					data={itemList}
					style={styles.list}
					renderItem={({ item }) => (
						<TouchableOpacity onPress={() => onSelect(item)}>
							<Card
								nombre={item.nombre}
								imagen={item.image}
								raza={item.raza}
								edad={item.edad}
							/>
						</TouchableOpacity>
					)}
					key={(item) => item.nombre}
				/>
			</View>
		</View>
	);
};

export default HomeScreen;
