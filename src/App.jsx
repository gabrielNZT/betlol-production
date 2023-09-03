import { ConfigProvider, theme } from 'antd'

import "./global.css";
import MainRouter from './routes/MainRouter';

const { darkAlgorithm } = theme;


function App() {

  return (
    <>
      <ConfigProvider theme={{ algorithm: darkAlgorithm }} >
        <MainRouter />
      </ConfigProvider>
    </>
  )
}

export default App
