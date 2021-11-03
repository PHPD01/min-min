import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

import Env from './components/env';
import Map from './components/map';
import Menu from './components/menu';
import Photo from './components/photo-album';
import Comment from './components/comment';
import Share from './components/user-share';


class Bookmarks extends React.Component {
    render() {
        return <Router>
            <div>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} to={'/user-share'}>用戶分享</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={'/photo-album'} >相片集</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={'/map'} >地圖</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={'/menu'} >菜單</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={'/comment'} >環境資訊</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={'/env'} >新增評論</Nav.Link>
                </Nav.Item>

            </Nav>





        </div>;

        <div>
            <Switch>

                <Route path='/user-share'>
                    < Share />
                </Route>

                <Route path='/photo-album'>
                    < Photo />
                </Route>

                <Route path='/map'>
                    < Map />
                </Route>

                <Route path='/menu'>
                    < Menu />
                </Route>

                <Route path='/env'>
                    < Env />
                </Route>

                <Route path='/comment'>
                    < Comment />
                </Route>

             
            </Switch>

        </div>

        </Router>

    }
}

export default Bookmarks;