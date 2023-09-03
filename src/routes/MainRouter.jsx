import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, Results } from "../Views";
import { Layout } from "../components";

const MainRouter = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/resultados" element={<Results />} />
                    <Route path="/apostas" element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default MainRouter;