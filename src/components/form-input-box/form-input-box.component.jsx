import './form-input-box.style.scss'

const FormInputBox = ({...otherInfo}) => {
    return(
        <div className="input-box">
            <input {...otherInfo}/>
        </div>
    )
}

export default FormInputBox