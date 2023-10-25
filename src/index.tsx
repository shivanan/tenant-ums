import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import './styles.scss';
import UMSTenant from "./UMSTenant";
import { PriceConfig } from "./GlobalConfig";
import { MyInvoices, TenantInvoices } from "./Invoices";
import OffboardingTenants from "./OffboardingTenants";



registerWidget({
    id: "ums_tenant",
    widget: UMSTenant,
    configs: {
        layout: {
     
        }
    }
});

registerWidget({
    id: "offboarding_tenant",
    widget: OffboardingTenants,
    configs: {
        layout: {
     
        }
    }
});

registerWidget({
    id: "price-config",
    widget: PriceConfig,
    configs: {
        layout: {
     
        }
    }
});

registerWidget({
    id: "invoices",
    widget: TenantInvoices,
    configs: {
        layout: {
     
        }
    }
});
registerWidget({
    id: "my-invoices",
    widget: MyInvoices,
    configs: {
        layout: {
     
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