import React, { useEffect, useRef, useState } from "react";
import { AsyncButton, Button, DataTable, DefaultLoader, FilterPanel, IconButton, Input, Label, Modal, Select, TitleBar, ToggleFilter, WidgetWrapper, useToast } from "uxp/components";
import { IContextProvider } from "./uxp";
import './GlobalConfig.scss';
const EnergyIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC44NDgiIGhlaWdodD0iMzAuODQ5IiB2aWV3Qm94PSIwIDAgMzAuODQ4IDMwLjg0OSI+CiAgPHBhdGggaWQ9Ikljb25fbWV0cm8tcG93ZXIiIGRhdGEtbmFtZT0iSWNvbiBtZXRyby1wb3dlciIgZD0iTTE0LjEzOSwxLjkyOCwyLjU3MSwxNy4zNTJIMTQuMTM5TDYuNDI3LDMyLjc3NywzMy40MTksMTMuNUgxNy45OTVMMjkuNTYzLDEuOTI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTcxIC0xLjkyOCkiLz4KPC9zdmc+Cg==';
interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}
const Model = 'TenantUMS';

function normalizeValue(v: string) {
    return (Number(v) || 0).toFixed(2);
}
export const PriceConfig: React.FunctionComponent<IWidgetProps> = (props) => {
    const [energyRate, setEnergyRate] = React.useState('');
    const [waterRate, setWaterRate] = React.useState('');
    const [tax, setTax] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    const [html, setHtml] = React.useState('');
    const toast = useToast();
    const fileRef = useRef();
    function uploadInvoiceTemplate() {
        let p = fileRef.current as any;
        if (!p) {
            return;
        }
        p?.click?.();

    }
    function readFile(e: any) {
        var file = e.target.files[0];
        console.log(file);
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function (e: any) {
            setHtml(e.target.result);
            console.log(e.target.result);
        }
        reader.readAsText(file)
    }
    function downloadInvoice() {
        if (!html) return;
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(html));
        element.setAttribute('download', 'invoice-template.html');
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
      }
    React.useEffect(() => {
        props.uxpContext.executeAction(Model, 'GetGlobalSettings', {}, { json: true }).then(settings => {
            let s = settings?.settings || {};
            setEnergyRate(normalizeValue(s.energyRate));
            setWaterRate(normalizeValue(s.waterRate));
            setTax(((Number(s.taxRate) || 0) * 100).toFixed(3));
            setHtml(s.invoiceHtml || '');
            setLoading(false);
        }).catch((e) => {
            toast.error(e || 'An error occurred while loading settings');

        });
    }, []);
    return <WidgetWrapper className="tu-price-config"

    >

        {loading && <DefaultLoader />}

        {!loading && <>
            <TitleBar

                title="Global Tenant Utility Metering Configuration">

            </TitleBar>
            <div className='tu-config-container'>
                <div className='tu-col'>
                    <div className='tu-c'>
                        <h3 className="energy">
                            <span className='tu-icon energy' />
                            Energy Rates</h3>
                        <div className='tu-energy'>
                            <label>Per-Unit Rate</label>
                            <div className='tu-unit'>$</div>
                            <Input  value={energyRate} onChange={setEnergyRate} />
                            <div className='tu-unit'>/kwh</div>

                        </div>
                    </div>
                    <div className='tu-c'>
                        <h3 className="water">
                            <span className='tu-icon water' />
                            Water Rates</h3>

                        <div className='tu-water'>
                            <label>Per-Unit Rate</label>
                            <div className='tu-unit'>$</div>
                            <Input value={waterRate} onChange={setWaterRate} />
                            <div className='tu-unit'>/ltr</div>
                        </div>
                    </div>
                </div>
                <div className='tu-col'>

                    <div className='tu-c'>
                        <h3 className="tax">
                            <span className='tu-icon tax' />
                            Tax Rate</h3>

                        <div className='tu-tax'>
                            <label>Rate</label>
                            <div className='tu-unit'></div>
                            <Input value={tax} onChange={setTax} />
                            <div className='tu-unit'>%</div>
                        </div>
                    </div>
                    <div className='tu-c'>
                        <h3 className="invoice">
                            <span className='tu-icon invoice' />
                            Invoice Template</h3>
                            <div className='tu-invoice'>
                                <input accept="text/html" onChange={readFile} style={{display:'none'}} type='file' ref={fileRef} />
                                <a className='tu-upload' onClick={uploadInvoiceTemplate}>Select a template</a>
                                <div className='tu-invoice-content'>
                                    {html.length ? 
                                    <>{`${html.length} bytes`}
                                    <IconButton type="arrow-down" onClick={downloadInvoice} />
                                    </>
                                    :''}
                                </div>

                            </div>
                    </div>
                </div>
            </div>
            <div className='tu-action'>
                <div className='save'>
                    <AsyncButton title="Save" onClick={async () => {
                        try {
                            await props.uxpContext.executeAction(Model, 'SaveGlobalSettings', {
                                settings: {
                                    energyRate: Number(energyRate),
                                    waterRate: Number(waterRate),
                                    taxRate: Number(tax) / 100.0,
                                    invoiceHtml: html,
                                },
                            });
                            toast.success('Configuration saved!');
                        } catch (e) {
                            toast.error(e || 'An error ocurred while saving');
                        }
                    }} />
                </div>
            </div>
        </>
}
    </WidgetWrapper >
}