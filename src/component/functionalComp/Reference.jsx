//useRef -> keep on tracking before we typed
import { useEffect,useRef,useState } from "react";
const Reference=()=>{
    const[batchSize,updatebatchsize]=useState("")
    const prevBatch=useRef(batchSize)
    useEffect(()=>{
        prevBatch.current=batchSize

    },[batchSize]) //updating value is stored in batchSize
    return(
        <div>
            <h1>Example of UseRef</h1>
            <input type="text" onChange={(event)=>{updatebatchsize(event.target.value)}}/>
            <h2>The current batch2 size is {batchSize} and it's previous batch2 size is {prevBatch.current}</h2>

        </div>

    )
}
export default Reference;