import * as React from "react";
import { IManageUsersEntity } from "../../interfaces/manageUsers";
import { IGridViewOptions } from "../../interfaces";
import { IconButton } from "../../common/components/form/iconbutton";
import { Button } from "../../common/components/form/button";
import * as Moment from "moment";

export const ManageUsersList: React.StatelessComponent<IGridViewOptions<IManageUsersEntity>> = (props: IGridViewOptions<IManageUsersEntity>) => {
    return (
        <React.Fragment>
            <div className="an-single-component with-shadow">
                <div className="an-component-header">
                    <h3 style={{ textAlign: "center" }}><strong>Manage Users</strong></h3>
                </div>
                <div className="an-component-body padding20">
                    <div className="an-user-lists tables messages">
                        <div className="list-title">
                            <table className="an-lists-body an-customScrollbar ps-container ps-theme-default">
                                <thead>
                                    <tr>
                                        {props.headerColumns != null ? (
                                            props.headerColumns.map((itm, i) => {
                                                return <th key={i} className={itm.columnStyle}> {itm.columnName == "First Name" || itm.columnName == "Last Name" ? <a href="javascript:;" onClick={onHeaderClick(props, itm.columnName)}><strong>{itm.columnName}</strong></a> : <strong>{itm.columnName}</strong>}</th>
                                                //for onClick = onHeaderClick needs two params in order to make a column name a link ^^ to make the column name clickable in order to sort
                                            })
                                        )
                                            : ("")
                                        }
                                    </tr>
                                </thead>
                                {props.dataItems.map(buildRow(props))}
                            </table>
                        </div>
                    </div>
                </div>
                {props.dataItems.length == 0 ? <h3 style={{ textAlign: "center" }}><strong>Sorry user does not exist</strong></h3> : ""}
            </div>
        </React.Fragment>
    )
}
const lockedColor: React.CSSProperties = {
    color: "#ff0505"
}
const linkColor: React.CSSProperties = {
    color: '#333'
}


const buildRow = (props: IGridViewOptions<IManageUsersEntity>) => (itm: IManageUsersEntity, ndx: number) => {
    var locked = "";
    var date = Moment(itm.createdDate).local().format("MMMM DD, Y");
    
    return (
        <tbody key={ndx}>
            <tr>
                <td className="basis-10"> {/*terenary operator created to toggle between a LOCK and UNLOCK icon*/}
                    <a href="javascript:;" onClick={isAccountLocked(props, itm.id, itm.isAccountLocked)}><i className={itm.isAccountLocked == true ? locked = "ion-ios-locked lockedColor" : locked = "ion-ios-unlocked"} style={{ fontSize: "20px", paddingLeft: "10px" }} /></a>
                </td>
                <td className="basis-20"><a style={linkColor} href={'/member/#/publicprofile/' + itm.id}>{itm.firstName}</a></td>
                <td className="basis-20"><a style={linkColor}  href={'/member/#/publicprofile/' + itm.id}>{itm.lastName}</a></td>
                <td className="basis-20">{itm.email}</td>
                <td className="basis-10">{itm.roleName}</td>
                <td className="basis-30">{date}</td>
                <td className="basis-10">
                    <div className="an-settings-button" style={{ paddingLeft: "5px" }}>
                        <a style={{ textDecoration: "none" }} href="javascript:;" className="only-hover-setting circle" onClick={buttonClick(props, itm.id, itm.appRoleId.toString())}><i className="icon-setting" /></a>
                    </div>
                </td>
            </tr>
        </tbody>);
};

const buttonClick = (props: IGridViewOptions<IManageUsersEntity>, id: number, action: string) => (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    props.onButtonClick(id, action);
};

const onHeaderClick = (props: IGridViewOptions<IManageUsersEntity>, columnName: string) => (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    props.onHeaderClick(columnName);
}

const isAccountLocked = (props: IGridViewOptions<IManageUsersEntity>, id: number, action: boolean) => (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    props.onLock(id, action);
}