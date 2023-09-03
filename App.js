import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './styles';
import MainStack from './src/Navigation/MainStack';

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar animated={true} hidden={false} barStyle={'light-content'} />
			<MainStack />
		</SafeAreaView>
	);
};

export default App;
