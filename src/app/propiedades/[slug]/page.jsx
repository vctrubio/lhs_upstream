import PropertyPage from "@/components/PropertyPage";
import { fetchPropertyByID } from "#/backend/apisConnections";

export default async function Page({ params }) {
    const property = await fetchPropertyByID(params.slug);

    console.log('property check', property);
    return <PropertyPage property={property} />
}

