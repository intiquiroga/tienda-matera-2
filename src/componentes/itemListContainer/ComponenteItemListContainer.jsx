import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {arregloProductos} from "../baseDatos/arregloProductos"
import { useEffect, useState} from "react";
import {useParams } from 'react-router-dom';
import { ComponenteItemList } from '../itemList/ComponenteItemList'; 
import { ComponenteItem } from '../item/ComponenteItem';
import { ComponenteItemDetail } from '../itemDetail/ComponenteItemDetail';
import { db } from '../baseDatos/firebase';
import { collection,doc,getDocs,query,where } from 'firebase/firestore';


export const ComponenteItemListContainer = ()=> {

    console.log (useParams());
    const {categoryId} = useParams ();
    const [productos,setProductos] = useState ([]);
    const [loading,setLoading] = useState (true);


   // const promesa = new Promise ((resolve,reject)=>{
   //     setTimeout (()=> {
   //         resolve (arregloProductos);
   //   },2000);
   // })
            
    useEffect (()=> {
        //promesa.then ((response) => {
        //     if (categoryId){
        //       const productsFiltered = response.filter (elm=>elm.categoria === categoryId);
        //       setItemProduct (productsFiltered);
        //    } else {
        //        setProductos (response);
        //    }
        //})

       // if (categoryId){
       //     const queryRef = query (collection (db,"items"),where ("category","==",categoryId));
       //     getDocs (queryRef).then((response)=>{
       //         const results = response.docs;
       //         const docs = results.map (doc=> {
       //             return { 
       //                 ...doc .data(),
       //                 id:doc.id
       //             }
       //         });
       //         console.log(docs);
       //     });
       //     } else { 
       //         const queryRef = collection(db,"items");
       //         getDocs (queryRef).cat((response)=>{
       //             const results = response.docs;
       //            const docs = results.map (doc=> {
       //                 return { 
       //                     ...doc .data(),
       //                     id:doc.id
       //                 }
       //             });
       //             console.log(docs);

        //});
        const queryRef = categoryId ? query (collection(db,"items"),where ("category","==",categoryId)): 
        collection (db,"items");
        getDocs (queryRef).then((response)=>{
            const results = response.docs;
            const docs = results.map (doc=> {
                return { 
                    ...doc .data(),
                    id:doc.id
                }
            });
            //console.log(docs);
            setProductos(docs);
            setLoading(false);
        });    
    },[categoryId])

    //console.log ("productos",productos);

    return (
        <div className="item-detail-container">
            <p style={{width:"100%"}}>item list Container</p>
            {
                loading ?
                <p>cargando </p>
                :
                <ComponenteItemDetail item={productos} otraPropiedad={123}/>
            }
            
        </div>
    )

}
