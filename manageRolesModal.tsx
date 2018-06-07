import * as React from "react";
import { UserApi } from "../../api/users";

export interface IModalWindow {
    showModal: boolean;
    onClose: () => void;
}

const headerStyle = {
    borderTopLeftRadius: "6px",
    borderTopRightRadius: "6px",
    display: "block",
    position: "relative",
    padding: "12px",
    textAlign: "right",
    backgroundColor: "#e8e9eb"
} as React.CSSProperties

export class ManageRolesModal extends React.Component<IModalWindow, {}>{
    constructor(props: IModalWindow) {
        super(props);
    }
    
    public render() {
        if (!this.props.showModal)
            return null;
        const backdropStyle: React.CSSProperties = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50,
            zIndex: 999,
            overflow: 'auto'
        };
        // The modal "window"
        const modalStyle: React.CSSProperties = {
            backgroundColor: '#f5f5f7',
            borderRadius: 5,
            maxWidth: 400,
            minHeight: 200,
            margin: '0 auto',
            padding: 0,
            zIndex: 1001,
            position: "relative",
            top: "200px"
        };
        return (
            <div className="backdrop" style={backdropStyle}>
                <div style={modalStyle}>
                    <header style={headerStyle}>
                        <div onClick={this.props.onClose}>
                             <img src="/content/public/images/stripe-close-button.png" style={{ cursor: "pointer" }} />
                        </div>
                        <div className="Header-account" style={{ position: "relative" }}>
                        </div>
                    </header>
                    <div className="ManageUserSelector-wrapper"><div className="ManageUserSelector-edge"></div>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}