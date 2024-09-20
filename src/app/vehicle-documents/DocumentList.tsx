import React from 'react';
import DocumentCard from './DocumetCard';

const DocumentList = ({ documents }) => {
  return (
    <div className="flex justify-center space-x-4 flex-wrap py-8">
      {documents.map((doc, index) => (
        <DocumentCard
       
        />
      ))}
    </div>
  );
};

export default DocumentList;
