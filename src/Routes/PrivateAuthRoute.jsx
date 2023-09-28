import React from 'react'

function PrivateAuthRoute({children}) {
	const token = localStorage.getItem("token");

 if (token) {
    return children;
  } 
}


export default PrivateAuthRoute