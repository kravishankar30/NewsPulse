import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default function App() {
    const [progress, setProgress] = useState(0);
    const pageSize = 9;
    const apiKey=process.env.REACT_APP_NEWS_API
        return (
            <div>
                <BrowserRouter>
                    <LoadingBar height = {2} color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<News setProgress = {setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country="us" category="general" />} />
                        <Route exact path="/business" element={<News setProgress = {setProgress} apiKey={apiKey}  pageSize={pageSize} key="business" country="us" category="business" />} />
                        <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey={apiKey}  pageSize={pageSize} key="entertainment" country="us" category="entertainment" />} />
                        <Route exact path="/general" element={<News setProgress = {setProgress} apiKey={apiKey}  pageSize={pageSize} key="general" country="us" category="general" />} />
                        <Route exact path="/health" element={<News setProgress = {setProgress} apiKey={apiKey}  pageSize={pageSize} key="health" country="us" category="health" />} />
                        <Route exact path="/science" element={<News setProgress = {setProgress} apiKey={apiKey}  pageSize={pageSize} key="science" country="us" category="science" />} />
                        <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey={apiKey}  pageSize={pageSize} key="sports" country="us" category="sports" />} />
                        <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey={apiKey}  pageSize={pageSize} key="technology" country="us" category="technology" />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
}