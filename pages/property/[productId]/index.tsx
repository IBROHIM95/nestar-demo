import { useRouter } from "next/router"

const PropertyDetail = () => {
    const router = useRouter();
    const {productId} = router.query
    return <h1>PropertyDetail {productId} </h1>
}


export default PropertyDetail