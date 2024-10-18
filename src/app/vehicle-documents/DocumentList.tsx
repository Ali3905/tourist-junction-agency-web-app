"use client"

import React from 'react';
import DocumentCard from './DocumetCard';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DocumentList = ({ data }: any) => {
  return (
    <div className="flex justify-center space-x-4 flex-wrap py-8">
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.map((veh: any, i: number)=>{
          return <DocumentCard data={veh} key={i} />
        })
      }
    </div>
  );
};

export default DocumentList;
