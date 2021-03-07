import Page from '../components/Page';
/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
