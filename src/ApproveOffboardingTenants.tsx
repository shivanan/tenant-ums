import React, { useEffect, useState } from "react";
import { AsyncButton, DataTable, TitleBar, WidgetWrapper, useAlert } from "uxp/components";
import { IContextProvider } from "./uxp";

interface IWidgetProps {
  uxpContext?: IContextProvider,
  instanceId?: string
}


const ApproveOffboardingTenants: React.FunctionComponent<IWidgetProps> = (props) => {
  const alerts = useAlert();
  const [tenants, setTenants] = useState([]);
  const [offboardTenants, setOffboardTenants] = useState([]);

  useEffect(() => {
    getTenants();
    getOffboardTenants();
  }, []);

  async function getTenants() {
    const res = await props.uxpContext.executeAction('TenantUMS', 'GetAllTenants', {});
    const jsonObj = JSON.parse(res);
    setTenants(jsonObj?.tenants);
  };

  async function getOffboardTenants() {
    const res = await props.uxpContext.executeAction('TenantUMS', 'GetOffboardingItems', {});
    const jsonObj = JSON.parse(res);
    setOffboardTenants(jsonObj);
  };

  async function approveOffboardTenant(item: any) {
    const res = await alerts.confirm("Are you sure want to aproove this tenant offboarding?");
    if (!res) {
      return;
    }

    try {
      const res = await props.uxpContext.executeAction('TenantUMS', 'ApproveTenantOffboarding', { tenant: item?.tenant });
    } catch (err) {
      console.log({ err });
    }
    getOffboardTenants();
  };

  function getLabelForTenant(tenantId: string) {
    const record = tenants.filter(t => t.tenantID === tenantId);
    return record[0]?.tenantName;
  };


  function getDate(date: string) {
    const dateString = `${new Date(date).getDate()}-${new Date(date).getMonth()}-${new Date(date).getFullYear()}`;
    return dateString
  }

  return (
    <WidgetWrapper>
      <TitleBar title='Offboarding Requests'>
      </TitleBar>
      <DataTable
        className='tenants'
        data={offboardTenants}
        pageSize={5}
        activeClass="active"
        columns={[
          {
            title: "Name",
            width: "35%",
            renderColumn: item => <div className='data-table-item'>{getLabelForTenant(item?.tenant)}</div>
          },
          {
            title: "Due",
            width: "22.5%",
            renderColumn: item => <div className='data-table-item'>{`S$${item?.pendingDues}`}</div>
          },
          {
            title: "Termination Date",
            width: "22.5%",
            renderColumn: item => <div className='data-table-item'>{getDate(item?.TerminatedDate)}</div>
          },
          {
            title: "",
            width: "20%",
            renderColumn: item => <AsyncButton title="Approve" onClick={() => approveOffboardTenant(item)} />
          },

        ]}
      />

    </WidgetWrapper>
  )
}

export default ApproveOffboardingTenants
