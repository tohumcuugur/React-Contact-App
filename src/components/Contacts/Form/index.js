import {useState , useEffect} from 'react'

const initialFormValues ={fullname:"", phone_number:""}

function Form({addContact , contacts}) {
    const [form , setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    },[contacts]); //contacts'te değişiklik olduğunda yani değer eklendiğinde input içindeki yazıları temizler..
    

    const onChangeInput = (e) =>{
        setForm({...form,[e.target.name] : e.target.value});// e.target.value'dan gelen değer name kısmına gönderilir.
    }
    const onSubmit = (e) =>{
        e.preventDefault();

        if(form.fullname === "" || form.phone_number === ""){//eğer boş alan var ise false döndürür form gönderilmez.
            return false;
        }

        addContact([...contacts ,form]);
        // console.log(form);

    };
  return (
    <form onSubmit={onSubmit}>
        <div>
            <input name='fullname' placeholder='Full Name' onChange={onChangeInput} value= {form.fullname}/>
        </div>
        <div>
            <input name ='phone_number' placeholder='Phone Number' onChange={onChangeInput} value= {form.phone_number}/>
        </div>
        <div className='btn'>
            <button>Add</button>
        </div>
    </form>
    
  )
}

export default Form;
