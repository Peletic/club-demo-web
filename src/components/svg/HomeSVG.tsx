import { SVGProps } from "react"
const HomeSVG = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={100}
        height={100}
        viewBox="0 0 50 50"
        {...props}
    >
        <path d="M24.96 2.102a1 1 0 0 0-.573.209l-23 17.9a1 1 0 1 0 1.226 1.578L4 20.71V48a1 1 0 0 0 1 1h13.832a1 1 0 0 0 .326 0h11.674a1 1 0 0 0 .326 0H45a1 1 0 0 0 1-1V20.709l1.387 1.08a1 1 0 1 0 1.226-1.578l-23-17.9a1 1 0 0 0-.652-.21zM25 4.367l19 14.787V47H32V29a1 1 0 0 0-1-1H19a1 1 0 0 0-1 1v18H6V19.154L25 4.367zM20 30h10v17H20V30z" />
    </svg>
)
export default HomeSVG