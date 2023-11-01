import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {GetGalleryDAta} from "../api/galleryApi";
const UseGalleryData = () => {
    const {data} = useQuery({
        queryKey : ["getGalleryData"],
        queryFn : GetGalleryDAta,
    })

    return {data: data?.data.resources};
}
export default UseGalleryData;