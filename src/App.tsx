import './App.css'
import { Footer } from './comoponents/Footer';
import { Header } from './comoponents/Header';
import { SearchProvider } from './contexts/SearchContext';
import { SerachProvider } from './contexts/SearchShowCtx';
import { MainRoutes } from './routes/MainRoutes';
import * as C from './styles';

export const App = () => {
	
	return (
		<SearchProvider>
			<SerachProvider>
					<C.Page>
						<Header />
						<C.Container>
							<MainRoutes />
						</C.Container>
						<Footer />
					</C.Page>
			</SerachProvider>
		</SearchProvider>
	)
}
export default App;
