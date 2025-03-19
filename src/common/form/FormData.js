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
        name: 'recheckNewPassword',
        type: 'password',
        inputType: 'text',
        placeholder: 'setNew.recheckNewPassword',
    }
]

export const organizationDetail = [
    {
        name:'organisationName',
        title: 'Organization Name',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'organization.organizationName'
    },
    {
        title:"Industry Type",
        name: 'industryType',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'organization.industryType'
    },
    {
        title:'Experience',
        name: 'experience',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'organization.experience'
    },
    {
        title: 'No. Of Trucks',
        name:'numberOfTrucks',
        type: 'dropdown',
        inputType: 'dropdown',
        placeholder: 'organization.numberOfTrucks',
        options: ['0-10', '11-20', '21-30', '31-40', '41-50']
    },
    {
        name:'numberOfDrivers',
        title: 'No. Of Drivers',
        type: 'dropdown',
        inputType: 'dropdown',
        placeholder: 'organization.numberOfDrivers',
        options: ['0-10', '11-20', '21-30', '31-40', '41-50']
    },
    {
        name: "organisationCity",
        title:'City',
        type: 'dropdown',
        inputType: 'dropdown',
        placeholder: 'organization.city',
        options: cities
    },
    {
        name:'address',
        title: 'Address',
        type: 'text',
        inputType: 'smallerText',
        placeholder: 'organization.address'
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
        inputType: 'smallerText'
    },
    {
        name: 'Last Name',
        type: 'text',
        inputType: 'smallerText'
    },
    {
        name: 'Email',
        type: 'email',
        inputType: 'smallerText'
    },
    {
        name: 'Phone Number',
        type: 'text',
        inputType: 'smallerText'
    }
]

export const fleetOperationDashboardBoxes=[
    {
        title: 'Total Fleet',
        img:'',
        value: 250,
        type:'button',
        buttonText:'+ Add Fleet'
    },
    {
        title: 'Fleet Groups',
        img:'',
        value: '',
        type:'button',
        buttonText:'+ Create Group'
    },
    {
        title: 'Total Journeys',
        img:'',
        value: '',
        type:'graph',
        buttonText:'15.3% Up from last month'
    },
    {
        title: 'Earnings',
        img:'',
        value: '',
        type:'graph',
        buttonText:'15.3% Up from last month'
    }
]

export const fleetListTable=[
    'PROFILE','FLEET NO:','LOAD LIMIT','GROUP','CURRENT LOCATION','JOURNEYS','ALERT','STATUS','ACTIONS'
]

export const fleetHistoryTable=[
    'PROFILE','FLEET NO:','FLEET NAME:','LOAD LIMIT','GROUP','JOURNEYS','EARNINGS','TOTAL ORDERS','DAYS'
]