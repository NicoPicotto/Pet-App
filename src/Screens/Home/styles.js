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
		paddingHorizontal: 15
	},
	header: {
		fontWeight: 'bold',
		color: COLORS.primaryColor,
		fontSize: 24,
		marginBottom: 10,
	},
});
