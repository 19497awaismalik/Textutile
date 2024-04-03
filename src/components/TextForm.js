import React ,{useState}from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');
    //Convery to Lower Case
    const handleUpClick=()=>{
let newText=text.toUpperCase();
setText(newText);
props.showAlert(('success').charAt(0).toUpperCase()+('success').slice(1).toLowerCase(),"Convert To Upper Case");
document.title='Textutile -Convert to UpperCase';

    } 
    //Convert to Upper Case
    const handleLOClick=()=>{
        
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(('success').charAt(0).toUpperCase()+('success').slice(1).toLowerCase(),"Convert To Lower Case");
        document.title='Textutile -Convert to LowerCase';
            }
            //Event Handling
    const handleOnChange=(event)=>{
       
   setText(event.target.value);

    }
    //Clear Text
    const handleClear=()=>{
     
      let newText='';
      setText(newText);
      props.showAlert(('success').charAt(0).toUpperCase()+('success').slice(1).toLowerCase(),"Text Success Remove");
      document.title='Textutile -Remove  Space';
          }
          //Convert to Capital
          const handleCapital=()=>{
           
            let newText=text.charAt(0).toUpperCase()+text.slice(1).toLowerCase();
            setText(newText);
            props.showAlert(('success').charAt(0).toUpperCase()+('success').slice(1).toLowerCase(),"Convert To Capital Case");      
            document.title='Textutile -Convert tO Capital Case';
          }
                //Copy Text
              const handleCopy=()=>
              {
let text=document.getElementById('myBox');
text.select();
navigator.clipboard.writeText(text.value);
props.showAlert(('success').charAt(0).toUpperCase()+('success').slice(1).toLowerCase(),"Copy All Text");
document.title='Textutile -Select All Text';


              }
              //Remover Extra Space
              const handleSpace=()=>{
let newText=text.split(/[ ]+/);
setText(newText.join(" "));
props.showAlert(('success').charAt(0).toUpperCase()+('success').slice(1).toLowerCase(),"Success Remove Extra Space");
document.title='Textutile - Remove Extra Space';

              }

       
  return (
    <div className='container'>
       <div className="my-3">
  <h3  style={{color:props.Mode==='dark'?'white':'black'}}>{props.handling}</h3>
<textarea className='form-control' onChange={handleOnChange} style={{backgroundColor:props.Mode==='dark'?'black':'white',color:props.Mode==='dark'?'white':'black'}} value={text} id='myBox' rows={'8'} ></textarea>
<button  disabled={text.length===0} className='btn btn-outline-success  my-3 mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length===0} className='btn btn-outline-primary    mx-2'    onClick={handleLOClick}>Convert to LowerCase</button>
<button disabled={text.length===0} className='btn btn-outline-warning   mx-2'       onClick={handleCapital}>Convert to Capital</button>
<button disabled={text.length===0} className='btn btn-outline-info   mx-2'                   onClick={handleClear}>Remove Text</button>
<button disabled={text.length===0} className='btn btn-outline-secondary mx-2'                   onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className='btn btn-outline-danger mx-2'            onClick={handleSpace}>Remove Extra Space</button>

  </div>
<div className="container my-3" style={{color:props.Mode==='dark'?'white':'black'}}> 
 <h3 >Your Text Summary</h3>
  <p >{text.split(/\s+/).filter((element)=>{return element.length!==0
  }).length} Words and {text.length} Characters</p>
  <p >{0.008*(text.split(" ").filter((element)=>{return element.length!==0})).length} Minutes Reads</p>
  <h3 >Preview</h3>
  <p >{text.length>0?text:"Nothig To Preview"}</p>
</div>

    </div>
  )
}
