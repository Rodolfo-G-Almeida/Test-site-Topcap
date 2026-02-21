import Image from "next/image";

interface BoxCertificateProps {
  item: any;
  locale: string;
}

function boxCertificate(item: any, locale: string) {
  return (
    <div className="box-item-certificado">
      <div className="img-certificado">
        <Image
          src={item.image}
          alt={item.alt}
          width={item.width}
          height={item.height}
        />
      </div>
      <div className="text-certificado">{locale === 'en' ? item.descriptionEn:item.description}</div>
    </div>
  );
}

export function BoxCertificate({item, locale}: BoxCertificateProps) {
  return boxCertificate(item, locale);
}

export function BoxCertificateLink({item, locale}: BoxCertificateProps) {
  return (
    <a key={item.id} href={item.link} target="_blank">
      {boxCertificate(item, locale)}
    </a>
  );
}
