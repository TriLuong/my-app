import React from "react"
import ContentLoader from "react-content-loader"

export function LoadingDetail (){
    return <ContentLoader>
        <rect x="50" y="50" rx="2" ry="2" width="110" height="110" />
        <rect x="180" y="55" rx="2" ry="2" width="110" height="10" />
        <rect x="180" y="75" rx="2" ry="2" width="110" height="10" />
        <rect x="180" y="95" rx="2" ry="2" width="110" height="10" />
        <rect x="180" y="115" rx="2" ry="2" width="110" height="10" />
    </ContentLoader>
}

export function LoadingLogin(){
    return <ContentLoader>
        <rect x="170" y="50" rx="2" ry="2" width="50" height="10" />
        <rect x="100" y="70" rx="2" ry="2" width="190" height="10" />
        <rect x="100" y="90" rx="2" ry="2" width="190" height="10" />
        <rect x="160" y="110" rx="2" ry="2" width="70" height="10" />
        {/* <rect x="160" y="130" rx="2" ry="2" width="70" height="10" /> */}
    </ContentLoader>
}

export function LoadingRegister(){
    return <ContentLoader>
        <rect x="170" y="30" rx="2" ry="2" width="50" height="10" />
        <rect x="100" y="50" rx="2" ry="2" width="190" height="10" />
        <rect x="100" y="70" rx="2" ry="2" width="190" height="10" />
        <rect x="100" y="90" rx="2" ry="2" width="190" height="10" />
        <rect x="160" y="110" rx="2" ry="2" width="70" height="10" />
        {/* <rect x="160" y="130" rx="2" ry="2" width="70" height="10" /> */}
    </ContentLoader>
}

export default function Loading() {
    return <ContentLoader>
        <rect x="30" y="20" rx="2" ry="2" width="90" height="15" />
        <rect x="300" y="20" rx="2" ry="2" width="50" height="15" />
        <rect x="300" y="40" rx="2" ry="2" width="70" height="90" />
        <rect x="30" y="50" rx="2" ry="2" width="80" height="80" />
        <rect x="120" y="50" rx="2" ry="2" width="80" height="80" />
        <rect x="210" y="50" rx="2" ry="2" width="80" height="80" />
    </ContentLoader>
}