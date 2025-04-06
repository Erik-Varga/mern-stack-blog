import { IKImage } from "imagekitio-react";

const urlEndpoint = import.meta.env.VITE_IK_URL_ENDPOINT

const Image = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;
