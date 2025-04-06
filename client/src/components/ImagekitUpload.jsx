import { IKContext, IKImage, IKUpload } from 'imagekitio-react'
import React from 'react'

const publicKey = import.meta.env.VITE_IK_PUBLIC_KEY
const urlEndpoint = import.meta.env.VITE_IK_URL_ENDPOINT

const authenticator =  async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/upload-auth`);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};

const onError = err => {
    console.log("Error", err);
  };
  
  const onSuccess = res => {
    console.log("Success", res);
  };
  

const ImagekitUpload = () => {

    return (

        <IKContext
            publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            transformationPosition="path"
            authenticator={authenticator}>

            {/* // Image component */}
            <IKImage path="flowers_M8u-LBXN9V.jpg" transformation={[{
                "height": "300",
                "width": "400"
            }]} />

            {/* https://ik.imagekit.io/spudev50/bikes_QGhVIFm1Y.jpg?updatedAt=1743778390039 */}

            {/* // Image upload */}
            <p>Upload an image</p>
        <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
        />
        </IKContext>


    )
}

export default ImagekitUpload