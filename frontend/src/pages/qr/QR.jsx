import QRCode from "react-qr-code";

export const QR = () => {
  // const value = localStorage.getItem("id");
  const value = localStorage.getItem("nombre");
  return (
    <div
      className="flex flex-col items-center justify-center h-screen "  
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "25%", width: "25%" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  )
}
