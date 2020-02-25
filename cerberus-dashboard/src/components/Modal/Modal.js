/*
 * Copyright (c) 2020 Nike, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';


export default class Modal extends Component {

    static propTypes = {
        modalStack: PropTypes.array.isRequired
    };

    render() {
        const { modalStack } = this.props;

        if (modalStack.length < 1) {
            return (<div></div>);
        }

        let modal = modalStack[modalStack.length - 1];

        return (
            <div className="modal-container">
                <div className="modal-component-wrapper">
                    {modal}
                </div>
            </div>
        );
    }
}