// import { FormEvent, useEffect, useState } from "react"
// import { Header } from "../../components/header"
// import { Input } from "../../components/input"

// import { db } from "../../services/firebaseConnection"
// import {
//     setDoc,
//     doc,
//     getDoc
// } from 'firebase/firestore'

// export function Networks(){
//     const [facebook,setFacebook] = useState('')
//     const [instagram,setInstagram] = useState('')
//     const [linkedin,setLinkedin] = useState('')


//     useEffect(()=>{
//         function loadLinks(){
//             const docRef = doc(db, 'social', 'link')
//             getDoc(docRef)
//             .then((snapshot)=>{
//                 if(snapshot.data() !== undefined){
//                     setFacebook(snapshot.data()?.facebook)
//                     setInstagram(snapshot.data()?.instagram)
//                     setLinkedin(snapshot.data()?.linkedin)
//                 }
//             })
//         }

//         loadLinks()
//     },[])

//     function handleRegister(event:FormEvent){
//         event.preventDefault()

//         setDoc(doc(db,'social', 'link'),{
//             facebook: facebook,
//             instagram: instagram,
//             linkedin: linkedin
//         })
//         .then(()=>{
//             console.log('Cadastrado com sucesso')
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//     }

//     return(
//         <div className="flex items-center flex-col min-h-screen pb-7 px-2">
//             <Header/>


//             <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>
        
//         <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
//             <label className="text-white font-medium mt-2 mb-2">Link do facebook</label>
//             <Input
//             type="url"
//             placeholder="Digite a url do facebook"
//             value={facebook}
//             onChange={ (e) => setFacebook(e.target.value)}
//             />

//             <label className="text-white font-medium mt-2 mb-2">Link do instagram</label>
//             <Input
//             type="url"
//             placeholder="Digite a url do instagram"
//             value={instagram}
//             onChange={ (e) => setInstagram(e.target.value)}
//             />

//             <label className="text-white font-medium mt-2 mb-2">Link do linkedin</label>
//             <Input
//             type="url"
//             placeholder="Digite a url do linkedin"
//             value={linkedin}
//             onChange={ (e) => setLinkedin(e.target.value)}
//             />

//             <button
//             type="submit"
//             className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
//             >
//                 Salvar Links
//             </button>
//         </form>
        
        
//         </div>
//     )
// }