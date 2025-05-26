import type React from "react";
import Template from "./Template";


const Dashboard: React.FC = () => {
  return(
    <>
      <Template isMenu selectDomain="Dashboard">
        <div>
          <p>
            dashboard
          </p>
        </div>
      </Template>
    </>
  )
}


export default Dashboard;