import {useState,useEffect} from 'react'
import initializeFirebase from './../components/Firebase/firebase.init';
import {
  getAuth,
  GoogleAuthProvider,
  updateProfile,
  getIdToken,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";




// initialize Firebase  App
 initializeFirebase();
 const auth = getAuth();

//  google provider 
const googleProvider = new GoogleAuthProvider();

const useFirebase=()=>{
    // Handle user
    const [user,setUser]=useState({})
    // handle login
    const [loading,setLoading]=useState(true);
    // admin handle
    const [admin,setAdmin]=useState(false)
    // error handle
    const [error,setError]=useState('')
    // verify user with token
  const [token,setToken]=useState('')
    // Handle Registration 
    const registerUser=(email,password,name)=>{
        setLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
            // error
            setError('')
          const newUser={email,displayName:name}
          setUser(newUser)
          // save user database
          saveRegUser(email,name,'POST')
        })
        // send name in firebase
        updateProfile(auth.currentUser,{
          displayName:name
        })
        .catch((error)=>{
          setError(error.message);
        })
       
        .finally(()=>setLoading(false))
    }


    // Handle login
    const loginUser=(email,password,location,history)=>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const redirect = location?.state?.from || "/";
    history.replace(redirect);
// error
    setError('')

  })
  .catch((error) => {
    setError(error.message);
  })
  .finally(()=>setLoading(false))

    }


// handle google
    const handleGoogleSignIn=(location,history)=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
           
           const{displayName,photoURL,email}=result.user;
           const loggedInUser={
               name:displayName,
               email:email,
               photo:photoURL
           }
           setUser(loggedInUser);
           saveRegUser(user.email,user.displayName,'PUT')
           setError('');
           const redirect = location?.state?.from || "/";
           history.replace(redirect)
        })
       
        .catch((error) => {
            // An error happened.
            setError(error.message);

          })
          .finally(()=>setLoading(false))

    }


    // Handle Logout 
    const logOut=()=>{
       setLoading(true)

        signOut(auth).then(() => {
            // Sign-out successful.
            setError('')
          }).catch((error) => {
            // An error happened.
            setError(error.message);

          })
          .finally(()=>setLoading(false))

    }

    // handle admin
    useEffect(()=>{
      fetch(`https://guarded-badlands-04784.herokuapp.com/users/${user.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))
    },[user.email])

// Handle user state change
    useEffect(()=>{
      setLoading(true);
    const unsubscribe =   onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              getIdToken(user)
              .then(idToken=>{
                setToken(idToken);
              })
            } else {
            setUser('')
            }
            setLoading(false);
          });
          return () => unsubscribe;
    },[])

    // save register user in database 
    const saveRegUser=(email,displayName,method)=>{
      const user={email,displayName};
      fetch('https://guarded-badlands-04784.herokuapp.com/users',{
        method:method,
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
    }

    return{
        user,
        loading,
        handleGoogleSignIn,
        error,
        token,
        admin,
        registerUser,
        loginUser,
        saveRegUser,
        logOut,

    }

}

export default useFirebase;