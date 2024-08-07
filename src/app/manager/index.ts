import axios from "axios";

export const orderToHtml = (name:string,
                     phone:string,
                     email:string,
                     comments:string,
                     websites:string,
                     company:string,
                     finalThoughts:string,
                     service?: string | undefined,
                     template?: string) => {
    return `<h4>Name</h4>: ${name} <br/>
<h4>phone</h4>: ${phone} <br/>
<h4>email</h4>: ${email} <br/>
<h4>comments</h4>: ${comments} <br/>
<h4>websites</h4>: ${websites} <br/>
<h4>company</h4>: ${company} <br/>
<h4>final Thoughts</h4>: ${finalThoughts} <br/>
<h4>Service</h4>: ${service ? service: ''} <br/>
<h4>Selected Template</h4>: ${template ? template : ''} <br/>`;
}

export const sendOrder = async (html: string) => {
    return await fetch('https://ykvqioxa6d.execute-api.us-east-2.amazonaws.com/default/orderReceived', {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        referrerPolicy: "no-referrer",
        body: html
    }).then(res => {})
}