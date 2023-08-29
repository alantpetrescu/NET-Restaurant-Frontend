import "./RequestButton.css";

export const RequestButton = ({method, baseUrl, url, params, body}) => {
    url = baseUrl + url;

    if(params) {
        for(let param of params) {
            url += '/' + param.data;
        }
    }

    console.log('url')
    console.log(url);

    console.log('body')
    console.log(body);

    const newBody = {}

    if(body) {
        for(let bodyItem of body) {
            console.log(bodyItem);
            newBody[Object.values(bodyItem)[0]] = Object.values(bodyItem)[1];
        }
    }

    console.log("new body");
    console.log(newBody);

    const onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        fetch(url, {
            method,
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(newBody)
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err);
        });
    }

    return <button className="RequestButton" onClick={onClick} type="button">SEND!</button>
}