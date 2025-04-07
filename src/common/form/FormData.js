import { City } from "country-state-city";
const indianCities = City.getCitiesOfCountry("IN");
const cities = [];
indianCities.map((item) => {
    cities.push(item.name);
})
import Avatar1 from '../../assets/images/Avatar1.svg'
import Avatar2 from '../../assets/images/Avatar2.svg'
import Avatar3 from '../../assets/images/Avatar3.svg'
import Avatar4 from '../../assets/images/Avatar4.svg'
import Avatar5 from '../../assets/images/Avatar5.svg'
import Avatar6 from '../../assets/images/Avatar6.svg'
import fleet from '../../assets/icons/sidebarFleetOperationIcon.svg'
import vendor from '../../assets/icons/sidebarVendorManagement.svg'
import order from '../../assets/icons/sidebarOrderManagementIcon.svg'
import hr from '../../assets/icons/sidebarHRIcon.svg'
import maintenance from '../../assets/icons/sidebarMaintenanceManagementIcon.svg'
import fuel from '../../assets/icons/sidebarFuelMonitoringIcon.svg'
import business from '../../assets/icons/sidebarBusinessAnalyticsIcon.svg'
import accounts from '../../assets/icons/sidebarAccountsOfBusinessIcon.svg'
import invoice from '../../assets/icons/sidebarInvoiceGenerationIcon.svg'
export const loginPage = [
    {
        name: 'email',
        type: 'email',
        inputType: 'movePlaceholderUp',
        placeholder: 'login.email',
    },
    {
        name: 'password',
        type: 'password',
        inputType: 'movePlaceholderUp',
        placeholder: 'login.password',
    }
]

export const signupPage = [
    {
        name: 'firstName',
        type: 'text',
        inputType: 'movePlaceholderUp',
        placeholder: 'signup.firstName',
    },
    {
        name: 'lastName',
        type: 'text',
        inputType: 'movePlaceholderUp',
        placeholder: 'signup.lastName',
    },
    {
        name: 'email',
        type: 'email',
        inputType: 'movePlaceholderUp',
        placeholder: 'signup.email',
    },
    {
        name: 'primaryMobile',
        type: 'text',
        inputType: 'movePlaceholderUp',
        placeholder: 'signup.phoneNumber',
    },
    {
        name: 'password',
        type: 'password',
        inputType: 'movePlaceholderUp',
        placeholder: 'signup.password',
    },
    {
        name: 'secondPassword',
        type: 'password',
        inputType: 'movePlaceholderUp',
        placeholder: 'signup.retypePassword',
    }
]

export const forgotPassword = [
    {
        name: 'email',
        type: 'text',
        inputType: 'text',
        placeholder: 'forgot.enterEmail',
    }
]
export const setNewPassword = [
    {
        name: 'newPassword',
        type: 'password',
        inputType: 'text',
        placeholder: 'setNew.newPassword',
    },
    {
        name: 'secondPassword',
        type: 'password',
        inputType: 'text',
        placeholder: 'setNew.recheckNewPassword',
    }
]

export const organizationDetail = [
    {
        name: 'organisationName',
        title: 'Organization Name',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'organization.organizationName'
    },
    {
        title: "Industry Type",
        name: 'industryType',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'organization.industryType'
    },
    {
        title: 'Experience',
        name: 'experience',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'organization.experience'
    },
    {
        title: 'No. Of Trucks',
        name: 'numberOfTrucks',
        type: 'dropdown',
        inputType: 'dropdown',
        placeholder: 'organization.numberOfTrucks',
        options: ['0-10', '11-20', '21-30', '31-40', '41-50']
    },
    {
        name: 'numberOfDrivers',
        title: 'No. Of Drivers',
        type: 'dropdown',
        inputType: 'dropdown',
        placeholder: 'organization.numberOfDrivers',
        options: ['0-10', '11-20', '21-30', '31-40', '41-50']
    },
    {
        name: "organisationCity",
        title: 'City',
        type: 'dropdown',
        inputType: 'dropdown',
        placeholder: 'organization.city',
        options: cities
    },
    {
        name: 'address',
        title: 'Address',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'organization.address'
    }
]
export const profilePageOrganizationDetail = [
    {
        name: 'organisationName',
        title: 'Organization Name',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Organization Name'
    },
    {
        title: "Industry Type",
        name: 'industryType',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Industry Type'
    },
    {
        title: 'Experience',
        name: 'experience',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Experience'
    },
    {
        title: 'No. Of Trucks',
        name: 'numberOfTrucks',
        type: 'dropdown',
        inputType: 'dropdown',
        placeholder: '00',
        options: ['0-10', '11-20', '21-30', '31-40', '41-50']
    },
    {
        name: 'numberOfDrivers',
        title: 'No. Of Drivers',
        type: 'dropdown',
        inputType: 'dropdown',
        placeholder: '00',
        options: ['0-10', '11-20', '21-30', '31-40', '41-50']
    },
    {
        name: "organisationCity",
        title: 'City',
        type: 'dropdown',
        inputType: 'dropdown',
        placeholder: 'City',
        options: cities
    },
    {
        name: 'address',
        title: 'Address',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Address'
    }
]
export const organizationDetailAvatarList = [
    Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6
]
export const languages = [
    {
        language: 'English(United States)',
        code: "en",
    },
    {
        language: 'हिंदी',
        code: "hi",
    },
    {
        language: 'ગુજરાતી',
        code: "gu",
    },
    {
        language: 'বাংলা',
        code: "bn",
    },
    {
        language: 'मराठी',
        code: "mr",
    },
    {
        language: 'ଓଡ଼ିଆ',
        code: "or",
    },
]

export const sidebarItems = [
    {
        img: fleet,
        title: 'Fleet Operation'
    },
    {
        img: vendor,
        title: 'Vendor Management'
    },
    {
        img: order,
        title: 'Order Management'
    },
    {
        img: hr,
        title: 'HR Management'
    },
    {
        img: maintenance,
        title: 'Maintenance Management'
    },
    {
        img: fuel,
        title: 'Fuel Monitoring'
    },
    {
        img: business,
        title: 'Business Analytics'
    },
    {
        img: accounts,
        title: 'Accounts of Business'
    },
    {
        img: invoice,
        title: 'Invoice Management'

    }
]

export const personalDetails = [
    {
        name: 'First Name',
        type: 'text',
        placeholder: 'First Name',
        inputType: 'smallerText'
    },
    {
        name: 'Last Name',
        type: 'text',
        placeholder: 'Last Name',
        inputType: 'smallerText'
    },
    {
        name: 'Email',
        type: 'email',
        placeholder: 'Email',
        inputType: 'smallerText'
    },
    {
        name: 'Phone Number',
        type: 'text',
        placeholder: '+91 Please enter yourr phone number',
        inputType: 'smallerText'
    }
]

export const fleetOperationDashboardBoxes = [
    {
        title: 'Total Fleet',
        img: '',
        value: 250,
        type: 'button',
        buttonText: '+ Add Fleet'
    },
    {
        title: 'Fleet Groups',
        img: '',
        value: '',
        type: 'button',
        buttonText: '+ Create Group'
    },
    {
        title: 'Total Journeys',
        img: '',
        value: '',
        type: 'graph',
        buttonText: '15.3% Up from last month'
    },
    {
        title: 'Earnings',
        img: '',
        value: '',
        type: 'graph',
        buttonText: '15.3% Up from last month'
    }
]

export const fleetListTable = [
    'PROFILE', 'FLEET NO:', 'LOAD LIMIT', 'GROUP', 'CURRENT LOCATION', 'JOURNEYS', 'EARNINGS', 'ALERTS', 'STATUS', 'ACTIONS',
]

export const fleetHistoryTable = [
    'PROFILE', 'FLEET NO:', 'FLEET NAME:', 'LOAD LIMIT', 'GROUP', 'JOURNEYS', 'EARNINGS', 'TOTAL ORDERS', 'DAYS', ''
]

export const VehicleDataComponents = [
    {
        name: 'Fleet name',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Enter Fleet Name',
    },
    {
        name: 'Fleet number*',
        type: 'text',
        inputType: 'smallerText',
        placeholder: '000000',
    },
    {
        name: 'Engine number*',
        type: 'text',
        inputType: 'smallerText',
        placeholder: '000000',
    },
    {
        name: 'Chassis number*',
        type: 'text',
        inputType: 'smallerText',
        placeholder: '000000',
    },
    {
        name: 'Fuel type*',
        type: 'text',
        inputType: 'smallerText',
        placeholder: '000000',
    },
    {
        name: 'Gross weight*',
        type: 'text',
        inputType: 'smallerText',
        placeholder: '000000',
    },
    {
        name: 'Odometer reading',
        type: 'text',
        inputType: 'smallerText',
        placeholder: '000000',
    },
]

export const RegistrationCertificateComponents = [
    {
        name: 'Registration date',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'DD/MM/YY',
    },
    {
        name: 'Fitness Expiry Date',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'DD/MM/YY',
    },
    {
        name: 'Maker Model',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Enter Maker Model',
    },
    {
        name: 'Maker description',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Enter Maker description',
    },
    {
        name: 'Owner name',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Owner name',
    },
    {
        name: 'financed',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Yes/no',
    }
]

export const InsuranceDetailsComponents = [
    {
        name: 'Insurance Company name',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Enter name',
    },
    {
        name: 'Policy number',
        type: 'text',
        inputType: 'smallerText',
        placeholder: '000000',
    },
    {
        name: 'Expiry date',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'DD/MM/YY',
    }
]
export const PermitDetailsComponents = [
    {
        name: 'Permit number',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Enter Name',
    },
    {
        name: 'Permit type',
        type: 'text',
        inputType: 'smallerText',
        placeholder: '000000',
    },
    {
        name: 'Issued date',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'DD/MM/YYYY',
    },
    {
        name: 'Expiry date',
        type: 'text',
        inputType: 'smallerText',
        placeholder: '000000',
    },
    {
        name: 'National permit expiry date',
        type: 'text',
        inputType: 'smallerText',
        placeholder: '000000',
    }
]
export const PuccDetailsComponents = [
    {
        name: 'PUCC number',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Enter Number',
    },
    {
        name: 'Expiry date',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'DD/MM/YYYY',
    },
]
export const TaxDetailsComponents = [
    {
        name: 'TAX Expiry date',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'DD/MM/YYYY',
    }
]
export const fleetDetail = [
    {
        name: 'Fleet name',
        type: 'text',
        inputType: 'smallerText',
        placeholder: ' Fleet Name',
    },
    {
        name: 'Fleet Number*',
        type: 'text',
        inputType: 'smallerText',
        placeholder: ' XX-00-XX-0000',
    },
    {
        name: 'Chassis number*',
        type: 'text',
        inputType: 'smallerText',
        placeholder: '000000',
    },
    {
        name: 'Engine number*',
        type: 'text',
        inputType: 'smallerText',
        placeholder: '000000',
    },
    {
        name: 'Gross weight*',
        type: 'text',
        inputType: 'smallerText',
        placeholder: ' Gross weight',
    },
    {
        name: 'Fuel type*',
        type: 'text',
        inputType: 'smallerText',
        placeholder: ' Fuel type',
    },
    {
        name: 'Odometer Reading',
        type: 'text',
        inputType: 'smallerText',
        placeholder: '000000',
    },
]
export const manualOnboardingSlideDetails = [
    {
        header: 'Vehicle Data',
        fleetDetail: VehicleDataComponents,
        pageNo: '1',
        hasPicture: true,
        buttonText: 'Next',
    },
    {
        header: 'Registration Certificate Data',
        fleetDetail: RegistrationCertificateComponents,
        pageNo: '2',
        hasPicture: false,
        buttonText: 'Next',
    },
    {
        header: 'Insurance Details',
        fleetDetail: InsuranceDetailsComponents,
        pageNo: '3',
        hasPicture: false,
        buttonText: 'Next',
    },
    {
        header: 'Permit Details',
        fleetDetail: PermitDetailsComponents,
        pageNo: '4',
        hasPicture: false,
        buttonText: 'Next',
    },
    {
        header: 'PUCC Details',
        fleetDetail: PuccDetailsComponents,
        pageNo: '5',
        hasPicture: false,
    },
    {
        header: 'Tax Details',
        fleetDetail: TaxDetailsComponents,
        pageNo: '5',
        hasPicture: false,
        buttonText: 'Next',
    },
    {
        header: 'Upload Files',
        hasPicture: false,
        buttonText: 'Submit',
    }
]
export const fleetJourneyList = [
    'Origin', 'Destination:', 'Driver name:', 'Status:', 'Fuel:', 'Earning:', 'Avg. Mileage', 'Total Order', ''
]

export const journeyHistoryTitles = [
    {
        name: 'Fleet name',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Enter Fleet Name',
    },
    {
        name: 'Fleet number',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Fleet number[XX-00-XX-0000]',
    },
    {
        name: 'Fleet Group',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Fleet group',
    },
    {
        name: 'Origin',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Origin',
    },
    {
        name: 'Destination',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Destination',
    },
    {
        name: 'Drivers Name',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Please enter Drivers name',
    },
    {
        name: 'Avg. Mileage',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Avg.Mileage',
    },
    {
        name: 'Count of Orders',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Count of orders[00]',
    },
    {
        name: 'Total Amount of orders',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Total amount of orders[00]',
    },
    {
        name: 'Gross Weight',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Gross weight[in TON]',
    },
    {
        name: 'Carried Weight',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Carried weight[in TON]',
    },
    {
        name: 'Documents',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Documents',
    },
    {
        name: 'Incident',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Incident',
    },
    {
        name: 'Fuel',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Fuel type',
    },
    {
        name: 'Kilometer ',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Kilometers travelled',
    },
    {
        name: 'Fuel Spent',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Fuel Spent',
    },
    {
        name: 'Account of Orders',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'Account of Orders',
    },
]
