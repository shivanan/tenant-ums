import React, { useEffect, useState } from "react";
import { AsyncButton, DataTable, FilterPanel, Label, Modal, Select, TitleBar, WidgetWrapper, useToast } from "uxp/components";
import { IContextProvider } from "./uxp";

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

const METERS = [
    { name: 'METER1', id: 'PH_KWH1' },
    { name: 'METER2', id: 'PH_KWH2' },
    { name: 'METER3', id: 'PH_KWH3' },
    { name: 'METER4', id: 'PH_KWH4' },
    { name: 'METER5', id: 'PH_KWH5' }
]

function getLabelForMeter(meterId: string) {
    const meter = METERS.filter(m => m.id === meterId)
    return meter[0]?.name;
}

const UMSTenant: React.FunctionComponent<IWidgetProps> = (props) => {
    const toast = useToast();
    const [tenants, setTenants] = useState([]);
    const [registeredMeters, setRegisteredMeters] = useState([]);
    const [selectedTenant, setSelectedTenant] = useState(null);
    const [selectedMeter, setSelectedMeter] = useState(null);
    const [addMeter, setAddMeter] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getTenants();
        getAllRegisteredMeters();
    }, []);

    async function getTenants() {
        const res = await props.uxpContext.executeAction('TenantUMS', 'GetAllTenants', {});
        const jsonObj = JSON.parse(res);
        setTenants(jsonObj?.tenants);
    }

    async function getAllRegisteredMeters() {
        const res = await props.uxpContext.executeAction('TenantUMS', 'GetAllRegisteredMeters', {});
        const jsonObj = JSON.parse(res);
        setRegisteredMeters(jsonObj);
    }

    async function addMeterForTenant() {
        if (!selectedMeter) {
            setError("Please select a meter from the list")
            return;
        }

        const params = {
            meterId: selectedMeter,
            tenantId: selectedTenant?.tenantID
        }
        const res = await props.uxpContext.executeAction('TenantUMS', 'AddMeter', params);
        res === '{}' ?
            toast.error("This meter is already in use, please check for another meter") :
            toast.info("Meter added successfully!!!");
        setAddMeter(false);
        setSelectedMeter(null);
        getAllRegisteredMeters();
        // return;
    }

    function getMetersForTenant(tenantID: string) {
        const meters = registeredMeters.filter(m => m.tenant === tenantID);
        const meterIds = meters.map(m => m.meter);
        const meterName = meterIds.map(m => getLabelForMeter(m));        
        return meterName.join(', ') || "No Meters Found";
    }

    return (
        <WidgetWrapper>
            <TitleBar title='UMS Tenants'>
                {/* <FilterPanel>
                </FilterPanel> */}
            </TitleBar>
            <DataTable
                className='tenants'
                activeClass="active"
                data={tenants}
                pageSize={5}
                onClickRow={item => {
                    setAddMeter(true);
                    setSelectedTenant(item)
                }}
                columns={[
                    {
                        title: "Name",
                        width: "40%",
                        renderColumn: item => <div className='data-table-item'>{item?.tenantName}</div>
                    },
                    {
                        title: "Meters",
                        width: "30%",
                        renderColumn: item => <div className='data-table-item'>{getMetersForTenant(item?.tenantID)}</div>
                    },

                ]}
            />
            <Modal className="add-meter" title="Register Meter" show={addMeter} onClose={() => setAddMeter(false)}>
                
                <div className="row">
                    <p className="label">Name : </p>
                    <p>{selectedTenant?.tenantName}</p>
                </div>
                
                <div className="select-meter">
                    <Label>Select Meter</Label>
                    <Select
                        options={METERS}
                        selected={selectedMeter}
                        valueField="id"
                        labelField="name"
                        onChange={v => {
                            setError(null);
                            setSelectedMeter(v);
                        }}
                    />
                </div>
                
                {error && <div className="error">{error}</div>}
                <div className="actions">
                    <AsyncButton title="Submit" onClick={() => addMeterForTenant()} />
                </div>
            </Modal>
        </WidgetWrapper>
    )
};

export default UMSTenant;