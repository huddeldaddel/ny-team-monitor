import React from 'react';

interface IProps {
    hideConfig?: boolean; 
    title: string;
}

interface IState { }

class PageHeader extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        var configLink = <a href="/config" className="button is-light">Configuration</a>;        
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <h3 className="is-size-3 ml-2">{ this.props.title }</h3>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                { !this.props.hideConfig ? configLink : undefined }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default PageHeader;