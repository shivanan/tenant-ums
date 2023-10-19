import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import './styles.scss';
import UMSTenant from "./UMSTenant";



/**
 * Register as a Widget
 */
registerWidget({
    id: "ums_tenant",
    widget: UMSTenant,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "uxp_tenant",
    label: "Uxp_tenant",
    // click: () => alert("Hello"),
    component: Uxp_tenantWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"uxp_tenant",
    component: Uxp_tenantWidget
});
*/