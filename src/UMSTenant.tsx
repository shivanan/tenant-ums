import React, { useEffect, useState } from "react";
import { AsyncButton, Button, DataTable, FilterPanel, Input, Label, Modal, Select, TitleBar, WidgetWrapper, useToast } from "uxp/components";
import { IContextProvider } from "./uxp";

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

const UMSTenant: React.FunctionComponent<IWidgetProps> = (props) => {
    const toast = useToast();
    const [tenants, setTenants] = useState([]);
    const [meters, setMeters] = useState([]);
    const [budget, setBudget] = useState('');
    const [registeredMeters, setRegisteredMeters] = useState([]);
    const [selectedTenant, setSelectedTenant] = useState(null);
    const [selectedMeter, setSelectedMeter] = useState(null);
    const [addMeter, setAddMeter] = useState(false);
    const [error, setError] = useState(null);

    const [selectedTenantMeters, setSelectedTenantMeters] = useState([]);
    const [deleteMeter, setDeleteMeter] = useState(null);

    useEffect(() => {
        getTenants();
        getMeters();
        getAllRegisteredMeters();
    }, []);

    async function getTenants() {
        const res = await props.uxpContext.executeAction('TenantUMS', 'GetAllTenants', {});
        const jsonObj = JSON.parse(res);
        setTenants(jsonObj?.tenants);
    }

    async function getMeters() {
        const res = await props.uxpContext.executeAction('TenantUMS', 'GetAllMeters', {});
        const jsonObj = JSON.parse(res);
        setMeters(jsonObj);
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

        if (!budget) {
            setError("Budget can not be empty")
            return;
        }

        const params = {
            budget,
            meterId: selectedMeter,
            tenantId: selectedTenant?.tenantID
        }
        const res = await props.uxpContext.executeAction('TenantUMS', 'AddMeter', params);
        res === '{}' ?
            toast.error("This meter is already in use, please check for another meter") :
            toast.info("Meter added successfully!!!");
        setBudget('');
        setAddMeter(false);
        setSelectedMeter(null);
        getAllRegisteredMeters();
    }

    async function deleteMeterForTenant() {

        const params = {
            meterId: deleteMeter,
            tenantId: selectedTenant?.tenantID
        }

        const res = await props.uxpContext.executeAction('TenantUMS', 'DeleteMeterForTenant', params);
        setAddMeter(false);
        getAllRegisteredMeters();
    }

    function getLabelForMeter(meterId: string) {
        const meter = meters.filter(m => m.id === meterId)
        return meter[0]?.name;
    }    

    function getMetersForTenant(tenantID: string) {
        const meters = registeredMeters.filter(m => m.tenant === tenantID);
        const meterIds = meters.map(m => m.meter);
        const meterName = meterIds.map(m => getLabelForMeter(m));
        return meterName.join(', ') || "No Meters Found";
    }

    function handleEdit(item: any) {
        setAddMeter(true);
        setSelectedTenant(item);
        const tenantMeters = registeredMeters.filter(r => r.tenant === item.tenantID);
        setSelectedTenantMeters(tenantMeters);
        
    }

    return (
        <WidgetWrapper>
            <TitleBar title='UMS Tenants'>
                {/* <FilterPanel>
                </FilterPanel> */}
            </TitleBar>
            <DataTable
                className='tenants'
                data={tenants}
                pageSize={5}
                activeClass="active"
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
                    {
                        title: "Actions",
                        width: "30%",
                        renderColumn: item => <Button title="Edit" onClick={() => handleEdit(item)}/>
                    },

                ]}
            />
            <Modal className="add-meter" title="Register Meter" show={addMeter} onClose={() => setAddMeter(false)}>
                {/* <div className="tenant-name">
                    <p className="label">Name : </p>
                    <p>{selectedTenant?.tenantName}</p>
                </div> */}
                <div className="register-meter">
                    <div className="row">
                        <div className="col">
                            <Label>Select Meter</Label>
                            <Select
                                options={meters}
                                selected={selectedMeter}
                                valueField="id"
                                labelField="name"
                                onChange={v => {
                                    setError(null);
                                    setSelectedMeter(v);
                                }}
                            />
                        </div>
                        <div className="col">
                            <Label>Budget</Label>
                            <Input
                                type="number"
                                value={budget}
                                onChange={v => {
                                    setError(null);
                                    setBudget(v);
                                }}
                            />
                        </div>
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div className="actions">
                            <AsyncButton title="Add Meter" onClick={() => addMeterForTenant()} />
                    </div>
                </div>

                

                <div className="delete-meter">
                    <div className="col">
                        <Label>Select Meter</Label>
                        <Select
                            options={selectedTenantMeters}
                            selected={deleteMeter}
                            valueField="meter"
                            labelField="meter"
                            onChange={v => {
                                setError(null);
                                setDeleteMeter(v)
                            }}
                        />
                    </div>
                    <div className="actions">
                        <AsyncButton title="Delete Meter" onClick={() => deleteMeterForTenant()} />
                    </div>
                    
                </div>
            </Modal>
        </WidgetWrapper>
    )
};

export default UMSTenant;