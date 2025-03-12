import { City } from "country-state-city";
const indianCities=City.getCitiesOfCountry("IN");
const cities = [];
indianCities.map((item)=>{
cities.push(item.name);
})
import Avatar1 from '../../assets/images/Avatar1.svg'
import Avatar2 from '../../assets/images/Avatar2.svg'
import Avatar3 from '../../assets/images/Avatar3.svg'
import Avatar4 from '../../assets/images/Avatar4.svg'
import Avatar5 from '../../assets/images/Avatar5.svg'
import Avatar6 from '../../assets/images/Avatar6.svg'
export const loginPage=[
    {
        name:'email',
        type:'email',
        inputType:'movePlaceholderUp',
        placeholder:'login.email',
    },
    {
        name:'password',
        type:'password',
        inputType:'movePlaceholderUp',
        placeholder:'login.password',
    }
]

export const signupPage=[
    {
        name:'firstName',
        type:'text',
        inputType:'movePlaceholderUp',
        placeholder:'signup.firstName',
    },
    {
        name:'lastName',
        type:'text',
        inputType:'movePlaceholderUp',
        placeholder:'signup.lastName',
    },
    {
        name:'email',
        type:'email',
        inputType:'movePlaceholderUp',
        placeholder:'signup.email',
    },
    {
        name:'primaryMobile',
        type:'text',
        inputType:'movePlaceholderUp',
        placeholder:'signup.phoneNumber',
    },
    {
        name:'password',
        type:'password',
        inputType:'movePlaceholderUp',
        placeholder:'signup.password',
    },
    {
        name:'secondPassword',
        type:'password',
        inputType:'movePlaceholderUp',
        placeholder:'signup.retypePassword',
    }
]

export const forgotPassword=[
    {
        name:'email',
        type:'text',
        inputType:'text',
        placeholder:'forgot.enterEmail',
    }
]
export const setNewPassword=[
    {
        name:'newPassword',
        type:'password',
        inputType:'text',
        placeholder:'setNew.newPassword',
    },
    {
        name:'recheckNewPassword',
        type:'password',
        inputType:'text',
        placeholder:'setNew.recheckNewPassword',
    }
]

export const organizationDetail=[
    {
        name:'Organization Name',
        type:'text',
        inputType:'smallerText',
        placeholder:'organization.organizationName'
    },
    {
        name:'Industry Type',
        type:'text',
        inputType:'smallerText',
        placeholder:'organization.industryType'
    },
    {
        name:'Experience',
        type:'text',
        inputType:'smallerText',
        placeholder:'organization.experience'
    },
    {
        name:'No. Of Trucks',
        type:'dropdown',
        inputType:'dropdown',
        placeholder:'organization.numberOfTrucks',
        options:['0-10','11-20','21-30','31-40','41-50']
    },
    {
        name:'No. Of Drivers',
        type:'dropdown',
        inputType:'dropdown',
        placeholder:'organization.numberOfDrivers',
        options:['0-10','11-20','21-30','31-40','41-50']
    },
    {
        name:"City",
        type:'dropdown',
        inputType:'dropdown',
        placeholder:'organization.city',
        options:cities
    },
    {
        name:'Address',
        type:'text',
        inputType:'smallerText',
        placeholder:'organization.address'
    }
]
export const organizationDetailAvatarList=[
    Avatar1,Avatar2,Avatar3,Avatar4,Avatar5,Avatar6
]
export const languages=[
    {
        language:'English(United States)',
        code:"en",
    },
    {
        language:'हिंदी',
        code:"hi",
    },
    {
        language:'ગુજરાતી',
        code:"gu",
    },
    {
        language:'বাংলা',
        code:"bn",
    },
    {
        language:'मराठी',
        code:"mr",
    },
    {
        language:'ଓଡ଼ିଆ',
        code:"or",
    },
]