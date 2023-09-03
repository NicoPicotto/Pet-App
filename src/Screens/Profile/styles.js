import { StyleSheet } from 'react-native';
import COLORS from '../../Constants/COLORS';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.terciaryColor,
		paddingTop: 20,
		paddingBottom: 10,
	},
	wrapper: {
		backgroundColor: COLORS.backgroundColor,
		flex: 1,
		borderRadius: 30,
		paddingVertical: 15,
		paddingHorizontal: 15,
	},
	imageContainer: {
		width: '100%',
		height: '40%',
		overflow: 'hidden',
	},
	image: { flex: 1, borderRadius: 30 },
	infoContainer: { paddingHorizontal: 10, paddingVertical: 5 },
	nombre: { fontWeight: 'bold', fontSize: 28, color: COLORS.primaryColor },
	backButton: {
		position: 'absolute',
		bottom: 20,
		left: 20,
		borderRadius: 10,
		backgroundColor: COLORS.backgroundColor,
		padding: 10,
	},
});
