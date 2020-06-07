import React, { Component } from 'react';
import './Tree.css';
import CONFIG from './Actions/Config';
const END_POINT = "family/tree"
export default class FamilyTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tree: []
        }
    }
    componentDidMount() {
        this.getTree();
    }
    async getTree(user) {
        let url = `${CONFIG.API_URL}/${END_POINT}`
        const DATA = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'Bearer': `${CONFIG.API_TOKEN}`,
            }
        }
        let result = await fetch(url, DATA);
        result = await result.json();
        this.setState({
            tree: result.tree
        });
    }
    render() {
        
        return (
            <div className="tree">
                <ul>
                    <li>
                        <a href="#">Patel</a>
                        <ul>
                            <li>
                                <a href="#">2</a>
                                <ul>
                                    <li>
                                        <a href="#">2.1</a>

                                    </li>
                                    <li>
                                        <a href="#">2.2</a>
                                    </li>
                                    <li>
                                        <a href="#">2.2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">3</a>
                                <ul>
                                    <ul>
                                        <li>
                                            <a href="#">3.1</a>
                                            <ul>
                                                <li>
                                                    <a href="#">3.1.1</a>
                                                </li>
                                                <li>
                                                    <a href="#">3.1.2</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">3.2</a>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )

    }
}