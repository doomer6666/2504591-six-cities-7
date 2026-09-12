import MainPage from './pages/main-page';
type AppProps = {
  offerCount: number;
};
export const App = (props: AppProps) => (
  <MainPage offerCount={props.offerCount} />
);
