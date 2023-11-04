import { NextPage } from 'next'
import { useRouter } from 'next/router'

const BaseTypePage: NextPage = () => {

    const {asPath, pathname} = useRouter()

    return <div>Base type page</div>
}

export default BaseTypePage