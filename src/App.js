import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/login'; 
import Signup from './components/signup'; 
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Admin from './components/Admin/Admin';
import Alljobs from './components/Alljobs';
import Apply from './components/Apply'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applyName: 'Go back and choose again',
        };
    }
    handleApplyNameChange = (newApplyName) => {
        this.setState({ applyName: newApplyName });
    };
    render() {
        return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/alljobs" element={<Alljobs applyName={this.state.applyName} onApplyNameChange={this.handleApplyNameChange} />}/>
                    {/* <Route path="/alljobs" element={<Alljobs />} /> */}
                    <Route path="/apply" element={<Apply applyName={this.state.applyName} onApplyNameChange={this.handleApplyNameChange} />}/>
                    {/* <Route path="/apply" element={<Apply />} /> */}
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/" element={<Landing />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}
}

export default App;
