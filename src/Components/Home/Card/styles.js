import { StyleSheet } from 'react-native';
import COLORS from '../../../Constants/COLORS';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.terciaryColor,
		marginVertical: 5,
		flexDirection: 'row',
		borderRadius: 10,
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},
	imageContainer: {
		backgroundColor: 'white',
		width: '35%',
		padding: 5,
		borderRadius: 10,
		backgroundColor: COLORS.terciaryColor,
	},
	image: {
		height: 100,
		borderRadius: 5,
	},
	infoContainer: {
		width: '65%',
		paddingVertical: 10,
		paddingHorizontal: 5,
		gap: 5,
	},
	nombre: { fontWeight: 'bold', fontSize: 20, color: 'white' },
	info: { fontSize: 14, color: COLORS.backgroundColor },
});
