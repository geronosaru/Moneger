import type React from "react";


type DomainItemProps = {
  domain: string;
  isActive: boolean;
};

const DomainItem: React.FC<DomainItemProps> = ({domain, isActive}) => {
  return(
    <>
      <p className={isActive ? 'text-purple-600' : 'text-slate-600'}>
        {domain}
      </p>
    </>
  );
};


export default DomainItem;