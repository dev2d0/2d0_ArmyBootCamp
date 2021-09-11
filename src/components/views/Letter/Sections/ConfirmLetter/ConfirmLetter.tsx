import React, { ReactElement, useState } from 'react'
const dotenv = require('dotenv');

export default function ConfirmLetter(user: string, title: string, contents: string): ReactElement {
    dotenv.config();

    const [id, setId] = useState(process.env.USER_ID);
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [className, setClassName] = useState('');
    const [groupName, setGroupName] = useState('');
    const [unitName, setUnitName] = useState('');
    const [enterDate, setEnterDate] = useState('');

    console.log(id);
    const onSubmit = () => {

    }

    return (
        <div>
        </div>
    )
}
