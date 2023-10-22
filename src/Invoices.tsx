import React, { useEffect, useState } from "react";
import { AsyncButton, Button, DataTable, DefaultLoader, FilterPanel, Input, Label, Modal, Select, TitleBar, ToggleFilter, WidgetWrapper, useAlert, useToast } from "uxp/components";
import { IContextProvider } from "./uxp";
import './invoices.scss';
interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string,

}
interface IInvoice {
    tenant: string;
    start: string;
    end: string;
    id: string;
    status:string;
    invoice:{
        tags:{
            tagName:string,
            type:string,
            consumption:number,
            value:string
        }[],
        metadata:{
            rates:{
                energy:number,
                water:number,
            },
            tax:number,
        }
        discount:number,
        total:number,
        onlyTotal:number,
    };
}
const ViewInvoice:React.FunctionComponent<IWidgetProps & {invoice:IInvoice,onClose?:()=>void,editable:boolean,onSave?:()=>void}> = (props) => {
        let invoice = props.invoice;

        let energyItem = invoice.invoice.tags.find((x)=>x.type=='energy');
        let waterItem = invoice.invoice.tags.find((x)=>x.type=='water');
        let total = invoice.invoice.total;
        let initialTotal = invoice.invoice.onlyTotal;
        let tenant = invoice.tenant;
        let discount = Number(invoice.invoice?.discount) || 0
        let tax = Number(invoice.invoice?.metadata?.tax) || 0
        let energyRate = Number(invoice.invoice?.metadata?.rates?.energy) || 0;
        let waterRate = Number(invoice.invoice?.metadata?.rates?.water) || 0;

        let energyAmount = Number(energyItem?.consumption) || 0;
        let energyCost = (energyAmount*energyRate);

        let waterAmount = Number(waterItem?.consumption) || 0;
        let waterCost = (waterAmount*waterRate);

        let [newDiscount,setNewDiscount] = useState((discount*100).toFixed(2));
        let newDiscountValue = (Number(newDiscount)||0)/100.0
        let newTotal = initialTotal*(1-newDiscountValue)*(1+tax);


        let alerts =useAlert();
        let toast = useToast();
        return <Modal autoSize={true}  className="tu-invoice-details" title={`Invoice ${invoice.id}`} show={!!invoice} onClose={()=>props?.onClose?.()}>
           <div className='tu-header'>
           <h1 style={{textTransform:'uppercase'}}>{tenant}</h1>
            <div className='tu-dates'>
                <div className='tu-date'>
                    <span>From</span>
                    <div>{new Date(invoice.start).toLocaleDateString()}</div>
                </div>
                <div className='tu-date'>
                    <span>To</span>
                    <div>{new Date(invoice.start).toLocaleDateString()}</div>
                </div>
            </div>
            </div>
            <div className='tu-id-items'>
                {energyItem && <div className='tu-id-item'>
                    <div className='desc energy'>
                        <div className='utility-pill energy'>
                            <div className='up-logo' />
                            <div className='up-txt' >Energy</div>
                        </div>
                    </div>
                    <div className='consumption'>{energyAmount.toFixed(2)+'kwh'}</div>
                    <div className='cost'>{'$' + energyCost.toFixed(2)}</div>
                </div>}
                {waterItem && <div className='tu-id-item'>
                    <div className='desc water'>
                    <div className='utility-pill water'>
                            <div className='up-logo' />
                            <div className='up-txt' >Water</div>
                        </div>
                    </div>
                    <div className='consumption'>{waterAmount.toFixed(2)+'kwh'}</div>
                    <div className='cost'>{'$' + waterCost.toFixed(2)}</div>
                </div>}
                {(discount || props.editable) && <div className='tu-id-item'>
                    <div className='desc discount'></div>
                    <div className='consumption'>{'Discount'}</div>
                    {!props.editable && <div className='cost'>{(discount*100).toFixed(2)+'%'}</div>}
                    {props.editable && <div className='cost editable'>
                        <Input className="tu-edit-discount" value={newDiscount} onChange={setNewDiscount}
                        />
                        <span className='discout-unit'>%</span>
                        </div>}
                </div>}
                {<div className='tu-id-item'>
                    <div className='desc discount'></div>
                    <div className='consumption'>{'Tax'}</div>
                    <div className='cost'>{(tax*100).toFixed(2)+'%'}</div>
                </div>}
                <div className='tu-id-item total'>
                    <div className='desc total'>Total</div>
                    <div className='consumption'>{}</div>
                    {!props.editable && <div className='cost'>{'$'+(total).toFixed(2)}</div>}
                    {props.editable && <div className='cost'>{'$'+(newTotal).toFixed(2)}</div>}
                    
                </div>
            </div>
            {
                (props.editable && (discount != newDiscountValue)) && <div className='actions'>
                    <AsyncButton title="Apply Discount" onClick={async ()=>{
                      try {  if (newDiscountValue > 1.0) {
                            await alerts.show("Um, your discount shouldn't be more than 100%.");
                            return;
                        }  

                        await props.uxpContext.executeAction('TenantUMS','EditInvoice',{invoice:invoice.id,discount:newDiscountValue},{json:true}) ;
                        toast.success('Discount applied');
                        props?.onSave();}
                        catch(e) {
                            alerts.show(e);
                        }
                    }} />
                </div>
            }
        </Modal>
    
};
const InvoiceList:React.FunctionComponent<IWidgetProps & {invoices:IInvoice[],editable:boolean,onUpdate?:()=>void}> = (props) => {
    let [selectedInvoice,setSelectedInvoice] = React.useState<IInvoice>(null);
    let toast = useToast();
    let alerts = useAlert();
    let _invoices = props.invoices.slice();
    _invoices.sort((a,b)=>Number(new Date(a.start)) - Number(new Date(b.start)));
    return <><DataTable
    className='tenants'
    data={_invoices}
    pageSize={5}
    activeClass="active"
    columns={[
        {
            title: "Tenant",
            width: "20%",
            renderColumn: item => <div className='data-table-item'>{item?.tenant}</div>
        },
        {
            title: "Start",
            width: "15%",
            renderColumn: item => <div className='data-table-item'>{new Date(item.start).toLocaleDateString()}</div>
        },
        {
            title: "End",
            width: "10%",
            renderColumn: item => <div className='data-table-item'>{new Date(item.end).toLocaleDateString()}</div>
        },
        {
            title: "Amount",
            width: "20%",
            renderColumn: item => <div className='data-table-item'>
                {'$' + (Number(item?.invoice?.total)||0).toFixed(2)}
                </div>
        },
        {
            title: "Status",
            width: "10%",
            renderColumn: item => <div className={'data-table-item invoice-status ' + item.status}>{item.status}</div>
        },
        {
            title: " ",
            width: "10%",
            renderColumn: item => <a href='#' onClick={()=>setSelectedInvoice(item)}>View Invoice</a>
        },
        {
            title: " ",
            width: "10%",
            renderColumn: item => <>
            {item.status != 'paid' && <AsyncButton title={'Mark as Paid'} onClick={async ()=>{
                try {
                    await props.uxpContext.executeAction('TenantUMS','UpdateInvoiceStatus',{invoice:item?.id,status:'paid'},{json:true});
                    toast.success('Marked as paid!💪');
                    props?.onUpdate();
                } catch(e) {
                    alerts.show(e);
                }

            }} />}
            </>
        },


    ]}
/>
{selectedInvoice && <ViewInvoice 
onSave={()=>props?.onUpdate()}
editable={props.editable && !(selectedInvoice.status=='paid')} invoice={selectedInvoice} uxpContext={props.uxpContext} onClose={()=>setSelectedInvoice(null)} />}
</>
};
export const TenantInvoices: React.FunctionComponent<IWidgetProps> = (props) => {
    const toast = useToast();
    const [tenants, setTenants] = useState([]);
    const [invoices,setInvoices] = useState([]);
    const [tenant,setTenant] = useState('');
    const [tick,setTick] = React.useState(1);
    React.useEffect(()=>{
        props.uxpContext.executeAction('TenantUMS','GetInvoices',{tenant},{json:true})
        .then((data)=>{
            setInvoices(data?.invoices ||[]);
        })
        .catch((e)=>{
            toast.error(e||'An error occurred while loading invoices');
            return;
        });
    },[tenant,tick])
    useEffect(()=>{
        props.uxpContext.executeAction('TenantUMS','GetAllTenants',{},{json:true})
        .then((data)=>setTenants(data?.tenants||[]));
    },[]);
    return (
        <WidgetWrapper>
            <TitleBar title='Invoices'>
                <FilterPanel>
                    <Select options={tenants} labelField="tenantName" valueField="tenantID"
                    selected={tenant} onChange={setTenant} />
                </FilterPanel>
            </TitleBar>
            <InvoiceList uxpContext={props.uxpContext} editable={true} invoices={invoices} onUpdate={()=>setTick(tick=>tick+1)} />
            
        </WidgetWrapper>
    )
};
export const MyInvoices: React.FunctionComponent<IWidgetProps> = (props) => {
    const toast = useToast();
    const [tenants, setTenants] = useState([]);
    const [invoices,setInvoices] = useState([]);
    const [tenant,setTenant] = useState('');

    React.useEffect(()=>{
        props.uxpContext.executeAction('TenantUMS','GetMyInvoices',{},{json:true})
        .then((data)=>{
            setInvoices(data?.invoices ||[]);
        })
        .catch((e)=>{
            toast.error(e||'An error occurred while loading invoices');
            return;
        });
    },[tenant])
   
    return (
        <WidgetWrapper>
            <TitleBar title='My Invoices'>
               
            </TitleBar>
            <InvoiceList editable={false} invoices={invoices} />
            
        </WidgetWrapper>
    )
};

