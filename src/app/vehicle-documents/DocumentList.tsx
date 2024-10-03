"use client"

import React from 'react';
import DocumentCard from './DocumetCard';

const DocumentList = ({ data }) => {
  return (
    <div className="flex justify-center space-x-4 flex-wrap py-8">
      {
        data.map((veh)=>{
          return <DocumentCard data={veh} />
        })
      }
    </div>
  );
};

export default DocumentList;
