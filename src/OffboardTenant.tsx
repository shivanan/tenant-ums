import React, { useEffect, useState } from "react";
import { AsyncButton, Button, DataTable, DatePicker, Input, Label, Modal, TextArea, TitleBar, WidgetWrapper, useAlert, useToast } from "uxp/components";
import { IContextProvider } from "./uxp";

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

const OffboardTenant: React.FunctionComponent<IWidgetProps> = (props) => {
    const toast = useToast();
    const [details, setDetails] = useState([]);
    const [tenants, setTenants] = useState([]);
    const [date, setDate] = useState(new Date());
    const [remarks, setRemarks] = useState(null);
    const [seletedTenant, setSelectedTenant] = useState(null);
    const [offboardRequest, setOffboardRequest] = useState([]);

    const [edit, setEdit] = useState(false);
    const [terminate, setTerminate] = useState(false);

    const [selectedTenantDetails, setSelectedTenantDetails] = useState({
        department: '',
        wbsno: '',
        gfa: '',
        deposit: '',
        billingRecipientContact: {
            name: '',
            email: '',
            phone: '',
            address: ''
        },
        pointOfContact: {
            name: '',
            email: '',
            phone: '',
            address: ''
        }
    });

    useEffect(() => {
        getTenants();
        getTenantsDetails();
    }, []);

    useEffect(() => {
        getOffboardRequest();
        const fetchInterval = setInterval(getOffboardRequest, 10000);
        return () => clearInterval(fetchInterval);
    }, [])

    async function getTenants() {
        const res = await props.uxpContext.executeAction('TenantUMS', 'GetAllTenants', {});
        const jsonObj = JSON.parse(res);
        setTenants(jsonObj?.tenants);
    };

    async function getTenantsDetails() {
        const res = await props.uxpContext.executeAction('TenantUMS', 'GetTenantDetails', {});
        const jsonObj = JSON.parse(res);
        setDetails(jsonObj);
    };

    async function getOffboardRequest() {
        const res = await props.uxpContext.executeAction('TenantUMS', 'GetOffboardingItems', {});
        const jsonObj = JSON.parse(res);
        setOffboardRequest(jsonObj);
    };

    function isRequestAlreadyThere(tenantId: string) {
        const tenant = offboardRequest.find(request => request.tenant === tenantId);
        if (tenant?.status === 'pending') {
            return true;
        }
        return false;
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
        setTerminate(false);
        setSelectedTenant('');

    }

    function handleEdit(item: any) {
        setEdit(true);
        setSelectedTenant(item);
        const record = details.filter(d => d?.tenant === item.tenantID);
        setSelectedTenantDetails(record[0]);
    }

    function getTenantField(tenantID: string, field: string) {
        const tenant = details.filter(d => d?.tenant === tenantID);

        if (field === 'department') {
            return tenant[0]?.department ? tenant[0]?.department : "Not available";
        }

        if (field === 'deposit') {
            return tenant[0]?.deposit ? `S$${(tenant[0]?.deposit)}` : "Not available";
        }

    };

    function handleDetailsChange(field: string, value: any, subField?: string) {
        let updated;
        if (!subField) {
            updated = {
                ...selectedTenantDetails,
                [field]: value
            }
        } else {
            const { billingRecipientContact, pointOfContact } = selectedTenantDetails;
            let fieldValues;
            if(field === 'billingRecipientContact') {
                fieldValues = billingRecipientContact
            };
            if(field === "pointOfContact") {
                fieldValues = pointOfContact
            }

            updated = {
                ...selectedTenantDetails,
                [field]: {
                    ...fieldValues,
                    [subField]: value
                }
            }
        }
        setSelectedTenantDetails(updated);
    };

    async function handleSubmitDetails() {
        const record = details.filter(d => d?.tenant === seletedTenant.tenantID);
        const { department, wbsno, gfa, deposit, billingRecipientContact, pointOfContact } = selectedTenantDetails;

        if (record.length === 0) {
            console.log("New User");                
            const params = {
                tenant: seletedTenant.tenantID,
                department, wbsno, gfa, deposit,
                billingRecipientContact: [billingRecipientContact],
                pointOfContact: [pointOfContact]
            };
            
            try {
                await props.uxpContext.executeAction('TenantUMS', 'AddTenantDetails', params);
                toast.info("Tenant details added sucessfulyy!!!!");
                
            } catch (err) {
                toast.error(err)
            }

        } else {
            const params = {
                tenant: seletedTenant.tenantID,
                department, wbsno, gfa, deposit,
                billingRecipientContact: [billingRecipientContact],
                pointOfContact: [pointOfContact]
            };

            await props.uxpContext.executeAction('TenantUMS', 'UpdateTenantDetails', params);
            toast.info("Tenant details updated sucessfulyy!!!!");
        }
        setEdit(false);
        getTenantsDetails();

    }

    return (
        <WidgetWrapper>
            <TitleBar title='Tenants Details'>
            </TitleBar>
            <DataTable
                className='tenants offboard-tenant'
                data={tenants}
                pageSize={5}
                activeClass="active"
                columns={[
                    {
                        title: "Name",
                        width: "30%",
                        renderColumn: item => <div className='data-table-item'>{item?.tenantName}</div>
                    },
                    {
                        title: "Department",
                        width: "25%",
                        renderColumn: item => <div className='data-table-item'>{getTenantField(item?.tenantID, "department")}</div>
                    },
                    {
                        title: "Deposit",
                        width: "25%",
                        renderColumn: item => <div className='data-table-item'>{getTenantField(item?.tenantID, "deposit")}</div>
                    },
                    {
                        title: "",
                        width: "20%",
                        renderColumn: item =>
                            <div className="actions">
                                <Button title="Edit" className="edit-button" onClick={() => handleEdit(item)} />
                                {!isRequestAlreadyThere(item?.tenantID) ?
                                    <Button title="Terminate" className="teminate-button" onClick={() => {
                                        setTerminate(true);
                                        setRemarks(null);
                                        setSelectedTenant(item);
                                    }} /> : null
                                }
                            </div>
                    },

                ]}
            />

            <Modal className="edit-tenant-details" title="Edit Tenant Details" show={edit} onClose={() => setEdit(false)}>
                <div className="row">
                    <div className="col">
                        <Label className="main">Department</Label>
                        <Input value={selectedTenantDetails?.department} onChange={v => handleDetailsChange("department", v)} />
                    </div>
                    <div className="col">
                        <Label className="main">WBS No</Label>
                        <Input value={selectedTenantDetails?.wbsno} onChange={v => handleDetailsChange("wbsno", v)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Label className="main">Gross Floor Area </Label>
                        <Input value={selectedTenantDetails?.gfa} onChange={v => handleDetailsChange("gfa", v)} />
                    </div>
                    <div className="col">
                        <Label className="main">Deposit</Label>
                        <Input type="number" value={selectedTenantDetails?.deposit} onChange={v => handleDetailsChange("deposit", v)} />
                    </div>
                </div>

                <Label className="main multi">Point of Contact (POC)</Label>
                <div className="row">
                    <div className="col">
                        <Label>Name </Label>
                        <Input value={selectedTenantDetails?.pointOfContact?.name} onChange={v => handleDetailsChange("pointOfContact", v, "name")} />

                        <Label>Phone</Label>
                        <Input value={selectedTenantDetails?.pointOfContact?.phone} onChange={v => handleDetailsChange("pointOfContact", v, "phone")} />
                    </div>

                    <div className="col">
                        <Label>Email</Label>
                        <Input value={selectedTenantDetails?.pointOfContact?.email} onChange={v => handleDetailsChange("pointOfContact", v, "email")} />

                        <Label>Address</Label>
                        <Input value={selectedTenantDetails?.pointOfContact?.address} onChange={v => handleDetailsChange("pointOfContact", v, "address")} />
                    </div>
                </div>

                <Label className="main multi">Billing Recipient Contact(BRC)</Label>
                <div className="row">
                    <div className="col">
                        <Label>Name </Label>
                        <Input value={selectedTenantDetails?.billingRecipientContact?.name} onChange={v => handleDetailsChange("billingRecipientContact", v, "name")} />

                        <Label>Phone</Label>
                        <Input value={selectedTenantDetails?.billingRecipientContact?.phone} onChange={v => handleDetailsChange("billingRecipientContact", v, "phone")} />
                    </div>

                    <div className="col">
                        <Label>Email</Label>
                        <Input value={selectedTenantDetails?.billingRecipientContact?.email} onChange={v => handleDetailsChange("billingRecipientContact", v, "email")} />

                        <Label>Address</Label>
                        <Input value={selectedTenantDetails?.billingRecipientContact?.address} onChange={v => handleDetailsChange("billingRecipientContact", v, "address")} />
                    </div>
                </div>

                <div className="actions">
                    <AsyncButton title="Submit" onClick={() => handleSubmitDetails()} />
                </div>
            </Modal>

            <Modal className="offboard-modal" title="Offboard Tenant" show={terminate} onClose={() => { setSelectedTenant(null); setTerminate(false) }}>
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
                        <TextArea value={remarks} onChange={v => setRemarks(v)} />
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
