import React from 'react';
import ExternViewAccordion from './externViews/externViewAccordion';
import ExternViewList from './externViews/externViewList';
import AdminView from './admin_view/adminView';


export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: 0,
        };
    }

    render() {
        // if (chayns.env.parameters.id === undefined) {
        //     return (
        //         <div className="tapp__content content">
        //             <ExternViewAccordion/>
        //         </div>
        //     );
        // }
        // if (chayns.env.parameters.id == 1) {
        //     return (
        //         <div className="tapp__content content">
        //             <ExternViewList/>
        //         </div>
        //     );
        // }
        // if (chayns.env.parameters.id == 2) {
        //     return (
        //         <div className="tapp__content content">
        //             <AdminView/>
        //         </div>
        //     );
        // }
        return (
                    <div className="tapp__content content">
                        <ExternViewList/>
                    </div>
                );
    }
}
