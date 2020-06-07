import React, { Component } from 'react';
import './Tree.css';

export default class FamilyTree extends Component {
    
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