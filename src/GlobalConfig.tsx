import React, { useEffect, useState } from "react";
import { AsyncButton, Button, DataTable, DefaultLoader, FilterPanel, Input, Label, Modal, Select, TitleBar, ToggleFilter, WidgetWrapper, useToast } from "uxp/components";
import { IContextProvider } from "./uxp";
import './GlobalConfig.scss';
const EnergyIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC44NDgiIGhlaWdodD0iMzAuODQ5IiB2aWV3Qm94PSIwIDAgMzAuODQ4IDMwLjg0OSI+CiAgPHBhdGggaWQ9Ikljb25fbWV0cm8tcG93ZXIiIGRhdGEtbmFtZT0iSWNvbiBtZXRyby1wb3dlciIgZD0iTTE0LjEzOSwxLjkyOCwyLjU3MSwxNy4zNTJIMTQuMTM5TDYuNDI3LDMyLjc3NywzMy40MTksMTMuNUgxNy45OTVMMjkuNTYzLDEuOTI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTcxIC0xLjkyOCkiLz4KPC9zdmc+Cg==';
interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}
const Model = 'TenantUMS';

function normalizeValue(v:string) {
    return (Number(v)||0).toFixed(2);
}
export const PriceConfig: React.FunctionComponent<IWidgetProps> = (props) => {
    const [energyRate,setEnergyRate] = React.useState('');
    const [waterRate,setWaterRate] = React.useState('');
    const [loading,setLoading] = React.useState(true);
    const toast = useToast();
    React.useEffect(()=>{
        props.uxpContext.executeAction(Model,'GetGlobalSettings',{},{json:true}).then(settings=>{
            let s = settings?.settings ||{};
            setEnergyRate(normalizeValue(s.energyRate));
            setWaterRate(normalizeValue(s.waterRate));
            setLoading(false);
        }).catch((e)=>{
            toast.error(e||'An error occurred while loading settings');

        });
    },[]);
    return <WidgetWrapper className="tu-price-config"

    >
       
        {loading &&  <DefaultLoader />}

        {!loading && <>
            <TitleBar 

        title="Global Tenant Utility Metering Configuration">
      
        </TitleBar>
        <div className='tu-config-container'>
            <h3 className="energy">
                <span className='tu-icon energy' />
                Energy Rates</h3>
        <div className='tu-energy'>
                <label>Per-Unit Rate</label>
                <div className='tu-unit'>$</div>
                <Input value={energyRate} onChange={setEnergyRate}   />
                <div className='tu-unit'>/kwh</div>

            </div>
            <h3 className="water">
            <span className='tu-icon water' />
                Water Rates</h3>

            <div className='tu-water'>
                <label>Per-Unit Rate</label>
                <div className='tu-unit'>$</div>
                <Input value={waterRate} onChange={setWaterRate}   />
                <div className='tu-unit'>/ltr</div>
            </div>
            <div className='action'>
                <div className='save'>
                <AsyncButton title="Save" onClick={async ()=>{
                    try {
                    await props.uxpContext.executeAction(Model,'SaveGlobalSettings',{settings:{energyRate:Number(energyRate),waterRate:Number(waterRate)}});
                    toast.success('Configuration saved!');
                    }catch(e) {
                        toast.error(e||'An error ocurred while saving');
                    }
                }} />
                </div>
            </div>
            </div></>}
    </WidgetWrapper>
}