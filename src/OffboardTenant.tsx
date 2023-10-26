import React, { useEffect, useState } from "react";
import { AsyncButton, Button, DataTable, DatePicker, Input, Label, Modal, TitleBar, WidgetWrapper, useAlert, useToast } from "uxp/components";
import { IContextProvider } from "./uxp";

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

const OffboardTenant: React.FunctionComponent<IWidgetProps> = (props) => {
    const toast = useToast();
    const [tenants, setTenants] = useState([]);
    const [date, setDate] = useState(new Date());
    const [remarks, setRemarks] = useState(null);
    const [seletedTenant, setSelectedTenant] = useState(null);

    useEffect(() => {
        getTenants();

    }, []);

    async function getTenants() {
        const res = await props.uxpContext.executeAction('TenantUMS', 'GetAllTenants', {});
        const jsonObj = JSON.parse(res);
        setTenants(jsonObj?.tenants);
    };

    function getUserKey() {
        const [_, v] = props.uxpContext.userKey.split('_');
        return parseInt(v);
    }

    async function offboardTenant() {
        const params = {
            tenant: seletedTenant?.tenantID,
            initiatedUser: getUserKey(),
            intiatedDate: new Date().toISOString(),
            terminatedDate: new Date(date).toISOString(),
            remarks
        }
        try {
            await props.uxpContext.executeAction('TenantUMS', 'OffboardTenant', params);
            toast.info("Termination request sent sucessfully!!!");
        } catch (err) {
            toast.error("something went wrong")

        }
        setSelectedTenant('');
    }

    console.log("Selected tenant :", setSelectedTenant);


    return (
        <WidgetWrapper>
            <TitleBar title='Offboarding Tenants'>
            </TitleBar>
            <DataTable
                className='tenants offboard-tenant'
                data={tenants}
                pageSize={5}
                activeClass="active"
                columns={[
                    {
                        title: "Name",
                        width: "60%",
                        renderColumn: item => <div className='data-table-item'>{item?.tenantName}</div>
                    },
                    {
                        title: "",
                        width: "40%",
                        renderColumn: item => <Button title="Terminate" onClick={() => setSelectedTenant(item)} />
                    },

                ]}
            />
            <Modal className="offboard-modal" title="Offboard Tenant" show={seletedTenant} onClose={() => setSelectedTenant(null)}>
                <div className="row">
                    <div className="col">
                        <Label>Select Date</Label>
                        <DatePicker
                            title="Date"
                            date={date}
                            onChange={(date) => setDate(date)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Label>Remarks</Label>
                        <Input value={remarks} onChange={v => setRemarks(v)} />
                    </div>
                </div>

                <div className="actions">
                    <AsyncButton title="Submit" onClick={() => offboardTenant()} />
                </div>
            </Modal>
        </WidgetWrapper>
    )
}

export default OffboardTenant
