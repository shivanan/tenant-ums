import React, { useEffect, useState } from "react";
import { AsyncButton, Button, DataTable, DefaultLoader, FilterPanel, Input, Label, Modal, Select, TitleBar, ToggleFilter, WidgetWrapper, useToast } from "uxp/components";
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
const ViewInvoice:React.FunctionComponent<IWidgetProps & {invoice:IInvoice,onClose?:()=>void}> = (props) => {
        let invoice = props.invoice;

        let energyItem = invoice.invoice.tags.find((x)=>x.type=='energy');
        let waterItem = invoice.invoice.tags.find((x)=>x.type=='water');
        let total = invoice.invoice.total;
        let finalTotal = invoice.invoice.onlyTotal;
        let tenant = invoice.tenant;
        let discount = Number(invoice.invoice?.discount) || 0
        let tax = Number(invoice.invoice?.metadata?.tax) || 0
        let energyRate = Number(invoice.invoice?.metadata?.rates?.energy) || 0;
        let waterRate = Number(invoice.invoice?.metadata?.rates?.water) || 0;

        let energyAmount = Number(energyItem?.consumption) || 0;
        let energyCost = (energyAmount*energyRate);

        let waterAmount = Number(waterItem?.consumption) || 0;
        let waterCost = (waterAmount*waterRate);


        return <Modal  className="tu-invoice-details" title={`Invoice ${invoice.id}`} show={!!invoice} onClose={()=>props?.onClose?.()}>
            <div className='tu-id-items'>
                {energyItem && <div className='tu-id-item'>
                    <div className='desc energy'>Energy</div>
                    <div className='consumption'>{energyAmount.toFixed(2)+'kwh'}</div>
                    <div className='cost'>{'$' + energyCost.toFixed(2)}</div>
                </div>}
                {waterItem && <div className='tu-id-item'>
                    <div className='desc water'>Water</div>
                    <div className='consumption'>{waterAmount.toFixed(2)+'kwh'}</div>
                    <div className='cost'>{'$' + waterCost.toFixed(2)}</div>
                </div>}
                {discount && <div className='tu-id-item'>
                    <div className='desc discount'>Discount</div>
                    <div className='consumption'>{}</div>
                    <div className='cost'>{(discount*100).toFixed(2)+'%'}</div>
                </div>}
                {<div className='tu-id-item'>
                    <div className='desc discount'>Tax</div>
                    <div className='consumption'>{}</div>
                    <div className='cost'>{(tax*100).toFixed(2)+'%'}</div>
                </div>}
                <div className='tu-id-item'>
                    <div className='desc total'>Tax</div>
                    <div className='consumption'>{}</div>
                    <div className='cost'>{'$'+(total).toFixed(2)}</div>
                </div>
            </div>
        </Modal>
    
};
const InvoiceList:React.FunctionComponent<IWidgetProps & {invoices:IInvoice[]}> = (props) => {
    let [selectedInvoice,setSelectedInvoice] = React.useState<IInvoice>(null);

    return <><DataTable
    className='tenants'
    data={props.invoices}
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
            width: "15%",
            renderColumn: item => <div className='data-table-item'>{new Date(item.end).toLocaleDateString()}</div>
        },
        {
            title: "Status",
            width: "20%",
            renderColumn: item => <div className={'data-table-item invoice-status ' + item.status}>{item.status}</div>
        },
        {
            title: "Invoice",
            width: "10%",
            renderColumn: item => <a href='#' onClick={()=>setSelectedInvoice(item)}>View Invoice</a>
        },
        {
            title: " ",
            width: "20%",
            renderColumn: item => <>
            <a href='#'>Edit</a>
            </>
        },


    ]}
/>
{selectedInvoice && <ViewInvoice invoice={selectedInvoice} uxpContext={props.uxpContext} />}
</>
};
export const TenantInvoices: React.FunctionComponent<IWidgetProps> = (props) => {
    const toast = useToast();
    const [tenants, setTenants] = useState([]);
    const [invoices,setInvoices] = useState([]);
    const [tenant,setTenant] = useState('');

    React.useEffect(()=>{
        props.uxpContext.executeAction('TenantUMS','GetInvoices',{tenant},{json:true})
        .then((data)=>{
            setInvoices(data?.invoices ||[]);
        })
        .catch((e)=>{
            toast.error(e||'An error occurred while loading invoices');
            return;
        });
    },[tenant])
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
            <InvoiceList invoices={invoices} />
            
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
            <InvoiceList invoices={invoices} />
            
        </WidgetWrapper>
    )
};

