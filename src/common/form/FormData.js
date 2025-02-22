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
        placeholder:'Email',
    },
    {
        name:'password',
        type:'password',
        inputType:'movePlaceholderUp',
        placeholder:'Password',
    }
]

export const signupPage=[
    {
        name:'firstName',
        type:'text',
        inputType:'movePlaceholderUp',
        placeholder:'First Name*',
    },
    {
        name:'lastName',
        type:'text',
        inputType:'movePlaceholderUp',
        placeholder:'Last Name*',
    },
    {
        name:'email',
        type:'email',
        inputType:'movePlaceholderUp',
        placeholder:'Email*',
    },
    {
        name:'phoneNumber',
        type:'number',
        inputType:'movePlaceholderUp',
        placeholder:'Phone Number*',
    },
    {
        name:'password',
        type:'password',
        inputType:'movePlaceholderUp',
        placeholder:'Password*',
    },
    {
        name:'retypePassword',
        type:'password',
        inputType:'movePlaceholderUp',
        placeholder:'Retype Password*',
    }
]

export const forgotPassword=[
    {
        name:'forgotPassword',
        type:'password',
        inputType:'text',
        placeholder:'enter your email',
    }
]
export const setNewPassword=[
    {
        name:'newPassword',
        type:'password',
        inputType:'text',
        placeholder:'Enter your new password',
    },
    {
        name:'recheckNewPassword',
        type:'password',
        inputType:'text',
        placeholder:'Re-enter your new password',
    }
]

export const organizationDetail=[
    {
        name:'Organization Name',
        type:'text',
        inputType:'smallerText',
        placeholder:'Enter organization name here'
    },
    {
        name:'Industry Type',
        type:'text',
        inputType:'smallerText',
        placeholder:'Enter industry type here'
    },
    {
        name:'Experience',
        type:'text',
        inputType:'smallerText',
        placeholder:'Enter your experience'
    },
    {
        name:'No. Of Trucks',
        type:'dropdown',
        inputType:'dropdown',
        placeholder:'Select',
        options:[
            '0-10','11-20','21-30','31-40','41-50'
        ]
    },
    {
        name:'No. Of Drivers',
        type:'dropdown',
        inputType:'dropdown',
        placeholder:'Select',
        options:[
            '0-10','11-20','21-30','31-40','41-50'
        ]
    },
    {
        name:"City",
        type:'dropdown',
        inputType:'dropdown',
        placeholder:'Select Cities',
        options:cities
    },
    {
        name:'Address',
        type:'text',
        inputType:'smallerText',
        placeholder:'Enter address here'
    }
]
export const organizationDetailAvatarList=[
    Avatar1,Avatar2,Avatar3,Avatar4,Avatar5,Avatar6
]
export const languages=[
    {
        language:'English(United States)',
        code:"EN",
    },
    {
        language:'Hindi',
        code:"EN",
    },
    {
        language:'Gujarati',
        code:"EN",
    },
    {
        language:'Bengali',
        code:"EN",
    },
    {
        language:'Marathi',
        code:"EN",
    },
    {
        language:'Odia',
        code:"EN",
    },
]