import React from 'react';

import FormModal from './form';

interface FormAddNewCustomerProps {
  open: boolean;
  onClose: () => void;
}

const AddNewCustomer: React.FC<FormAddNewCustomerProps> = ({ open, onClose }) => {
  return (
    <div>
      <FormModal
        open={open}
        onClose={onClose}
        title="Add New Customer"
        fileTitle="Avatar"
        onAddImage={() => {}}
        fields={[
          {
            labelTitle: 'First Name',
            label: '',
          },
          {
            labelTitle: 'Last Name',
            label: '',
          },
          {
            labelTitle: 'Email',
            type: 'email',
            label: '',
          },
          {
            labelTitle: 'Phone',
            type: 'tel',
            label: '',
          },
        ]}
        address={[
          {
            label: 'Street Address',
          },
          {
            label: 'City',
          },
          {
            label: 'State/Province',
          },
          {
            label: 'Zip Code',
          },
        ]}
        onCancel={() => {}}
        onSave={() => {
          console.log('Save clicked');
          onClose();
        }}
        saveText="Save Customer"
      />
    </div>
  );
};

export default AddNewCustomer;
