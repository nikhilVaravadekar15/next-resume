
interface PdfRendererProps {
    url: string
}

export default function PdfRenderer({ url }: PdfRendererProps) {

    return (
        <iframe
            src={url}
            className="w-full h-full border rounded-md"
        />
    )
}
